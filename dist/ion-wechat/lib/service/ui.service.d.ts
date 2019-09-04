import { ActionSheetController, AlertController, LoadingController, ModalController, PopoverController, ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';
export declare class UiService {
    modal: ModalController;
    popover: PopoverController;
    actionSheet: ActionSheetController;
    private loadingCtrl;
    private alertCtrl;
    private toastCtrl;
    constructor(modal: ModalController, popover: PopoverController, actionSheet: ActionSheetController, loadingCtrl: LoadingController, alertCtrl: AlertController, toastCtrl: ToastController);
    toastShort(message: string, position?: 'top' | 'bottom' | 'middle'): Promise<any>;
    toast(options: ToastOptions): Promise<any>;
}
