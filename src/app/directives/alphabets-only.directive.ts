import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphabetsOnly]',
})
export class AlphabetsOnlyDirective {
  constructor(private el: ElementRef) {}
  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initialValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initialValue.replace(/[^a-zA-Z\s]*/g, '');
    if (initialValue !== this.el.nativeElement.value) {
      event.preventDefault();
    }
  }
}
