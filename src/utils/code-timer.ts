import {Data} from "../ion-wechat.module";

export class CodeTimer
{
  wait: number = 0;
  /**
   * 等待间隔(s)，默认60
   * @type {number}
   */
  during: number = 60;

  constructor(public  type: string = "code")
  {
    Data.get(`code:wait:${this.type}`).then(wait => {
      if (!wait) return;
      let remain = (wait - new Date().getTime()) / 1000 | 0;
      if (remain > 0) {
        this.wait = remain;
        this.intoWait();
      }
    })
  }

  // 进入等待
  intoWait()
  {
    if (this.wait == 0)
      this.wait = 60;
    setTimeout(() => {
      this.wait--;
      if (this.wait > 0) {
        this.intoWait();
      }
    }, 1000)
  }

  /**
   * 在 ionWillUnload 方法中调用
   */
  saveStatus()
  {
    Data.set(`code:wait:${this.type}`, new Date().getTime() + this.wait * 1000).then()
  }
}