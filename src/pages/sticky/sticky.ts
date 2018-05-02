import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BasePage} from "../../back";

@IonicPage()
@Component({
  selector: 'page-sticky',
  templateUrl: 'sticky.html',
})
export class StickyPage extends BasePage
{
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    super("Sticky Header", true);
  }
}
