import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MediaPlayerPage} from "../media-player/media-player";
import {StickyPage} from "../sticky/sticky";
import {TinterPage} from "../tinter/tinter";

/**
 * Generated class for the SlidingMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sliding-menu',
  templateUrl: 'sliding-menu.html',
})
export class SlidingMenuPage
{
  root1 = StickyPage;
  root2 = TinterPage;
  root3 = MediaPlayerPage;

  showMenu = false;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad SlidingMenuPage');
  }

}
