import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Wechat} from "../../providers/wechat";

/**
 * 实现微信浏览器内点击预览
 */
@Component({
  selector: 'rich-text',
  styles: [
      `rich-text {
      display: block
    }`,
      `rich-text img {
      display: block;
      width: 100%;
    }`

  ],
  template: `
    <div [innerHTML]="_html" #container (click)="click($event)"></div>
  `
})
export class RichTextComponent
{
  private _html: string;
  private imgUrls: string[];

  @ViewChild("container") elementRef: ElementRef;

  @Input()
  get src(){
    return this._html;
  }

  set src(html: string)
  {
    this._html = html;
    this.imgUrls = [];
    html.replace(/<img src=['"]([^['"]+)['"]/g, (a, url) => {
      this.imgUrls.push(url);
      return a
    });
  }

  constructor()
  {
  }

  click($event)
  {
    let target = $event.target || $event.srcElement;
    if (target.tagName.toLowerCase() != "img") {
      return
    }

    let src = target.src;
    try { Wechat.previewImage(this.imgUrls, src);} catch (e) { console.error("微信预览失败", e) }
  }
}
