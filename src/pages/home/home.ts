import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UI} from "../../ion-wechat.module";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{

  constructor(public navCtrl: NavController)
  {
    UI.showLoading();
  }

}
