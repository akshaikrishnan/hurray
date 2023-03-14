import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberInput]',
})
export class NumberInputDirective {
  maxValueReached = false;
  constructor(private el: ElementRef) {}
  @HostListener('keypress', ['$event']) Event(event: any) {
    const value = event.key;
    if (isNaN(value) || value > 9 || this.maxValueReached) {
      console.log(event);
      event.preventDefault();
    }
  }
  @HostListener('input', ['$event']) onInput(event: any) {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    if (value > 999999) {
      this.maxValueReached = true;
    } else {
      this.maxValueReached = false;
    }
  }
}
