import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'bgm',
  // templateUrl: 'bgm.html',
  styles: [
      `
      .icon-music-outer {
        display: inline-block;
        width: 25px;
        height: 25px;
        position: fixed;
        right: 5px;
        top: 10px;
        font-size: 25px;
        color: #ffda51;
        z-index: 999;
        border-radius: 16px;
        /*border: solid #ffda51 2px;*/
      }

      .icon-music-outer img {
        width: 100%;
        height: 100%;
      }

      .forbid {
        display: inline-block;
        font-size: 25px;
        width: 25px;
        height: 25px;
      }

      .icon-forbidMusic {
        display: inline-block;
        font-size: 25px;
        width: 25px;
        height: 25px;
        color: #d0f2fc;
      }

      audio {
        position: absolute;
        left: -300px;
      }

      .activeMusic {
        transform: rotate(0);
        -webkit-animation: musicMove 2s infinite linear;
        animation: musicMove 2s infinite linear;
      }

      @-webkit-keyframes musicMove {
        0% {
          transform: rotate(0);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes musicMove {
        0% {
          transform: rotate(0);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    `

  ],
  template: `
    <i class="icon-music-outer" id="outer">
      <i class="forbid icon-music" (click)="pause()" *ngIf="playing">
        <img class="music activeMusic" [src]="img"/>
      </i>
      <i class="forbid icon-forbidMusic" (click)="play()" *ngIf="!playing">
        <img class="music" [src]="img"/>
      </i>

      <audio #audio loop autoplay="autoplay" controls id="bgMusic" [src]="src" hidden></audio>
    </i>
  `
})
export class BgmComponent implements OnInit
{
  @ViewChild('audio')
  audioRef: ElementRef;

  audio: HTMLAudioElement;
  playing = true;

  @Input()
  img: string = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2518206345,2615006369&fm=26&gp=0.jpg';

  @Input()
  src: string = 'http://old.haolingsheng.com/download/ring/000/100/cdadeab9561132c5028f11ede6026bdd.mp3';

  constructor() { }

  ngOnInit(): void
  {
    let audio = this.audioRef.nativeElement as HTMLAudioElement;
    this.audio = audio;
    document.addEventListener("WeixinJSBridgeReady", function () {
      audio.play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function () {
      audio.play();
    }, false);
  }

  pause()
  {
    this.playing = false;
    this.audio.pause();
  }

  play()
  {
    this.playing = true;
    this.audio.play();
  }
}
