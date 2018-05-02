import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

/**
 * 着色
 */
@Component({
  selector: 'tinter',
  styles: [`

    .tinter-body {
      display: inline-block;
      position: relative;
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
  colorValue: string = 'orange';

  /**
   * @param {string} value 着色颜色
   */
  @Input('color')
  set color(value: string)
  {
    this.colorValue = value;
    this.filter();
  }

  @Input()
  offsetX = 8;
  @Input()
  offsetY = 8;

  @ViewChild("body")
  body: ElementRef;

  constructor(private el: ElementRef)
  {
    el.nativeElement.style.overflow = 'hidden';
    el.nativeElement.style.display = 'block';
    el.nativeElement.style.margin = '0';
    el.nativeElement.style.padding = '0';
  }

  ngOnInit(): void
  {
    this.filter();
  }

  filter()
  {
    let w = this.body.nativeElement.clientWidth - this.offsetX;
    let h = this.body.nativeElement.clientHeight - this.offsetY;
    this.body.nativeElement.style.left = -w + 'px';
    this.body.nativeElement.style.top = -h + 'px';

    this.body.nativeElement.style.webkitFilter = `drop-shadow(${w}px ${h}px ${this.colorValue})`;
  }

}
