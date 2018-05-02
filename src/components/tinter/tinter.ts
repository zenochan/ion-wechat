import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

/**
 * 着色
 */
@Component({
  selector: 'tinter',
  templateUrl: 'tinter.html'
})
export class TinterComponent implements OnInit
{
  @Input()
  color: string = 'orange';

  @ViewChild("body")
  el: ElementRef;

  ngOnInit(): void
  {
    this.el.nativeElement.style.webkitFilter = `drop-shadow(100vw 0 ${this.color})`;
  }


}
