import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {Content, ScrollEvent} from "ionic-angular";

@Directive({
  selector: '[sticky]' // Attribute selector
})
export class StickyDirective implements OnInit
{
  @Input()
  content: Content;

  @Input()
  height: number;

  constructor(private element: ElementRef)
  {
    console.log('Hello StickyDirective Directive');
    element.nativeElement.hidden = true;
    element.nativeElement.style.position = 'fixed';
    element.nativeElement.style.zindex = 10;
  }

  ngOnInit(): void
  {
    this.content.ionScroll.subscribe((event: ScrollEvent) => {
      let top = event.scrollTop;
      let left = event.scrollLeft;
      let height = event.scrollHeight;
      let width = event.scrollWidth;

      this.element.nativeElement.hidden = top < this.height;
      console.log(top,this.height);
    })
  }
}
