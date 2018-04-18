import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {AlertController, LoadingController, ToastController, ToastOptions} from "ionic-angular";

/*
 Generated class for the UikitService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class WeuiService
{
  constructor(private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController)
  {
  }

  showLoading()
  {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div>
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
        </div>
    </div>
`
    });

    loading.present();
    return loading;
  }

  toastShort(message: string, position?: "top" | "bottom" | "middle"): Promise<any>
  {
    return this.toast({message: message, position: position || "top", duration: 2000});
  }

  toast(options: ToastOptions): Promise<any>
  {
    return this.toastCtrl.create(options).present();
  }

  alert(message: string, ok?: string, action?: () => void, title: string = '提示'): Promise<any>
  {
    return this.alertCtrl.create({
      enableBackdropDismiss: false,
      title: title,
      message: message,
      buttons: [{
        text: ok || "好",
        handler: action
      }]
    }).present();
  }


  input(options: {
    title?: string,
    message?: string,
    ok?: string,
    placeholder?: string,
    type?: string,
    action?: (input: string) => void,
  }): Promise<any>
  {
    return this.alertCtrl.create({
      enableBackdropDismiss: false,
      title: options.title || "提示",
      message: options.message,
      inputs: [{
        name: "input",
        placeholder: options.placeholder,
        type: options.type
      }],
      buttons: [{
        text: "取消"
      }, {
        text: options.ok || "好",
        handler: data => options.action && options.action(data.input)
      }]
    }).present();
  }

  prompt(message: string, ok?: string, cancel?: string, action?: () => void): Promise<any>
  {
    return this.alertCtrl.create({
      title: "提示", message: message, buttons: [{
        text: cancel || "取消"
      }, {
        text: ok || "好",
        handler: action
      }]
    }).present();

  }
}

