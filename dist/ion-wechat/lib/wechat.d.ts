import { Observable } from 'rxjs';
/**
 * js sdk
 * http://res.wx.qq.com/open/js/jweixin-1.1.0.js
 *
 * @see <a href="https://mp.weixin.qq.com/wiki">微信公众平台技术文档</a>
 *
 * - [Angular报错: Error encountered in metadata generated for exported symbol](https://blog.csdn.net/qq_30101131/article/details/87794721)
 */
export declare class Wechat {
    static DEBUG: boolean;
    private static initialized;
    private static COOKIE_KEY_AUTH_STATE;
    private static API_LIST;
    static MENU_ITEMS: {
        EXPOSE_ARTICLE: string;
        SET_FONT: string;
        DAY_MODE: string;
        NIGHT_MODE: string;
        REFRESH: string;
        PROFILE: string;
        ADD_CONTACT: string;
        SHARE_APP_MESSAGE: string;
        SHARE_TIME_LINE: string;
        SHARE_QQ: string;
        SHARE_WEIBO_APP: string;
        SHARE_FACEBOOK: string;
        SHARE_QZONE: string;
        FAVORITE: string;
        EDIT_TAG: string;
        DELETE: string;
        COPY_URL: string;
        ORIGIN_PAGE: string;
        READ_MORE: string;
        OPEN_WITH_QQ_BROWSER: string;
        OPEN_WITH_SAFARI: string;
        SHARE_EMAIL: string;
        SHARE_BRAND: string;
    };
    private static HIDES;
    private static signer;
    static configSigner(signer: () => Promise<WXSign>): void;
    static getAuthCode(): string;
    /**
     * @return Promise<number> 0-好友，1-朋友圈
     */
    static onShareWechat(options: {
        title: string;
        desc: string;
        link: string;
        imgUrl: string;
    }): Promise<number>;
    /**
     * 调起微信支付
     * Tip
     * 配置安全支付域名
     * jssdk 配置
     *
     * @see <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6">网页端调起支付API</a>
     */
    static pay(param: {
        timeStamp: string;
        timestamp?: string;
        nonceStr: string;
        package: string;
        signType: string;
        paySign: string;
        success?: any;
        fail?: any;
    }): Promise<any>;
    private static payOld;
    static shareUrl(param: object): string;
    static code(options: {
        /** 公众号 app id */
        appid: string;
        /** 开放平台 app id */
        component_appid?: string;
        /** 回调 不要 uri encode */
        redirect_uri?: string;
        scope?: 'snsapi_userinfo' | 'snsapi_base';
        /** 代理, 用于非授权域名实现授权业务 */
        proxy?: string;
    }): Observable<string>;
    static getNetworkType(): Promise<any>;
    static getLocation(): Promise<WXLocation>;
    static openLocation(location: {
        latitude: number;
        longitude: number;
    }): void;
    static openAddress(): Promise<WXAddress>;
    static previewImage(urls: Array<string>, current?: string): void;
    /** 关闭窗口 */
    static closeWindow(): void;
    static scanQRCode(): Promise<any>;
    /**
     * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @see {@link Wechat.MENU_ITEMS}
     */
    static hideMenuItems(...menuItems: any[]): void;
    /**
     * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @see {@link Wechat.MENU_ITEMS}
     */
    static showMenuItems(...menuItems: any[]): void;
    static isWechatAgent(): boolean;
    static getUrlParam(key: string, url?: string): string | null;
    private static sign;
    static startRecord(): Observable<string>;
    static stopRecord(): Observable<string>;
    /**
     * 获取公众号biz 的方法：打开公众号-查看历史消息-query[biz]
     * 打开公众号信息页
     * @param biz MzAwNDEyODA5MQ==
     */
    static home(biz: string): void;
    private static onVoiceRecordEnd;
    static translateVoice(localId: any): Observable<string>;
}
export interface WXSign {
    appId: string;
    timestamp: number;
    nonceStr: string;
    signature: string;
    jsApiList?: Array<string>;
    debug?: boolean;
}
export interface WXAddress {
    userName: string;
    telNumber: string;
    nationCode: string;
    errMsg: string;
    postalCode: string;
    provinceName: string;
    cityName: string;
    countryName: string;
    detailInfo: string;
}
export interface WXLocation {
    latitude: number;
    longitude: number;
    errMsg: string;
}
