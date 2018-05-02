import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

/**
 * 着色
 */
@Component({
  selector: 'tinter',
  styles: [`

    .tinter-body {
      position: relative;
      left: -100vw;
    }
  `],
  template: `
    <div class="tinter-body" #body>
      <ng-content></ng-content>
    </div>
  `,
})
export class TinterComponent implements OnInit
{
  @Input()
  color: string = 'orange';

  @ViewChild("body")
  el: ElementRef;

  constructor(el: ElementRef)
  {
    el.nativeElement.style.overflow = 'hidden';
    el.nativeElement.style.display = 'block';
    el.nativeElement.style.margin = '0';
    el.nativeElement.style.padding = '0';
  }

  ngOnInit(): void
  {
    this.el.nativeElement.style.webkitFilter = `drop-shadow(100vw 0 ${this.color})`;
  }


}
