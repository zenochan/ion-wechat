import { __spread, __values } from 'tslib';
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
var PreviewPipe = /** @class */ (function () {
    function PreviewPipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    PreviewPipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            /** @type {?} */
            var reader = new FileReader();
            reader.onload = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var result = ((/** @type {?} */ (event.target))).result;
                subscriber.next(result);
                subscriber.complete();
            });
            reader.readAsDataURL(value);
        }));
    };
    PreviewPipe.decorators = [
        { type: Pipe, args: [{ name: 'preview' },] }
    ];
    return PreviewPipe;
}());

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
var Sanitizer = /** @class */ (function () {
    function Sanitizer(sanitiser) {
        this.sanitiser = sanitiser;
        this.SecurityContextMap = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
    }
    /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    Sanitizer.prototype.transform = /**
     * @param {?} value
     * @param {?} args
     * @return {?}
     */
    function (value, args) {
        /** @type {?} */
        var res;
        value = value + '';
        /** @type {?} */
        var context = this.SecurityContextMap.STYLE;
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
    };
    Sanitizer.decorators = [
        { type: Pipe, args: [{ name: 'sanitizer' },] },
        { type: Injectable }
    ];
    /** @nocollapse */
    Sanitizer.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return Sanitizer;
}());
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
    var year = this.getFullYear();
    /** @type {?} */
    var d = new Date(this);
    d.setHours(0, 0, 0, 0);
    // 当年的第一天
    /** @type {?} */
    var yearStart = new Date(year, 0, 1);
    // 修正第一天周数的偏移量
    d.setDate(d.getDate() + yearStart.getDay());
    /** @type {?} */
    var deltaDay = (d.getTime() - yearStart.getTime()) / this.ONE_DAY + 1;
    /** @type {?} */
    var weekNo = Math.ceil(deltaDay / 7);
    return [year, weekNo];
});
Date.prototype.format = (/**
 * @param {?} fmt
 * @return {?}
 */
function (fmt) {
    // author: meizz
    /** @type {?} */
    var o = {
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
        var week = ['日', '一', '二', '三', '四', '五', '六'];
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '星期' : '周') : '')
            + week[this.getDay() + '']);
    }
    for (var k in o) {
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
var ZdatePipe = /** @class */ (function () {
    function ZdatePipe() {
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    ZdatePipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
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
    };
    ZdatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'zdate',
                },] }
    ];
    return ZdatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Photo = /** @class */ (function () {
    function Photo(el) {
        this.el = el;
    }
    /**
     * @param {?} value
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    Photo.prototype.transform = /**
     * @param {?} value
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    function (value, width, height) {
        return transPhoto(value, width, height);
    };
    Photo.BASE_URL = '';
    Photo.decorators = [
        { type: Pipe, args: [{ name: 'photo' },] }
    ];
    /** @nocollapse */
    Photo.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return Photo;
}());
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
    var p = value + '';
    if (p.indexOf('http') === 0) {
        return p;
    }
    /** @type {?} */
    var cdnPrefix = Photo.BASE_URL;
    /** @type {?} */
    var url = cdnPrefix + p;
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
var pipes = [
    PreviewPipe,
    Sanitizer,
    ZdatePipe,
    Photo
];
var IonWechatPipesModule = /** @class */ (function () {
    function IonWechatPipesModule() {
    }
    IonWechatPipesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread(pipes),
                    imports: [],
                    exports: __spread(pipes)
                },] }
    ];
    return IonWechatPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// 注入微信 js
