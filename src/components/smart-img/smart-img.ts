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
      position: relative;
    }

    smart-img .img-con {
      height: 100%;
      width: 100%;
      overflow: hidden;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    smart-img .scale-fill {
      background-size: 100% 100%;
    }

    smart-img .aspect-fit {
      background-size: contain;
    }

    smart-img .todo {
      background-color: #4abbde !important;
    }

    smart-img .todo:after {
      position: absolute;
      display: inline-block;
      content: "IMG";
      font-weight: bold;
      text-align: center;
      color: white;
      font-size: 13px;
      line-height: 20px;
      height: 20px;
      width: 100%;
      bottom: 0;
      overflow: hidden;
    }
  `],
  template: `
    <div class="img-con" [style.backgroundImage]="'url('+(url)+')'"
         [ngClass]="{'scale-fill': mode==1,'aspect-fit': mode==2,'todo': !url}"
    >
      <ng-content></ng-content>
    </div>
  `,
  // templateUrl: 'smart-img.html',
})
export class SmartImgComponent
{

  @Input()
  url: string;

  /**
   *  0 AspectFill
   *  1 ScaleToFill 拉升
   *  2 AspectFit 裁剪中间
   * @type {0|1|2}
   */
  @Input()
  mode: 0 | 1 | 2 = 0;

  constructor()
  {

  }

}
