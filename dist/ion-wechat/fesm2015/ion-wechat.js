import { Pipe, Injectable, ElementRef, NgModule, ɵɵdefineInjectable, ɵɵinject, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { Events, ModalController, PopoverController, ActionSheetController, LoadingController, AlertController, ToastController, IonicModule } from '@ionic/angular';
import * as VConsole from 'vconsole';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 选择上传的图片，图片文件预览
 *
 * <p>usage
 * <pre>[src]="file | preview | async"</pre>
 */
class PreviewPipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => {
            /** @type {?} */
            const reader = new FileReader();
            reader.onload = (/**
             * @param {?} event
             * @return {?}
             */
            event => {
                /** @type {?} */
                const result = ((/** @type {?} */ (event.target))).result;
                subscriber.next(result);
                subscriber.complete();
            });
            reader.readAsDataURL(value);
        }));
    }
}
PreviewPipe.decorators = [
    { type: Pipe, args: [{ name: 'preview' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * [src]="src | sanitizer : 'HTML'"
 * - NONE
 * - HTML
 * - STYLE
 * - SCRIPT
 * - URL
 * - RESOURCE_URL
 */
class Sanitizer {
    /**
     * @param {?} sanitiser
     */
    constructor(sanitiser) {
        this.sanitiser = sanitiser;
        this.SecurityContextMap = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
    }
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    transform(value, args) {
        /** @type {?} */
        let res;
        value = value + '';
        /** @type {?} */
        let context = this.SecurityContextMap.STYLE;
        if (args && typeof args == "string" && this.SecurityContextMap.hasOwnProperty(args.toUpperCase())) {
            context = this.SecurityContextMap[args.toUpperCase()];
        }
        switch (context) {
            case this.SecurityContextMap.HTML:
                res = this.sanitiser.bypassSecurityTrustHtml(value);
                break;
            case this.SecurityContextMap.URL:
                res = this.sanitiser.bypassSecurityTrustUrl(value);
                break;
            case this.SecurityContextMap.SCRIPT:
                res = this.sanitiser.bypassSecurityTrustScript(value);
                break;
            case this.SecurityContextMap.STYLE:
                res = this.sanitiser.bypassSecurityTrustStyle(value);
                break;
            case this.SecurityContextMap.RESOURCE_URL:
                res = this.sanitiser.bypassSecurityTrustResourceUrl(value);
                break;
            default:
                res = this.sanitiser.sanitize(context, value);
                break;
        }
        return res;
    }
}
Sanitizer.decorators = [
    { type: Pipe, args: [{ name: 'sanitizer' },] },
    { type: Injectable }
];
/** @nocollapse */
Sanitizer.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    Sanitizer.prototype.SecurityContextMap;
    /** @type {?} */
    Sanitizer.prototype.sanitiser;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} format
 * @return {?}
 */
function now(format) {
    return new Date().format(format || 'yyyy/MM/dd HH:mm:ss');
}
Date.prototype.ONE_DAY = 86400000;
// 周次
Date.prototype.weekOfYear = (/**
 * @return {?}
 */
function () {
    /** @type {?} */
    const year = this.getFullYear();
    /** @type {?} */
    const d = new Date(this);
    d.setHours(0, 0, 0, 0);
    // 当年的第一天
    /** @type {?} */
    const yearStart = new Date(year, 0, 1);
    // 修正第一天周数的偏移量
    d.setDate(d.getDate() + yearStart.getDay());
    /** @type {?} */
    const deltaDay = (d.getTime() - yearStart.getTime()) / this.ONE_DAY + 1;
    /** @type {?} */
    const weekNo = Math.ceil(deltaDay / 7);
    return [year, weekNo];
});
Date.prototype.format = (/**
 * @param {?} fmt
 * @return {?}
 */
function (fmt) {
    // author: meizz
    /** @type {?} */
    const o = {
        'M+': this.getMonth() + 1,
        // 月份
        'd+': this.getDate(),
        // 日
        'h+': this.getHours() % 12 === 0 ? 12 : this.getHours() % 12,
        // 小时
        'H+': this.getHours(),
        // 小时
        'm+': this.getMinutes(),
        // 分
        's+': this.getSeconds(),
        // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3),
        // 季度
        S: this.getMilliseconds() // 毫秒
    };
    // 年
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    // 星期
    if (/(E+)/.test(fmt)) {
        /** @type {?} */
        const week = ['日', '一', '二', '三', '四', '五', '六'];
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '星期' : '周') : '')
            + week[this.getDay() + '']);
    }
    for (const k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
});
Date.prototype.addDay = (/**
 * @param {?} days
 * @return {?}
 */
function (days) {
    this.setTime(this.getTime() + this.ONE_DAY * days);
    return this;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * url | photo : 'yyyy-MM-dd' : 'default'
 */
class ZdatePipe {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        if (!value || typeof value !== 'string') {
            return '';
        }
        // 屏蔽 php 。laravel 默认时间
        if (value.indexOf('1970-01-01') > -1 || value.indexOf('0000-00-00') > -1) {
            value = null;
        }
        if (!value) {
            return args[1] || '';
        }
        // compat HH:mm:ss
        if (value.length === 8 && value.indexOf(':') === 2 && value.lastIndexOf(':') === 5) {
            value = '2018/1/1 ' + value;
        }
        value = value.replace(/-/g, '/');
        return new Date(Date.parse(value)).format(args[0] || 'yyyy/MM/dd');
    }
}
ZdatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'zdate',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Photo {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} value
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    transform(value, width, height) {
        return transPhoto(value, width, height);
    }
}
Photo.BASE_URL = '';
Photo.decorators = [
    { type: Pipe, args: [{ name: 'photo' },] }
];
/** @nocollapse */
Photo.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    Photo.BASE_URL;
    /**
     * @type {?}
     * @private
     */
    Photo.prototype.el;
}
/**
 * @param {?} value
 * @param {?=} width
 * @param {?=} height
 * @return {?}
 */
