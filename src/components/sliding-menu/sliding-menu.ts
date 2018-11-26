import {Component, Input} from '@angular/core';

@Component({
  selector: 'sliding-menu',
  templateUrl: 'sliding-menu.html'
})
export class SlidingMenuComponent
{
  @Input("show")
  isShow = false;


  constructor()
  {
    console.log('Hello SlidingMenuComponent Component');
  }

}
