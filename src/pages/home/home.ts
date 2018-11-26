import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Page} from "ionic-angular/navigation/nav-util";
import {StickyPage} from "../sticky/sticky";
import {TinterPage} from "../tinter/tinter";
import {MediaPlayerPage} from "../media-player/media-player";
import {SlidingMenuPage} from "../sliding-menu/sliding-menu";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  pages: Page[] = [
    StickyPage,
    TinterPage,
    MediaPlayerPage,
    SlidingMenuPage
  ];

  constructor(public navCtrl: NavController)
  {
  }

}
