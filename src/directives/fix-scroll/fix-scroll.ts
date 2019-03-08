import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[fix-scroll]' // Attribute selector
})
export class FixScrollDirective {

  content: HTMLElement | any;

  constructor(private element: ElementRef)
  {
    this.content = element.nativeElement;
    setTimeout(() => {
      let scroll = window.document.getElementsByClassName("scroll-content")[0];
      this.fix();
      scroll.addEventListener("scroll", e => {
        this.fix();
      });
    }, 1000);
  }

  private fix()
  {
    let scroll = window.document.getElementsByClassName("scroll-content")[0];
    if (scroll.scrollTop == 0) {
      scroll.scrollTo(0, 1);
    } else if (scroll.scrollTop + scroll.clientHeight == scroll.scrollHeight) {
      scroll.scrollTo(0, scroll.scrollTop - 1);
    }
  }
}
