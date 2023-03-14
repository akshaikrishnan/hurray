import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaxvalue]',
})
export class MaxvalueDirective {
  constructor(private el: ElementRef) {}
  @HostListener('keypress', ['$event']) onInput(event: any) {
    const value = event.key;
    if (isNaN(value) || value < 1 || value >= 7) {
      console.log(event);
      event.preventDefault();
    }
  }
}
