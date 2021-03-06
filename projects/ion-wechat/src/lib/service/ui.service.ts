import {Injectable} from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ModalController,
  PopoverController,
  ToastController
} from '@ionic/angular';
import {AnimationBuilder, Color, Mode, ToastButton, ToastOptions} from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class UiService
{
  constructor(
      public modal: ModalController,
      public popover: PopoverController,
      public actionSheet: ActionSheetController,
      private loadingCtrl: LoadingController,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController
  )
  { }

//   showLoading(): Loading
//   {
//     const loading = this.loadingCtrl.create({
//       spinner: 'hide',
//       content: `
//       <div>
//         <div class="weui-mask_transparent"></div>
//         <div class="weui-toast">
//             <i class="weui-loading weui-icon_toast"></i>
//             <p class="weui-toast__content">数据加载中</p>
//         </div>
//     </div>
// `
//     });
//
//     loading.then();
//     return loading;
//   }
//
  toastShort(message: string, position?: 'top' | 'bottom' | 'middle'): Promise<any>
  {
    return this.toast({message, position: position || 'top', duration: 2000});
  }

  toast(options: ToastOptions): Promise<any>
  {
    return this.toastCtrl.create(options).then(toast => {
      toast.present();
    });
  }

// alert(message: string, ok?: string, action?: () => void, title: string = '提示'): Promise<any>
// {
//   return this.alertCtrl.create({
//     enableBackdropDismiss: false,
//     title: title,
//     message: message,
//     buttons: [{
//       text: ok || '好',
//       handler: action
//     }]
//   }).present();
// }


// input(options: {
//   title?: string,
//   message?: string,
//   ok?: string,
//   placeholder?: string,
//   type?: string,
//   action?: (input: string) => void,
// }): Promise<any>
// {
//   return this.alertCtrl.create({
//     enableBackdropDismiss: false,
//     title: options.title || '提示',
//     message: options.message,
//     inputs: [{
//       name: 'input',
//       placeholder: options.placeholder,
//       type: options.type
//     }],
//     buttons: [{
//       text: '取消'
//     }, {
//       text: options.ok || '好',
//       handler: data => options.action && options.action(data.input)
//     }]
//   }).present();
// }

// prompt(message: string, ok?: string, cancel?: string, action?: () => void): Promise<any>
// {
//   return this.alertCtrl.create({
//     title: '提示', message: message, buttons: [{
//       text: cancel || '取消'
//     }, {
//       text: ok || '好',
//       handler: action
//     }]
//   }).present();
//
// }

}
