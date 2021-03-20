import { AfterContentInit, Component, ContentChild, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DropdownMenuDirective } from 'src/app/directives/dropdown-menu-directive.directive';
import { DropdownMenuOriginDirective } from 'src/app/directives/dropdown-menu-origin.directive';
import Popper,{Placement} from 'popper.js';

@Component({
  selector: "base-dropdown",
  template: `
    <ng-content></ng-content>
  `,
})
export class BaseDropdownComponent implements AfterContentInit, OnDestroy {

  @ContentChild(DropdownMenuOriginDirective) origin: DropdownMenuOriginDirective;
  @ContentChild(DropdownMenuDirective) dropdown: DropdownMenuDirective;

  @Input() placement:Placement = "bottom-start";

  private _popper: Popper;
  private _open = false;
  private _originSub: Subscription;

  constructor(private host: ElementRef) {
  }

  @HostListener("document:click", ["$event.target"])
  click(target) {
    if (!(this.host.nativeElement as HTMLElement).contains(target) && this._open) {
      this.close();
    }
  }


  /**
   * Subscribe to the origin click event
   */
  ngAfterContentInit() {
    this.host.nativeElement.removeChild(this.dropdown.element)
    this._originSub = this.origin.click.subscribe(_ => {
      this._open = !this._open;
      if (this._open) {
        this.open();
      } else {
        this.close();
      }
    });
  }

  /**
   * Append the dropdown to body and init popper
   */
  open() {
    document.body.appendChild(this.dropdown.element);
    this._popper = new Popper(this.origin.element, this.dropdown.element, this._getOptions());
  }

  /**
   *
   * @returns Partial<PopperOptions>
   * @private
   */
  private _getOptions() {
    return {
      placement: this.placement,
    }
  }

  /**
   * Destroy popper and hide the dropdown
   */
  close() {
    if (this._open) {
      this._open = false;
      this._popper && this._popper.destroy();
      document.body.removeChild(this.dropdown.element)
    }
  }

  /**
   * Cleaning
   */
  ngOnDestroy() {
    this._originSub && this._originSub.unsubscribe();
    this.close();
  }
}