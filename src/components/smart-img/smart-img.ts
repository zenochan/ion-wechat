import {Component, Input} from '@angular/core';


/**
 * Generated class for the SmartImgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'smart-img',
  styles: [`
    smart-img {
      display: block;
    }
  `, `
    .img-con {
      height: 100%;
      width: 100%;
      overflow: hidden;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  `, `
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
  // templateUrl: 'smart-img.html',
})
export class SmartImgComponent
{

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

}