/** @type {?} */
var jssdk = document.createElement('script');
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
var Wechat = /** @class */ (function () {
    function Wechat() {
    }
    //  配置签名
    //  配置签名
    /**
     * @param {?} signer
     * @return {?}
     */
    Wechat.configSigner = 
    //  配置签名
    /**
     * @param {?} signer
     * @return {?}
     */
    function (signer) {
        this.signer = signer;
        this.sign().then((/**
         * @return {?}
         */
        function () {
            Wechat.hideMenuItems.apply(Wechat, __spread(Wechat.HIDES));
        })).catch((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return console.error('JS SDK 签名异常', error); }));
    };
    // 获取 auth code
    // 获取 auth code
    /**
     * @return {?}
     */
    Wechat.getAuthCode = 
    // 获取 auth code
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cookieState = localStorage.getItem(Wechat.COOKIE_KEY_AUTH_STATE);
        localStorage.removeItem(Wechat.COOKIE_KEY_AUTH_STATE);
        /** @type {?} */
        var urlState = Wechat.getUrlParam('state');
        if (urlState && urlState === cookieState) {
            return Wechat.getUrlParam('code');
        }
        else {
            return null;
        }
    };
    /**
     * @return Promise<number> 0-好友，1-朋友圈
     */
    /**
     * @param {?} options
     * @return {?} Promise<number> 0-好友，1-朋友圈
     */
    Wechat.onShareWechat = /**
     * @param {?} options
     * @return {?} Promise<number> 0-好友，1-朋友圈
     */
    function (options) {
        if (options.imgUrl.indexOf('http') === -1) {
            options.imgUrl = location.href.split('?')[0] + options.imgUrl;
        }
        return this.sign().catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return console.log('jssdk 签名失败', err); }))
            .then((/**
         * @return {?}
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                wx.onMenuShareTimeline({
                    title: options.title + (options.desc ? ' | ' + options.desc : ''),
                    desc: null,
                    // 分享到朋友圈没有 desc 字段，拼接到 title 上
                    link: options.link,
                    imgUrl: options.imgUrl,
                    success: (/**
                     * @return {?}
                     */
                    function () { return resolve(1); })
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
                    function () { return resolve(0); })
                });
            }));
        }));
    };
    /**
     * 调起微信支付
     * Tip
     * 配置安全支付域名
     * jssdk 配置
     *
     * @see <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6">网页端调起支付API</a>
     */
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
    Wechat.pay = /**
     * 调起微信支付
     * Tip
     * 配置安全支付域名
     * jssdk 配置
     *
     * @see <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6">网页端调起支付API</a>
     * @param {?} param
     * @return {?}
     */
    function (param) {
        param.timestamp = param.timestamp || param.timeStamp;
        /** @type {?} */
        var callPay = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            param.success = (/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
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
            function (res) {
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
    };
    /**
     * @private
     * @param {?} sign
     * @return {?}
     */
    Wechat.payOld = /**
     * @private
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        /** @type {?} */
        var onBridgeReady = (/**
         * @return {?}
         */
        function () { return WeixinJSBridge.invoke('getBrandWCPayRequest', sign, sign.success); });
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
    };
    /**
     * @param {?} param
     * @return {?}
     */
    Wechat.shareUrl = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        /** @type {?} */
        var url = location.href.split('?')[0];
        Object.keys(param).forEach((/**
         * @param {?} key
         * @param {?} index
         * @return {?}
         */
        function (key, index) {
            if (!param[key] || param[key] === 'null') {
                return;
            }
            url += url.indexOf('?') === -1 ? '?' : '&';
            url += key + '=' + decodeURIComponent(param[key]);
        }));
        return url;
    };
    // 微信登录
    // 微信登录
    /**
     * @param {?} options
     * @return {?}
     */
    Wechat.code = 
    // 微信登录
    /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        return Observable.create((/**
         * @param {?} sub
         * @return {?}
         */
        function (sub) {
            /** @type {?} */
            var code = _this.getAuthCode();
            if (!code) {
                /** @type {?} */
                var op_1 = options || {};
                op_1.scope = op_1.scope || 'snsapi_userinfo';
                op_1.state = 'wechat_auth_' + new Date().getTime();
                op_1.redirect_uri = encodeURIComponent(options.redirect_uri || location.href.split('?')[0]);
                op_1.response_type = 'code';
                localStorage.setItem(Wechat.COOKIE_KEY_AUTH_STATE, op_1.state);
                /** @type {?} */
                var url = (options.proxy || 'https://open.weixin.qq.com/connect/oauth2/authorize');
                /** @type {?} */
                var query = Object.keys(op_1).map((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return key + "=" + op_1[key]; })).join('&');
                url += "?" + query + "#wechat_redirect";
                window.location.replace(url);
                sub.complete();
            }
            else {
                sub.next(code);
                sub.complete();
            }
        }));
    };
    //  获取地理位置接口
    //  获取地理位置接口
    /**
     * @return {?}
     */
    Wechat.getNetworkType = 
    //  获取地理位置接口
    /**
     * @return {?}
     */
    function () {
        return this.sign().then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) { wx.getNetworkType({ success: resolve, fail: reject }); }));
        }));
    };
    //  获取地理位置接口
    //  获取地理位置接口
    /**
     * @return {?}
     */
    Wechat.getLocation = 
    //  获取地理位置接口
    /**
     * @return {?}
     */
    function () {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            wx.getLocation({
                type: 'gcj02',
                // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: resolve,
                fail: reject
            });
        }));
    };
    //  使用微信内置地图查看位置接口
    //  使用微信内置地图查看位置接口
    /**
     * @param {?} location
     * @return {?}
     */
    Wechat.openLocation = 
    //  使用微信内置地图查看位置接口
    /**
     * @param {?} location
     * @return {?}
     */
    function (location) {
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
    };
    // 打开地址
    // 打开地址
    /**
     * @return {?}
     */
    Wechat.openAddress = 
    // 打开地址
    /**
     * @return {?}
     */
    function () {
        return this.sign().then((/**
         * @return {?}
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                return wx.openAddress({ success: resolve, fail: reject });
            }));
        }));
    };
    // 预览图片
    // 预览图片
    /**
     * @param {?} urls
     * @param {?=} current
     * @return {?}
     */
    Wechat.previewImage = 
    // 预览图片
    /**
     * @param {?} urls
     * @param {?=} current
     * @return {?}
     */
    function (urls, current) {
        if (!urls || urls.length === 0) {
            return;
        }
        wx.previewImage({
            current: current || '',
            // 当前显示图片的http链接
            // tslint:disable-next-line
            urls: urls // 需要预览的图片http链接列表
        });
    };
    /** 关闭窗口 */
    /**
     * 关闭窗口
     * @return {?}
     */
    Wechat.closeWindow = /**
     * 关闭窗口
     * @return {?}
     */
    function () {
        if (typeof wx !== 'undefined' && wx) {
            wx.closeWindow();
        }
        location.href = 'about:blank';
        window.close();
    };
    /**
     * @return {?}
     */
    Wechat.scanQRCode = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.sign().then((/**
             * @return {?}
             */
            function () {
                wx.scanQRCode({
                    needResult: 1,
                    // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                    scanType: ['qrCode', 'barCode'],
                    // 可以指定扫二维码还是一维码，默认二者都有
                    success: (/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) { return resolve(res.resultStr); })
                });
            })).catch(reject);
        }));
    };
    /**
     * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @see {@link Wechat.MENU_ITEMS}
     */
    /**
     * @see {\@link Wechat.MENU_ITEMS}
     * @param {...?} menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @return {?}
     */
    Wechat.hideMenuItems = /**
     * @see {\@link Wechat.MENU_ITEMS}
     * @param {...?} menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @return {?}
     */
    function () {
        var menuItems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            menuItems[_i] = arguments[_i];
        }
        this.sign().then((/**
         * @return {?}
         */
        function () { return wx.hideMenuItems({ menuList: menuItems }); })).catch((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return console.log(e); }));
    };
    /**
     * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @see {@link Wechat.MENU_ITEMS}
     */
    /**
     * @see {\@link Wechat.MENU_ITEMS}
     * @param {...?} menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @return {?}
     */
    Wechat.showMenuItems = /**
     * @see {\@link Wechat.MENU_ITEMS}
     * @param {...?} menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @return {?}
     */
    function () {
        var menuItems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            menuItems[_i] = arguments[_i];
        }
        this.sign().then((/**
         * @return {?}
         */
        function () { return wx.showMenuItems({ menuList: menuItems }); })).catch((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return console.log(e); }));
    };
    // 是否是微信浏览器中打开
    // 是否是微信浏览器中打开
    /**
     * @return {?}
     */
    Wechat.isWechatAgent = 
    // 是否是微信浏览器中打开
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ua = navigator.userAgent.toLowerCase();
        /** @type {?} */
        var r = ua.match(/MicroMessenger/i);
        return r && r[0] === 'micromessenger' || false;
    };
    /**
     * @param {?} key
     * @param {?=} url
     * @return {?}
     */
    Wechat.getUrlParam = /**
     * @param {?} key
     * @param {?=} url
     * @return {?}
     */
    function (key, url) {
        var e_1, _a;
        if (url === void 0) { url = null; }
        /** @type {?} */
        var query = null;
        if (url) {
            query = url.split('?')[1] || '';
        }
        else {
            query = window.location.search.substring(1);
        }
        /** @type {?} */
        var queryString = {};
        /** @type {?} */
        var vars = query.split('&');
        try {
            for (var vars_1 = __values(vars), vars_1_1 = vars_1.next(); !vars_1_1.done; vars_1_1 = vars_1.next()) {
                var item = vars_1_1.value;
                /** @type {?} */
                var pair = item.split('=');
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (vars_1_1 && !vars_1_1.done && (_a = vars_1.return)) _a.call(vars_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var p = queryString[key] || null;
        if (p === 'null') {
            p = null;
        }
        return p;
    };
    /**
     * @private
     * @return {?}
     */
    Wechat.sign = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (Wechat.initialized) {
                resolve();
            }
            else {
                _this.signer().then((/**
                 * @param {?} sign
                 * @return {?}
                 */
                function (sign) {
                    sign.jsApiList = Wechat.API_LIST;
                    sign.debug = Wechat.DEBUG;
                    wx.config(sign);
                    // 签名成功回调
                    wx.ready((/**
                     * @return {?}
                     */
                    function () {
                        _this.initialized = true;
                        resolve();
                    }));
                    wx.error((/**
                     * @return {?}
                     */
                    function () {
                        // reject("jssdk config error");
                        console.error('jssdk config error');
                        reject('jssdk config error');
                    }));
                })).catch((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    console.error("[" + new Date() + "][WECHAT]", e);
                }));
            }
        }));
    };
    /**
     * @return {?}
     */
    Wechat.startRecord = /**
     * @return {?}
     */
    function () {
        wx.startRecord();
        return this.onVoiceRecordEnd();
    };
    /**
     * @return {?}
     */
    Wechat.stopRecord = /**
     * @return {?}
     */
    function () {
        return Observable.create((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            wx.stopRecord({
                success: (/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    subscriber.next(res.localId);
                    subscriber.complete();
                })
            });
        }));
    };
    /**
     * 获取公众号biz 的方法：打开公众号-查看历史消息-query[biz]
     * 打开公众号信息页
     * @param biz MzAwNDEyODA5MQ==
     */
    /**
     * 获取公众号biz 的方法：打开公众号-查看历史消息-query[biz]
     * 打开公众号信息页
     * @param {?} biz MzAwNDEyODA5MQ==
     * @return {?}
     */
    Wechat.home = /**
     * 获取公众号biz 的方法：打开公众号-查看历史消息-query[biz]
     * 打开公众号信息页
     * @param {?} biz MzAwNDEyODA5MQ==
     * @return {?}
     */
    function (biz) {
        window.open("https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=" + biz + "&scene=116#wechat_redirect");
    };
    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
    /**
     * @private
     * @return {?}
     */
    Wechat.onVoiceRecordEnd = 
    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
    /**
     * @private
     * @return {?}
     */
    function () {
        return Observable.create((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            wx.onVoiceRecordEnd({
                fail: (/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    subscriber.error(res.errMsg);
                }),
                complete: (/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    subscriber.next(res.localId);
                    subscriber.complete();
                })
            });
        }));
    };
    /**
     * @param {?} localId
     * @return {?}
     */
    Wechat.translateVoice = /**
     * @param {?} localId
     * @return {?}
     */
    function (localId) {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            wx.translateVoice({
                localId: localId,
                // 需要识别的音频的本地  Id，由录音相关接口获得
                isShowProgressTips: 1,
                success: 
                // 默认为1，显示进度提示
                /**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    // 语音识别的结果
                    subscriber.next(res.translateResult);
                    subscriber.complete();
                }
            });
        }));
    };
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
    return Wechat;
}());
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
var DataService = /** @class */ (function () {
    function DataService(storage, events) {
        var _this = this;
        this.storage = storage;
        this.events = events;
        this.getUser().then((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            if (_this.user) {
                _this.events.publish('user:ready', _this.user);
            }
        })).catch();
        if (Wechat.getUrlParam('clear')) {
            storage.clear().then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return location.replace(location.href.split('?')[0]); }));
        }
    }
    /**
     * @param {?} user
     * @return {?}
     */
    DataService.prototype.setUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        console.warn('set user');
        this.user = user;
        if (this.user) {
            // *m/7d 有效期
            // this.user.expiresIn = Date.now() + (ENV.DEBUG ? 600000 : 86400000 * 30);
            this.user.expiresIn = Date.now() + (IonWechatModule.ENV.debug ? 1000 : 86400000 * 7);
            this.events.publish('user:ready', this.user);
        }
        return this.storage.set(DataService.KEY_USER, user);
    };
    /**
     * @return {?}
     */
    DataService.prototype.getUser = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.user) {
            return Promise.resolve(this.user);
        }
        else {
            return this.storage.get(DataService.KEY_USER)
                .then((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                if (user && user.expiresIn < Date.now()) {
                    _this.storage.remove(DataService.KEY_USER);
                    return null;
                }
                _this.user = user;
                return _this.user;
            }));
        }
    };
    /**
     * @return {?}
     */
    DataService.prototype.getUserSync = /**
     * @return {?}
     */
    function () {
        return this.user;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DataService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.storage.get(key);
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    DataService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        return this.storage.set(key, value);
    };
    /**
     * @param {?} action
     * @param {?=} event
     * @return {?}
     */
    DataService.prototype.doOnUserReady = /**
     * @param {?} action
     * @param {?=} event
     * @return {?}
     */
    function (action, event) {
        var _this = this;
        if (event === void 0) { event = 'user:ready'; }
        this.getUser().then((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            _this.user = _this.user || user;
            if (_this.user) {
                action(_this.user);
                console.warn('user ready');
            }
            else {
                /** @type {?} */
                var handler_1 = (/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    action(res);
                    _this.events.unsubscribe(event, handler_1);
                });
                _this.events.subscribe(event, handler_1);
                console.warn('user no ready');
            }
        }));
    };
    DataService.KEY_USER = 'user';
    DataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: Storage },
        { type: Events }
    ]; };
    /** @nocollapse */ DataService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(ɵɵinject(Storage), ɵɵinject(Events)); }, token: DataService, providedIn: "root" });
    return DataService;
}());
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
var UiService = /** @class */ (function () {
    function UiService(modal, popover, actionSheet, loadingCtrl, alertCtrl, toastCtrl) {
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
    UiService.prototype.toastShort = 
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
    function (message, position) {
        return this.toast({ message: message, position: position || 'top', duration: 2000 });
    };
    /**
     * @param {?} options
     * @return {?}
     */
    UiService.prototype.toast = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.toastCtrl.create(options).then((/**
         * @param {?} toast
         * @return {?}
         */
        function (toast) {
            toast.present();
        }));
    };
    UiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UiService.ctorParameters = function () { return [
        { type: ModalController },
        { type: PopoverController },
        { type: ActionSheetController },
        { type: LoadingController },
        { type: AlertController },
        { type: ToastController }
    ]; };
    /** @nocollapse */ UiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UiService_Factory() { return new UiService(ɵɵinject(ModalController), ɵɵinject(PopoverController), ɵɵinject(ActionSheetController), ɵɵinject(LoadingController), ɵɵinject(AlertController), ɵɵinject(ToastController)); }, token: UiService, providedIn: "root" });
    return UiService;
}());
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
var CONFIG = new InjectionToken('IonWechatConfig');
/** @type {?} */
var UI;
/** @type {?} */
var DB;
/** @type {?} */
var IonEvent;
var IonWechatModule = /** @class */ (function () {
    function IonWechatModule(options, ui, data, events) {
        IonWechatModule.ENV.debug = options.debug || false;
        Photo.BASE_URL = options.imgBaseUrl || '';
        DataService.KEY_USER = options.userKey || 'user';
        if (Wechat.getUrlParam('vConsole')) {
            // @ts-ignore
            /** @type {?} */
            var vConsole = new VConsole();
        }
        UI = ui;
        IonEvent = events;
        DB = data;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    IonWechatModule.forRoot = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: IonWechatModule,
            providers: [
                { provide: CONFIG, useValue: options },
            ]
        };
    };
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
    IonWechatModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CONFIG,] }] },
        { type: UiService },
        { type: DataService },
        { type: Events }
    ]; };
    return IonWechatModule;
}());
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
