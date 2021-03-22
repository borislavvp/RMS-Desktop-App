import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dropdownMenu]'
})
export class DropdownMenuDirective {
  constructor(public host: ElementRef) {
  }

  get element() {
    return this.host.nativeElement;
  }

}
