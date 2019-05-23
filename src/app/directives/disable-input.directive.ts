import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisableInput]'
})
export class DisableInputDirective {

  constructor(private el: ElementRef) {
    const elRef =  this.el.nativeElement;
    elRef.style.backgroundColor = 'white';
    elRef.style.border = '1px solid red';
    elRef.disabled = 'disabled';
    elRef.style.cursor = 'pointer';
    console.log(elRef)
  }



}
