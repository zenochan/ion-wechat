import {Component, Input} from '@angular/core';
import {Wechat} from "../../providers/wechat";

// import {Wechat} from "../../providers/wechat";

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
    <div [innerHTML]="_html |sanitizer:'HTML'" (click)="click($event)"></div>
  `
})
export class RichTextComponent
{
  _html: string = "";
  private imgUrls: string[];


  @Input()
  get src()
  {
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