function transPhoto(value, width, height) {
    if (!value) {
        return '';
    }
    /** @type {?} */
    const p = value + '';
    if (p.indexOf('http') === 0) {
        return p;
    }
    /** @type {?} */
    const cdnPrefix = Photo.BASE_URL;
    /** @type {?} */
    let url = cdnPrefix + p;
    if (width) {
        url += '?imageView2/2/w/' + width;
        if (height) {
            url += '/h/' + height;
        }
    }
    return url;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const pipes = [
    PreviewPipe,
    Sanitizer,
    ZdatePipe,
    Photo
];
class IonWechatPipesModule {
}
IonWechatPipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...pipes],
                imports: [],
                exports: [...pipes]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// 注入微信 js
/** @type {?} */
const jssdk = document.createElement('script');
jssdk.src = 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js';
document.getElementsByTagName('head')[0].appendChild(jssdk);
/**
 * js sdk
 * http://res.wx.qq.com/open/js/jweixin-1.1.0.js
 *
 * @see <a href="https://mp.weixin.qq.com/wiki">微信公众平台技术文档</a>
 *
 * - [Angular报错: Error encountered in metadata generated for exported symbol](https://blog.csdn.net/qq_30101131/article/details/87794721)
 */
// @dynamic
class Wechat {
    //  配置签名
    /**
     * @param {?} signer
     * @return {?}
     */
    static configSigner(signer) {
        this.signer = signer;
        this.sign().then((/**
         * @return {?}
         */
        () => {
            Wechat.hideMenuItems(...Wechat.HIDES);
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        error => console.error('JS SDK 签名异常', error)));
    }
    // 获取 auth code
    /**
     * @return {?}
     */
    static getAuthCode() {
        /** @type {?} */
        const cookieState = localStorage.getItem(Wechat.COOKIE_KEY_AUTH_STATE);
        localStorage.removeItem(Wechat.COOKIE_KEY_AUTH_STATE);
        /** @type {?} */
        const urlState = Wechat.getUrlParam('state');
        if (urlState && urlState === cookieState) {
            return Wechat.getUrlParam('code');
        }
        else {
            return null;
        }
    }
    /**
     * @param {?} options
     * @return {?} Promise<number> 0-好友，1-朋友圈
     */
    static onShareWechat(options) {
        if (options.imgUrl.indexOf('http') === -1) {
            options.imgUrl = location.href.split('?')[0] + options.imgUrl;
        }
        return this.sign().catch((/**
         * @param {?} err
         * @return {?}
         */
        err => console.log('jssdk 签名失败', err)))
            .then((/**
         * @return {?}
         */
        () => {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            resolve => {
                wx.onMenuShareTimeline({
                    title: options.title + (options.desc ? ' | ' + options.desc : ''),
                    desc: null,
                    // 分享到朋友圈没有 desc 字段，拼接到 title 上
                    link: options.link,
                    imgUrl: options.imgUrl,
                    success: (/**
                     * @return {?}
                     */
                    () => resolve(1))
                });
                wx.onMenuShareAppMessage({
                    title: options.title,
                    // 分享标题
                    desc: options.desc,
                    // 分享描述
                    link: options.link,
                    // 分享链接
                    imgUrl: options.imgUrl,
                    // 分享图标
                    type: 'link',
                    // 分享类型,music、video或link，不填默认为link
                    dataUrl: null,
                    // 如果type是music或video，则要提供数据链接，默认为空
                    success: (/**
                     * @return {?}
                     */
                    () => resolve(0))
                });
            }));
        }));
    }
    /**
     * 调起微信支付
     * Tip
     * 配置安全支付域名
     * jssdk 配置
     *
     * @see <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6">网页端调起支付API</a>
     * @param {?} param
     * @return {?}
     */
    static pay(param) {
        param.timestamp = param.timestamp || param.timeStamp;
        /** @type {?} */
        const callPay = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            param.success = (/**
             * @param {?} res
             * @return {?}
             */
            res => {
                if (res.errMsg === 'chooseWXPay:ok' || res.err_msg === 'get_brand_wcpay_request:ok') {
                    resolve('success');
                }
                else if (res.err_msg === 'get_brand_wcpay_request:cancel') {
                    reject({ code: 1, message: '取消支付' });
                }
                else if (res.err_msg === 'get_brand_wcpay_request:failed') {
                    reject({ code: 2, message: '支付失败' });
                }
                else if (res.err_code === 3) {
                    reject({ code: 3, message: res });
                }
                else {
                    reject({ code: 9, message: res.errMsg || res.err_msg });
                }
            });
            param.fail = (/**
             * @param {?} res
             * @return {?}
             */
            res => {
                if (res.errMsg) {
                    reject({ code: 9, message: res.errMsg || res.err_msg });
                }
                else {
                    reject(res);
                }
            });
            // @deprecated 使用 {@link payOld}, jssdk 的 wx.chooseWxpay
            // wx.chooseWXPay(param);
            Wechat.payOld(param);
        }));
        return callPay;
        // return Wechat.sign().then(() => callPay);
    }
    /**
     * @private
     * @param {?} sign
     * @return {?}
     */
    static payOld(sign) {
        /** @type {?} */
        const onBridgeReady = (/**
         * @return {?}
         */
        () => WeixinJSBridge.invoke('getBrandWCPayRequest', sign, sign.success));
        if (typeof WeixinJSBridge === 'undefined') {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            }
            else if (((/** @type {?} */ (document))).attachEvent) {
                ((/** @type {?} */ (document))).attachEvent('WeixinJSBridgeReady', onBridgeReady);
                ((/** @type {?} */ (document))).attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
        }
        else {
            onBridgeReady();
        }
    }
    /**
     * @param {?} param
     * @return {?}
     */
    static shareUrl(param) {
        /** @type {?} */
        let url = location.href.split('?')[0];
        Object.keys(param).forEach((/**
         * @param {?} key
         * @param {?} index
         * @return {?}
         */
        (key, index) => {
            if (!param[key] || param[key] === 'null') {
                return;
            }
            url += url.indexOf('?') === -1 ? '?' : '&';
            url += key + '=' + decodeURIComponent(param[key]);
        }));
        return url;
    }
    // 微信登录
    /**
     * @param {?} options
     * @return {?}
     */
    static code(options) {
        return Observable.create((/**
         * @param {?} sub
         * @return {?}
         */
        sub => {
            /** @type {?} */
            const code = this.getAuthCode();
            if (!code) {
                /** @type {?} */
                const op = options || {};
                op.scope = op.scope || 'snsapi_userinfo';
                op.state = 'wechat_auth_' + new Date().getTime();
                op.redirect_uri = encodeURIComponent(options.redirect_uri || location.href.split('?')[0]);
                op.response_type = 'code';
                localStorage.setItem(Wechat.COOKIE_KEY_AUTH_STATE, op.state);
                /** @type {?} */
                let url = (options.proxy || 'https://open.weixin.qq.com/connect/oauth2/authorize');
                /** @type {?} */
                const query = Object.keys(op).map((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => `${key}=${op[key]}`)).join('&');
                url += `?${query}#wechat_redirect`;
                window.location.replace(url);
                sub.complete();
            }
            else {
                sub.next(code);
                sub.complete();
            }
        }));
    }
    //  获取地理位置接口
    /**
     * @return {?}
     */
    static getNetworkType() {
        return this.sign().then((/**
         * @param {?} res
         * @return {?}
         */
        res => new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => { wx.getNetworkType({ success: resolve, fail: reject }); }))));
    }
    //  获取地理位置接口
    /**
     * @return {?}
     */
    static getLocation() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            wx.getLocation({
                type: 'gcj02',
                // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: resolve,
                fail: reject
            });
        }));
    }
    //  使用微信内置地图查看位置接口
    /**
     * @param {?} location
     * @return {?}
     */
    static openLocation(location) {
        wx.openLocation({
            latitude: location.latitude,
            // 纬度，浮点数，范围为90 ~ -90
            longitude: location.longitude,
            // 经度，浮点数，范围为180 ~ -180。
            name: '',
            // 位置名
            address: '',
            // 地址详情说明
            scale: 14,
            // 地图缩放级别,整形值,范围从1~28。默认为最大
            infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
        });
    }
    // 打开地址
    /**
     * @return {?}
     */
    static openAddress() {
        return this.sign().then((/**
         * @return {?}
         */
        () => {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => wx.openAddress({ success: resolve, fail: reject })));
        }));
    }
    // 预览图片
    /**
     * @param {?} urls
     * @param {?=} current
     * @return {?}
     */
    static previewImage(urls, current) {
        if (!urls || urls.length === 0) {
            return;
        }
        wx.previewImage({
            current: current || '',
            // 当前显示图片的http链接
            // tslint:disable-next-line
            urls: urls // 需要预览的图片http链接列表
        });
    }
    /**
     * 关闭窗口
     * @return {?}
     */
    static closeWindow() {
        if (typeof wx !== 'undefined' && wx) {
            wx.closeWindow();
        }
        location.href = 'about:blank';
        window.close();
    }
    /**
     * @return {?}
     */
    static scanQRCode() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.sign().then((/**
             * @return {?}
             */
            () => {
                wx.scanQRCode({
                    needResult: 1,
                    // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                    scanType: ['qrCode', 'barCode'],
                    // 可以指定扫二维码还是一维码，默认二者都有
                    success: (/**
                     * @param {?} res
                     * @return {?}
                     */
                    res => resolve(res.resultStr))
                });
            })).catch(reject);
        }));
    }
    /**
     * @see {\@link Wechat.MENU_ITEMS}
     * @param {...?} menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @return {?}
     */
    static hideMenuItems(...menuItems) {
        this.sign().then((/**
         * @return {?}
         */
        () => wx.hideMenuItems({ menuList: menuItems }))).catch((/**
         * @param {?} e
         * @return {?}
         */
        e => console.log(e)));
    }
    /**
     * @see {\@link Wechat.MENU_ITEMS}
     * @param {...?} menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @return {?}
     */
    static showMenuItems(...menuItems) {
        this.sign().then((/**
         * @return {?}
         */
        () => wx.showMenuItems({ menuList: menuItems }))).catch((/**
         * @param {?} e
         * @return {?}
         */
        e => console.log(e)));
    }
    // 是否是微信浏览器中打开
    /**
     * @return {?}
     */
    static isWechatAgent() {
        /** @type {?} */
        const ua = navigator.userAgent.toLowerCase();
        /** @type {?} */
        const r = ua.match(/MicroMessenger/i);
        return r && r[0] === 'micromessenger' || false;
    }
    /**
     * @param {?} key
     * @param {?=} url
     * @return {?}
     */
    static getUrlParam(key, url = null) {
        /** @type {?} */
        let query = null;
        if (url) {
            query = url.split('?')[1] || '';
        }
        else {
            query = window.location.search.substring(1);
        }
        /** @type {?} */
        const queryString = {};
        /** @type {?} */
        const vars = query.split('&');
        for (const item of vars) {
            /** @type {?} */
            const pair = item.split('=');
            // If first entry with this name
            if (typeof queryString[pair[0]] === 'undefined') {
                queryString[pair[0]] = pair[1];
                // If second entry with this name
            }
            else if (typeof queryString[pair[0]] === 'string') {
                queryString[pair[0]] = [queryString[pair[0]], pair[1]];
                // If third or later entry with this name
            }
            else {
                queryString[pair[0]].push(pair[1]);
            }
        }
        /** @type {?} */
        let p = queryString[key] || null;
        if (p === 'null') {
            p = null;
        }
        return p;
    }
    /**
     * @private
     * @return {?}
     */
    static sign() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (Wechat.initialized) {
                resolve();
            }
            else {
                this.signer().then((/**
                 * @param {?} sign
                 * @return {?}
                 */
                sign => {
                    sign.jsApiList = Wechat.API_LIST;
                    sign.debug = Wechat.DEBUG;
                    wx.config(sign);
                    // 签名成功回调
                    wx.ready((/**
                     * @return {?}
                     */
                    () => {
                        this.initialized = true;
                        resolve();
                    }));
                    wx.error((/**
                     * @return {?}
                     */
                    () => {
                        // reject("jssdk config error");
                        console.error('jssdk config error');
                        reject('jssdk config error');
                    }));
                })).catch((/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    console.error(`[${new Date()}][WECHAT]`, e);
                }));
            }
        }));
    }
    /**
     * @return {?}
     */
    static startRecord() {
        wx.startRecord();
        return this.onVoiceRecordEnd();
    }
    /**
     * @return {?}
     */
    static stopRecord() {
        return Observable.create((/**
         * @param {?} subscriber
         * @return {?}
         */
        (subscriber) => {
            wx.stopRecord({
                success: (/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => {
                    subscriber.next(res.localId);
                    subscriber.complete();
                })
            });
        }));
    }
    /**
     * 获取公众号biz 的方法：打开公众号-查看历史消息-query[biz]
     * 打开公众号信息页
     * @param {?} biz MzAwNDEyODA5MQ==
     * @return {?}
     */
    static home(biz) {
        window.open(`https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=${biz}&scene=116#wechat_redirect`);
    }
    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
    /**
     * @private
     * @return {?}
     */
    static onVoiceRecordEnd() {
        return Observable.create((/**
         * @param {?} subscriber
         * @return {?}
         */
        (subscriber) => {
            wx.onVoiceRecordEnd({
                fail: (/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => {
                    subscriber.error(res.errMsg);
                }),
                complete: (/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => {
                    subscriber.next(res.localId);
                    subscriber.complete();
                })
            });
        }));
    }
    /**
     * @param {?} localId
     * @return {?}
     */
    static translateVoice(localId) {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        (subscriber) => {
            wx.translateVoice({
                localId,
                // 需要识别的音频的本地  Id，由录音相关接口获得
                isShowProgressTips: 1,
                // 默认为1，显示进度提示
                /**
                 * @param {?} res
                 * @return {?}
                 */
                success(res) {
                    // 语音识别的结果
                    subscriber.next(res.translateResult);
                    subscriber.complete();
                }
            });
        }));
    }
}
Wechat.DEBUG = false;
Wechat.initialized = false;
Wechat.COOKIE_KEY_AUTH_STATE = 'cookie_auth_state';
Wechat.API_LIST = [
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'onMenuShareQZone',
    'startRecord',
    'stopRecord',
    'onVoiceRecordEnd',
    'playVoice',
    'pauseVoice',
    'stopVoice',
    'onVoicePlayEnd',
    'uploadVoice',
    'downloadVoice',
    'chooseImage',
    'previewImage',
    'uploadImage',
    'downloadImage',
    'translateVoice',
    'getNetworkType',
    'openLocation',
    'getLocation',
    'hideOptionMenu',
    'showOptionMenu',
    'hideMenuItems',
    'showMenuItems',
    'hideAllNonBaseMenuItem',
    'showAllNonBaseMenuItem',
    'closeWindow',
    'scanQRCode',
    'chooseWXPay',
    'openProductSpecificView',
    'addCard',
    'chooseCard',
    'openCard',
    'openAddress'
];
Wechat.MENU_ITEMS = {
    // 基本类
    EXPOSE_ARTICLE: 'menuItem:exposeArticle',
    // 举报:
    SET_FONT: 'menuItem:setFont',
    // 调整字体:
    DAY_MODE: 'menuItem:dayMode',
    // 日间模式:
    NIGHT_MODE: 'menuItem:nightMode',
    // 夜间模式:
    REFRESH: 'menuItem:refresh',
    // 刷新:
    PROFILE: 'menuItem:profile',
    // 查看公众号（已添加）
    ADD_CONTACT: 'menuItem:addContact',
    // 查看公众号（未添加）
    // 传播类
    SHARE_APP_MESSAGE: 'menuItem:share:appMessage',
    // 发送给朋友
    SHARE_TIME_LINE: 'menuItem:share:timeline',
    // 分享到朋友圈
    SHARE_QQ: 'menuItem:share:qq',
    // 分享到QQ
    SHARE_WEIBO_APP: 'menuItem:share:weiboApp',
    // 分享到Weibo
    SHARE_FACEBOOK: 'menuItem:share:facebook',
    // 分享到FB:
    SHARE_QZONE: 'menuItem:share:QZone',
    // 分享到 QQ 空间
    FAVORITE: 'menuItem:favorite',
    // 收藏
    // 保护类
    EDIT_TAG: 'menuItem:editTag',
    // 编辑标签:
    DELETE: 'menuItem:delete',
    // 删除:
    COPY_URL: 'menuItem:copyUrl',
    // 复制链接:
    ORIGIN_PAGE: 'menuItem:originPage',
    // 原网页:
    READ_MORE: 'menuItem:readMode',
    // 阅读模式:
    OPEN_WITH_QQ_BROWSER: 'menuItem:openWithQQBrowser',
    // 在QQ浏览器中打开:
    OPEN_WITH_SAFARI: 'menuItem:openWithSafari',
    // 在Safari中打开:
    SHARE_EMAIL: 'menuItem:share:email',
    // 邮件:
    SHARE_BRAND: 'menuItem:share:brand' // 一些特殊公众号:
};
Wechat.HIDES = [
    Wechat.MENU_ITEMS.SHARE_QQ,
    Wechat.MENU_ITEMS.SHARE_WEIBO_APP,
    Wechat.MENU_ITEMS.SHARE_FACEBOOK,
    Wechat.MENU_ITEMS.SHARE_QZONE,
    Wechat.MENU_ITEMS.EDIT_TAG,
    Wechat.MENU_ITEMS.DELETE,
    Wechat.MENU_ITEMS.COPY_URL,
    Wechat.MENU_ITEMS.ORIGIN_PAGE,
    Wechat.MENU_ITEMS.READ_MORE,
    Wechat.MENU_ITEMS.OPEN_WITH_QQ_BROWSER,
    Wechat.MENU_ITEMS.OPEN_WITH_SAFARI,
    Wechat.MENU_ITEMS.SHARE_EMAIL,
    Wechat.MENU_ITEMS.SHARE_BRAND,
];
if (false) {
    /** @type {?} */
    Wechat.DEBUG;
    /**
     * @type {?}
     * @private
     */
    Wechat.initialized;
    /**
     * @type {?}
     * @private
     */
    Wechat.COOKIE_KEY_AUTH_STATE;
    /**
     * @type {?}
     * @private
     */
    Wechat.API_LIST;
    /** @type {?} */
    Wechat.MENU_ITEMS;
    /**
     * @type {?}
     * @private
     */
    Wechat.HIDES;
    /**
     * @type {?}
     * @private
     */
    Wechat.signer;
}
/**
 * @record
 */
