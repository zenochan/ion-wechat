import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * 着色
 */
@IonicPage()
@Component({
  selector: 'page-tinter',
  templateUrl: 'tinter.html',
})
export class TinterPage
{

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad TinterPage');
  }

}
