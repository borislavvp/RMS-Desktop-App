import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private subject = new Subject<MessageEvent>();
  private server: WebSocket;
  
  constructor() { }
  
  get Subject() {
    return this.subject;
  }

  public disconnect() {
    this.server && this.server.close();
  }

  public connect(url: string) {
      this.server = new WebSocket(url);

      this.server.onmessage = (ev: MessageEvent) => {
        console.log(ev);
        this.subject.next(ev);
      }
      this.server.onopen = (ev) => {
        console.log(`App socket open at ${url}`);
      };
      this.server.onerror = () => {
        console.error("Socket encountered error: Closing socket");
        this.server.close();
      };
      this.server.onclose = (ev: CloseEvent) => {
        console.log(
          "Socket is closed. Reconnect will be attempted in 2 seconds.",
          ev.reason
        );
        this.reconnect(url);
      };
    return this.subject;
  }

  private reconnect = (url:string) => {
     setTimeout(() => {
        if (
          !(this.server.readyState === this.server.OPEN) &&
          !(this.server.readyState === this.server.CONNECTING)
        ) {
            this.connect(url);
        }
      }, 2000);
  }
}
