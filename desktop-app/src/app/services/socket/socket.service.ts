import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }

  private subject: Observable<MessageEvent>;
  
  public connect(url) {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }

  private create(url): Observable<MessageEvent> {
    let ws = new WebSocket(url);

    let socket = new Observable((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onopen = () => console.log(`App socket open at ${url}`);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = (ev: CloseEvent) => {
        console.log(
          "Socket is closed. Reconnect will be attempted in 2 seconds.",
          ev.reason
        );
        setTimeout(() => {
          if (!ws.OPEN && !ws.CONNECTING && !ws.CLOSED) {
            this.connect(url);
          }
        }, 2000);
        return obs.complete.bind(obs);
      };
    });
    return socket;
  }
}