function WXSign() { }
if (false) {
    /** @type {?} */
    WXSign.prototype.appId;
    /** @type {?} */
    WXSign.prototype.timestamp;
    /** @type {?} */
    WXSign.prototype.nonceStr;
    /** @type {?} */
    WXSign.prototype.signature;
    /** @type {?|undefined} */
    WXSign.prototype.jsApiList;
    /** @type {?|undefined} */
    WXSign.prototype.debug;
}
/**
 * @record
 */
function WXAddress() { }
if (false) {
    /** @type {?} */
    WXAddress.prototype.userName;
    /** @type {?} */
    WXAddress.prototype.telNumber;
    /** @type {?} */
    WXAddress.prototype.nationCode;
    /** @type {?} */
    WXAddress.prototype.errMsg;
    /** @type {?} */
    WXAddress.prototype.postalCode;
    /** @type {?} */
    WXAddress.prototype.provinceName;
    /** @type {?} */
    WXAddress.prototype.cityName;
    /** @type {?} */
    WXAddress.prototype.countryName;
    /** @type {?} */
    WXAddress.prototype.detailInfo;
}
/**
 * @record
 */
function WXLocation() { }
if (false) {
    /** @type {?} */
    WXLocation.prototype.latitude;
    /** @type {?} */
    WXLocation.prototype.longitude;
    /** @type {?} */
    WXLocation.prototype.errMsg;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataService {
    /**
     * @param {?} storage
     * @param {?} events
     */
    constructor(storage, events) {
        this.storage = storage;
        this.events = events;
        this.getUser().then((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            if (this.user) {
                this.events.publish('user:ready', this.user);
            }
        })).catch();
        if (Wechat.getUrlParam('clear')) {
            storage.clear().then((/**
             * @param {?} res
             * @return {?}
             */
            res => location.replace(location.href.split('?')[0])));
        }
    }
    /**
     * @param {?} user
     * @return {?}
     */
    setUser(user) {
        console.warn('set user');
        this.user = user;
        if (this.user) {
            // *m/7d 有效期
            // this.user.expiresIn = Date.now() + (ENV.DEBUG ? 600000 : 86400000 * 30);
            this.user.expiresIn = Date.now() + (IonWechatModule.ENV.debug ? 1000 : 86400000 * 7);
            this.events.publish('user:ready', this.user);
        }
        return this.storage.set(DataService.KEY_USER, user);
    }
    /**
     * @return {?}
     */
    getUser() {
        if (this.user) {
            return Promise.resolve(this.user);
        }
        else {
            return this.storage.get(DataService.KEY_USER)
                .then((/**
             * @param {?} user
             * @return {?}
             */
            user => {
                if (user && user.expiresIn < Date.now()) {
                    this.storage.remove(DataService.KEY_USER);
                    return null;
                }
                this.user = user;
                return this.user;
            }));
        }
    }
    /**
     * @return {?}
     */
    getUserSync() {
        return this.user;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.storage.get(key);
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        return this.storage.set(key, value);
    }
    /**
     * @param {?} action
     * @param {?=} event
     * @return {?}
     */
    doOnUserReady(action, event = 'user:ready') {
        this.getUser().then((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            this.user = this.user || user;
            if (this.user) {
                action(this.user);
                console.warn('user ready');
            }
            else {
                /** @type {?} */
                const handler = (/**
                 * @param {?} res
                 * @return {?}
                 */
                (res) => {
                    action(res);
                    this.events.unsubscribe(event, handler);
                });
                this.events.subscribe(event, handler);
                console.warn('user no ready');
            }
        }));
    }
}
DataService.KEY_USER = 'user';
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: Storage },
    { type: Events }
];
/** @nocollapse */ DataService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(ɵɵinject(Storage), ɵɵinject(Events)); }, token: DataService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DataService.KEY_USER;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.user;
    /** @type {?} */
    DataService.prototype.storage;
    /** @type {?} */
    DataService.prototype.events;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UiService {
    /**
     * @param {?} modal
     * @param {?} popover
     * @param {?} actionSheet
     * @param {?} loadingCtrl
     * @param {?} alertCtrl
     * @param {?} toastCtrl
     */
    constructor(modal, popover, actionSheet, loadingCtrl, alertCtrl, toastCtrl) {
        this.modal = modal;
        this.popover = popover;
        this.actionSheet = actionSheet;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
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
    /**
     * @param {?} message
     * @param {?=} position
     * @return {?}
     */
    toastShort(message, position) {
        return this.toast({ message, position: position || 'top', duration: 2000 });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    toast(options) {
        return this.toastCtrl.create(options).then((/**
         * @param {?} toast
         * @return {?}
         */
        toast => {
            toast.present();
        }));
    }
}
UiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UiService.ctorParameters = () => [
    { type: ModalController },
    { type: PopoverController },
    { type: ActionSheetController },
    { type: LoadingController },
    { type: AlertController },
    { type: ToastController }
];
/** @nocollapse */ UiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UiService_Factory() { return new UiService(ɵɵinject(ModalController), ɵɵinject(PopoverController), ɵɵinject(ActionSheetController), ɵɵinject(LoadingController), ɵɵinject(AlertController), ɵɵinject(ToastController)); }, token: UiService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UiService.prototype.modal;
    /** @type {?} */
    UiService.prototype.popover;
    /** @type {?} */
    UiService.prototype.actionSheet;
    /**
     * @type {?}
     * @private
     */
    UiService.prototype.loadingCtrl;
    /**
     * @type {?}
     * @private
     */
    UiService.prototype.alertCtrl;
    /**
     * @type {?}
     * @private
     */
    UiService.prototype.toastCtrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CONFIG = new InjectionToken('IonWechatConfig');
/** @type {?} */
let UI;
/** @type {?} */
let DB;
/** @type {?} */
let IonEvent;
class IonWechatModule {
    /**
     * @param {?} options
     * @param {?} ui
     * @param {?} data
     * @param {?} events
     */
    constructor(options, ui, data, events) {
        IonWechatModule.ENV.debug = options.debug || false;
        Photo.BASE_URL = options.imgBaseUrl || '';
        DataService.KEY_USER = options.userKey || 'user';
        if (Wechat.getUrlParam('vConsole')) {
            // @ts-ignore
            /** @type {?} */
            const vConsole = new VConsole();
        }
        UI = ui;
        IonEvent = events;
        DB = data;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: IonWechatModule,
            providers: [
                { provide: CONFIG, useValue: options },
            ]
        };
    }
}
IonWechatModule.ENV = { debug: false };
IonWechatModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    IonicModule,
                    IonicStorageModule.forRoot(),
                ]
            },] }
];
/** @nocollapse */
IonWechatModule.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] },
    { type: UiService },
    { type: DataService },
    { type: Events }
];
if (false) {
    /** @type {?} */
    IonWechatModule.ENV;
}
/**
 * @record
 */
function Options() { }
if (false) {
    /** @type {?|undefined} */
    Options.prototype.debug;
    /**
     * 存放用户的 key
     * @type {?|undefined}
     */
    Options.prototype.userKey;
    /** @type {?} */
    Options.prototype.imgBaseUrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CONFIG, DB, IonEvent, IonWechatModule, IonWechatPipesModule, UI, Wechat, PreviewPipe as ɵa, Sanitizer as ɵb, ZdatePipe as ɵc, Photo as ɵd, UiService as ɵe, DataService as ɵf };
//# sourceMappingURL=ion-wechat.js.map
