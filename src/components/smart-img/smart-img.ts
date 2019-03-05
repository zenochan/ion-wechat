import {Component, Input} from '@angular/core';
import {Wechat} from "../../providers/wechat";


@Component({
  selector: 'smart-img',
  styles: [`
    smart-img {
      display: block;
      width: 200px;
      height: 200px;
      /* 圆角生效*/
      overflow: hidden;
    }

    .img-con {
      height: 100%;
      width: 100%;
      overflow: hidden;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .scale-fill {
      background-size: 100% 100%;
    }

    .aspect-fit {
      background-size: contain;
    }

    .todo {
      border: 2px solid gray;
    }
  `],
  template: `
    <div class="img-con"
         (click)="preview($event)"
         [style.backgroundImage]="'url('+(src)+')'"
         [ngClass]="{
           'scale-fill': mode==1,
           'aspect-fit': mode==2,
           'todo': !src
         }"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class SmartImgComponent
{
  @Input()
  enablePreview: boolean = false;

  @Input()
  src: string;

  /**
   *  0 AspectFill 拉伸
   *  1 ScaleToFill 完整显示在中间
   *  2 AspectFit 裁剪中间
   * @type {0|1|2}
   */
  @Input()
  mode: 0 | 1 | 2 = 0;

  constructor()
  {

  }

  preview($event)
  {
    if (this.enablePreview) {
      Wechat.previewImage([this.src]);
      $event.stopPropagation();
    }
  }
}
