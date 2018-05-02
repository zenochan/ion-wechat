import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Page} from "ionic-angular/navigation/nav-util";
import {StickyPage} from "../sticky/sticky";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  pages: Page[] = [
    StickyPage
  ];


  constructor(public navCtrl: NavController)
  {
    console.log(StickyPage.name)

  }

}
