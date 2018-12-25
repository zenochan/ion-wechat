import "rxjs/add/operator/map";
import { ActionSheetController, AlertController, Loading, LoadingController, ModalController, PopoverController, ToastController, ToastOptions } from "ionic-angular";
export declare class WeuiService {
    modal: ModalController;
    popover: PopoverController;
    actionSheet: ActionSheetController;
    private loadingCtrl;
    private alertCtrl;
    private toastCtrl;
    constructor(modal: ModalController, popover: PopoverController, actionSheet: ActionSheetController, loadingCtrl: LoadingController, alertCtrl: AlertController, toastCtrl: ToastController);
    showLoading(): Loading;
    toastShort(message: string, position?: "top" | "bottom" | "middle"): Promise<any>;
    toast(options: ToastOptions): Promise<any>;
    alert(message: string, ok?: string, action?: () => void, title?: string): Promise<any>;
    input(options: {
        title?: string;
        message?: string;
        ok?: string;
        placeholder?: string;
        type?: string;
        action?: (input: string) => void;
    }): Promise<any>;
    prompt(message: string, ok?: string, cancel?: string, action?: () => void): Promise<any>;
}
