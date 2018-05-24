import {Directive, HostListener} from '@angular/core';
import {App} from "ionic-angular";


/**
 * Generated class for the BackListenerDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[back-listener]' // Attribute selector
})
export class BackListenerDirective {

  constructor(public app:App) {
    console.log('Hello BackListenerDirective Directive')
  }

  @HostListener('click')
  onClick() {
    console.log('Hello BackListenerDirective Directive')
    let nav = this.app.getActiveNav();
    nav.pop();
  }
}
