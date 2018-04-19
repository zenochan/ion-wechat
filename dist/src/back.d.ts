export declare class Back {
    static title(title: string): void;
    static onIonViewDidLoad(page: any): void;
    static onIonViewWillUnload(page: any): void;
}
export declare class BasePage {
    title: string;
    enableBack: boolean;
    /**
     * @param {string} title 标题
     * @param {boolean} enableBack 是否添加 window.history 会退栈
     */
    constructor(title?: string, enableBack?: boolean);
    ionViewWillEnter(): void;
    setTitle(title: string): void;
    ionViewDidLoad(): void;
    ionViewWillUnload(): void;
}
