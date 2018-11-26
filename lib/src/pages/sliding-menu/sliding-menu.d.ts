import { NavController, NavParams } from 'ionic-angular';
import { MediaPlayerPage } from "../media-player/media-player";
import { StickyPage } from "../sticky/sticky";
import { TinterPage } from "../tinter/tinter";
/**
 * Generated class for the SlidingMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export declare class SlidingMenuPage {
    navCtrl: NavController;
    navParams: NavParams;
    root1: typeof StickyPage;
    root2: typeof TinterPage;
    root3: typeof MediaPlayerPage;
    showMenu: boolean;
    constructor(navCtrl: NavController, navParams: NavParams);
    ionViewDidLoad(): void;
}
