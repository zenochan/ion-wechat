import {Component, Input} from '@angular/core';


/**
 * Generated class for the SmartImgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'smart-img',
  template:`
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
