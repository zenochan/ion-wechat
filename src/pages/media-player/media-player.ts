import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MediaPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-media-player',
  templateUrl: 'media-player.html',
})
export class MediaPlayerPage
{
  showMenu = false;


  playButtonText = "播放";
  // Video
  @ViewChild("video")
  video: ElementRef;

  // Buttons
  @ViewChild("mute")
  muteButton: ElementRef;
  @ViewChild("full-screen")
  fullScreenButton: ElementRef;

  // Sliders
  @ViewChild("seek-bar")
  seekBar: ElementRef;
  @ViewChild("volume-bar")
  volumeBar: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
  }

  togglePlay()
  {
    let video = this.video.nativeElement;

    if (video.paused == true) {
      // Play the video
      video.play();

      this.playButtonText = "暂定";
    } else {
      // Pause the video
      video.pause();

      this.playButtonText = "播放";
    }

  }


}
