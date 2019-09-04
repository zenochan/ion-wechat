/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// import "rxjs/add/operator/map";
// import {Observable} from "rxjs/Observable";
// import {Subscriber} from "rxjs/Subscriber";
// import "http://res.wx.qq.com/open/js/jweixin-1.2.0.js";
// import "https://res.wx.qq.com/open/js/jweixin-1.2.0.js";
import { Observable } from 'rxjs';
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
            Wechat.hideMenuItems.apply(Wechat, tslib_1.__spread(Wechat.HIDES));
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
            for (var vars_1 = tslib_1.__values(vars), vars_1_1 = vars_1.next(); !vars_1_1.done; vars_1_1 = vars_1.next()) {
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
export { Wechat };
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
export function WXSign() { }
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
export function WXAddress() { }
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
export function WXLocation() { }
if (false) {
    /** @type {?} */
    WXLocation.prototype.latitude;
    /** @type {?} */
    WXLocation.prototype.longitude;
    /** @type {?} */
    WXLocation.prototype.errMsg;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VjaGF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uLXdlY2hhdC8iLCJzb3VyY2VzIjpbImxpYi93ZWNoYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBQyxVQUFVLEVBQWEsTUFBTSxNQUFNLENBQUM7OztJQU90QyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDOUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxnREFBZ0QsQ0FBQztBQUM3RCxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FBWTVEO0lBQUE7SUErZkEsQ0FBQztJQW5hQyxRQUFROzs7Ozs7SUFDRCxtQkFBWTs7Ozs7O0lBQW5CLFVBQW9CLE1BQTZCO1FBRS9DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJOzs7UUFBQztZQUNmLE1BQU0sQ0FBQyxhQUFhLE9BQXBCLE1BQU0sbUJBQWtCLE1BQU0sQ0FBQyxLQUFLLEdBQUU7UUFDeEMsQ0FBQyxFQUFDLENBQUMsS0FBSzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQW5DLENBQW1DLEVBQUMsQ0FBQztJQUN6RCxDQUFDO0lBR0gsZUFBZTs7Ozs7SUFDTixrQkFBVzs7Ozs7SUFBbEI7O1lBRVEsV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RFLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7O1lBQ2hELFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUU1QyxJQUFJLFFBQVEsSUFBSSxRQUFRLEtB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LENBQUMsVUFBVSxDQUFDLFdBQVc7S0FDOUIsQ0FBQztJQXVhSixhQUFDO0NBQUEsQUEvZkQsSUErZkM7U0EvZlksTUFBTTs7O0lBRWpCLGFBQTRCOzs7OztJQUM1QixtQkFBbUM7Ozs7O0lBQ25DLDZCQUEyRDs7Ozs7SUFDM0QsZ0JBcUNFOztJQUNGLGtCQTZCRTs7Ozs7SUFFRixhQWNFOzs7OztJQUVGLGNBQTZDOzs7OztBQXVhL0MsNEJBUUM7OztJQU5DLHVCQUFjOztJQUNkLDJCQUFrQjs7SUFDbEIsMEJBQWlCOztJQUNqQiwyQkFBa0I7O0lBQ2xCLDJCQUEwQjs7SUFDMUIsdUJBQWdCOzs7OztBQUdsQiwrQkFXQzs7O0lBVEMsNkJBQWlCOztJQUNqQiw4QkFBa0I7O0lBQ2xCLCtCQUFtQjs7SUFDbkIsMkJBQWU7O0lBQ2YsK0JBQW1COztJQUNuQixpQ0FBcUI7O0lBQ3JCLDZCQUFpQjs7SUFDakIsZ0NBQW9COztJQUNwQiwrQkFBbUI7Ozs7O0FBR3JCLGdDQUtDOzs7SUFIQyw4QkFBaUI7O0lBQ2pCLCtCQUFrQjs7SUFDbEIsNEJBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbi8vIGltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuLy8gaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tIFwicnhqcy9TdWJzY3JpYmVyXCI7XG4vLyBpbXBvcnQgXCJodHRwOi8vcmVzLnd4LnFxLmNvbS9vcGVuL2pzL2p3ZWl4aW4tMS4yLjAuanNcIjtcbi8vIGltcG9ydCBcImh0dHBzOi8vcmVzLnd4LnFxLmNvbS9vcGVuL2pzL2p3ZWl4aW4tMS4yLjAuanNcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaWJlcn0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgbGV0IHd4O1xuZGVjbGFyZSBsZXQgV2VpeGluSlNCcmlkZ2U7XG5cblxuLy8g5rOo5YWl5b6u5L+hIGpzXG5jb25zdCBqc3NkayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuanNzZGsuc3JjID0gJ2h0dHBzOi8vcmVzLnd4LnFxLmNvbS9vcGVuL2pzL2p3ZWl4aW4tMS4yLjAuanMnO1xuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChqc3Nkayk7XG5cblxuLyoqXG4gKiBqcyBzZGtcbiAqIGh0dHA6Ly9yZXMud3gucXEuY29tL29wZW4vanMvandlaXhpbi0xLjEuMC5qc1xuICpcbiAqIEBzZWUgPGEgaHJlZj1cImh0dHBzOi8vbXAud2VpeGluLnFxLmNvbS93aWtpXCI+5b6u5L+h5YWs5LyX5bmz5Y+w5oqA5pyv5paH5qGjPC9hPlxuICpcbiAqIC0gW0FuZ3VsYXLmiqXplJk6IEVycm9yIGVuY291bnRlcmVkIGluIG1ldGFkYXRhIGdlbmVyYXRlZCBmb3IgZXhwb3J0ZWQgc3ltYm9sXShodHRwczovL2Jsb2cuY3Nkbi5uZXQvcXFfMzAxMDExMzEvYXJ0aWNsZS9kZXRhaWxzLzg3Nzk0NzIxKVxuICovXG4vLyBAZHluYW1pY1xuZXhwb3J0IGNsYXNzIFdlY2hhdFxue1xuICBwdWJsaWMgc3RhdGljIERFQlVHID0gZmFsc2U7XG4gIHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIHByaXZhdGUgc3RhdGljIENPT0tJRV9LRVlfQVVUSF9TVEFURSA9ICdjb29raWVfYXV0aF9zdGF0ZSc7XG4gIHByaXZhdGUgc3RhdGljIEFQSV9MSVNUID0gW1xuICAgICdvbk1lbnVTaGFyZVRpbWVsaW5lJyxcbiAgICAnb25NZW51U2hhcmVBcHBNZXNzYWdlJyxcbiAgICAnb25NZW51U2hhcmVRUScsXG4gICAgJ29uTWVudVNoYXJlV2VpYm8nLFxuICAgICdvbk1lbnVTaGFyZVFab25lJyxcbiAgICAnc3RhcnRSZWNvcmQnLFxuICAgICdzdG9wUmVjb3JkJyxcbiAgICAnb25Wb2ljZVJlY29yZEVuZCcsXG4gICAgJ3BsYXlWb2ljZScsXG4gICAgJ3BhdXNlVm9pY2UnLFxuICAgICdzdG9wVm9pY2UnLFxuICAgICdvblZvaWNlUGxheUVuZCcsXG4gICAgJ3VwbG9hZFZvaWNlJyxcbiAgICAnZG93bmxvYWRWb2ljZScsXG4gICAgJ2Nob29zZUltYWdlJyxcbiAgICAncHJldmlld0ltYWdlJyxcbiAgICAndXBsb2FkSW1hZ2UnLFxuICAgICdkb3dubG9hZEltYWdlJyxcbiAgICAndHJhbnNsYXRlVm9pY2UnLFxuICAgICdnZXROZXR3b3JrVHlwZScsXG4gICAgJ29wZW5Mb2NhdGlvbicsXG4gICAgJ2dldExvY2F0aW9uJyxcbiAgICAnaGlkZU9wdGlvbk1lbnUnLFxuICAgICdzaG93T3B0aW9uTWVudScsXG4gICAgJ2hpZGVNZW51SXRlbXMnLFxuICAgICdzaG93TWVudUl0ZW1zJyxcbiAgICAnaGlkZUFsbE5vbkJhc2VNZW51SXRlbScsXG4gICAgJ3Nob3dBbGxOb25CYXNlTWVudUl0ZW0nLFxuICAgICdjbG9zZVdpbmRvdycsXG4gICAgJ3NjYW5RUkNvZGUnLFxuICAgICdjaG9vc2VXWFBheScsXG4gICAgJ29wZW5Qcm9kdWN0U3BlY2lmaWNWaWV3JyxcbiAgICAnYWRkQ2FyZCcsXG4gICAgJ2Nob29zZUNhcmQnLFxuICAgICdvcGVuQ2FyZCcsXG4gICAgJ29wZW5BZGRyZXNzJ1xuICBdO1xuICBwdWJsaWMgc3RhdGljIE1FTlVfSVRFTVMgPSB7XG4gICAgLy8g5Z+65pys57G7XG4gICAgRVhQT1NFX0FSVElDTEU6ICdtZW51SXRlbTpleHBvc2VBcnRpY2xlJywgICAgIC8vIOS4vuaKpTpcbiAgICBTRVRfRk9OVDogJ21lbnVJdGVtOnNldEZvbnQnLCAgICAgICAgICAgICAgICAgLy8g6LCD5pW05a2X5L2TOlxuICAgIERBWV9NT0RFOiAnbWVudUl0ZW06ZGF5TW9kZScsICAgICAgICAgICAgICAgICAvLyDml6Xpl7TmqKHlvI86XG4gICAgTklHSFRfTU9ERTogJ21lbnVJdGVtOm5pZ2h0TW9kZScsICAgICAgICAgICAgIC8vIOWknOmXtOaooeW8jzpcbiAgICBSRUZSRVNIOiAnbWVudUl0ZW06cmVmcmVzaCcsICAgICAgICAgICAgICAgICAgLy8g5Yi35pawOlxuICAgIFBST0ZJTEU6ICdtZW51SXRlbTpwcm9maWxlJywgICAgICAgICAgICAgICAgICAvLyDmn6XnnIvlhazkvJflj7fvvIjlt7Lmt7vliqDvvIlcbiAgICBBRERfQ09OVEFDVDogJ21lbnVJdGVtOmFkZENvbnRhY3QnLCAgICAgICAgICAgLy8g5p+l55yL5YWs5LyX5Y+377yI5pyq5re75Yqg77yJXG5cbiAgICAvLyDkvKDmkq3nsbtcbiAgICBTSEFSRV9BUFBfTUVTU0FHRTogJ21lbnVJdGVtOnNoYXJlOmFwcE1lc3NhZ2UnLCAgIC8vIOWPkemAgee7meaci+WPi1xuICAgIFNIQVJFX1RJTUVfTElORTogJ21lbnVJdGVtOnNoYXJlOnRpbWVsaW5lJywgICAgICAgLy8g5YiG5Lqr5Yiw5pyL5Y+L5ZyIXG4gICAgU0hBUkVfUVE6ICdtZW51SXRlbTpzaGFyZTpxcScsICAgICAgICAgICAgICAgICAgICAvLyDliIbkuqvliLBRUVxuICAgIFNIQVJFX1dFSUJPX0FQUDogJ21lbnVJdGVtOnNoYXJlOndlaWJvQXBwJywgICAgICAgLy8g5YiG5Lqr5YiwV2VpYm9cbiAgICBTSEFSRV9GQUNFQk9PSzogJ21lbnVJdGVtOnNoYXJlOmZhY2Vib29rJywgICAgICAgIC8vIOWIhuS6q+WIsEZCOlxuICAgIFNIQVJFX1FaT05FOiAnbWVudUl0ZW06c2hhcmU6UVpvbmUnLCAgICAgICAgICAgICAgLy8g5YiG5Lqr5YiwIFFRIOepuumXtFxuICAgIEZBVk9SSVRFOiAnbWVudUl0ZW06ZmF2b3JpdGUnLCAgICAgICAgICAgICAgICAgICAgLy8g5pS26JePXG5cbiAgICAvLyDkv53miqTnsbtcbiAgICBFRElUX1RBRzogJ21lbnVJdGVtOmVkaXRUYWcnLCAgICAgICAgICAgICAgICAgICAgICAgLy8g57yW6L6R5qCH562+OlxuICAgIERFTEVURTogJ21lbnVJdGVtOmRlbGV0ZScsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDliKDpmaQ6XG4gICAgQ09QWV9VUkw6ICdtZW51SXRlbTpjb3B5VXJsJywgICAgICAgICAgICAgICAgICAgICAgIC8vIOWkjeWItumTvuaOpTpcbiAgICBPUklHSU5fUEFHRTogJ21lbnVJdGVtOm9yaWdpblBhZ2UnLCAgICAgICAgICAgICAgICAgLy8g5Y6f572R6aG1OlxuICAgIFJFQURfTU9SRTogJ21lbnVJdGVtOnJlYWRNb2RlJywgICAgICAgICAgICAgICAgICAgICAvLyDpmIXor7vmqKHlvI86XG4gICAgT1BFTl9XSVRIX1FRX0JST1dTRVI6ICdtZW51SXRlbTpvcGVuV2l0aFFRQnJvd3NlcicsIC8vIOWcqFFR5rWP6KeI5Zmo5Lit5omT5byAOlxuICAgIE9QRU5fV0lUSF9TQUZBUkk6ICdtZW51SXRlbTpvcGVuV2l0aFNhZmFyaScsICAgICAgICAvLyDlnKhTYWZhcmnkuK3miZPlvIA6XG4gICAgU0hBUkVfRU1BSUw6ICdtZW51SXRlbTpzaGFyZTplbWFpbCcsICAgICAgICAgICAgICAgIC8vIOmCruS7tjpcbiAgICBTSEFSRV9CUkFORDogJ21lbnVJdGVtOnNoYXJlOmJyYW5kJyAgICAgICAgICAgICAgICAgLy8g5LiA5Lqb54m55q6K5YWs5LyX5Y+3OlxuICB9O1xuXG4gIHByaXZhdGUgc3RhdGljIEhJREVTOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgIFdlY2hhdC5NRU5VX0lURU1TLlNIQVJFX1FRLFxuICAgIFdlY2hhdC5NRU5VX0lURU1TLlNIQVJFX1dFSUJPX0FQUCxcbiAgICBXZWNoYXQuTUVOVV9JVEVNUy5TSEFSRV9GQUNFQk9PSyxcbiAgICBXZWNoYXQuTUVOVV9JVEVNUy5TSEFSRV9RWk9ORSxcbiAgICBXZWNoYXQuTUVOVV9JVEVNUy5FRElUX1RBRyxcbiAgICBXZWNoYXQuTUVOVV9JVEVNUy5ERUxFVEUsXG4gICAgV2VjaGF0Lk1FTlVfSVRFTVMuQ09QWV9VUkwsXG4gICAgV2VjaGF0Lk1FTlVfSVRFTVMuT1JJR0lOX1BBR0UsXG4gICAgV2VjaGF0Lk1FTlVfSVRFTVMuUkVBRF9NT1JFLFxuICAgIFdlY2hhdC5NRU5VX0lURU1TLk9QRU5fV0lUSF9RUV9CUk9XU0VSLFxuICAgIFdlY2hhdC5NRU5VX0lURU1TLk9QRU5fV0lUSF9TQUZBUkksXG4gICAgV2VjaGF0Lk1FTlVfSVRFTVMuU0hBUkVfRU1BSUwsXG4gICAgV2VjaGF0Lk1FTlVfSVRFTVMuU0hBUkVfQlJBTkQsXG4gIF07XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2lnbmVyOiAoKSA9PiBQcm9taXNlPFdYU2lnbj47XG5cbiAgLy8gIOmFjee9ruetvuWQjVxuICBzdGF0aWMgY29uZmlnU2lnbmVyKHNpZ25lcjogKCkgPT4gUHJvbWlzZTxXWFNpZ24+KVxuICB7XG4gICAgdGhpcy5zaWduZXIgPSBzaWduZXI7XG4gICAgdGhpcy5zaWduKCkudGhlbigoKSA9PiB7XG4gICAgICBXZWNoYXQuaGlkZU1lbnVJdGVtcyguLi5XZWNoYXQuSElERVMpO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0pTIFNESyDnrb7lkI3lvILluLgnLCBlcnJvcikpO1xuICB9XG5cblxuLy8g6I635Y+WIGF1dGggY29kZVxuICBzdGF0aWMgZ2V0QXV0aENvZGUoKVxuICB7XG4gICAgY29uc3QgY29va2llU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShXZWNoYXQuQ09PS0lFX0tFWV9BVVRIX1NUQVRFKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShXZWNoYXQuQ09PS0lFX0tFWV9BVVRIX1NUQVRFKTtcbiAgICBjb25zdCB1cmxTdGF0ZSA9IFdlY2hhdC5nZXRVcmxQYXJhbSgnc3RhdGUnKTtcblxuICAgIGlmICh1cmxTdGF0ZSAmJiB1cmxTdGF0ZSA9PT0gY29va2llU3RhdGUpIHtcbiAgICAgIHJldHVybiBXZWNoYXQuZ2V0VXJsUGFyYW0oJ2NvZGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogQHJldHVybiBQcm9taXNlPG51bWJlcj4gMC3lpb3lj4vvvIwxLeaci+WPi+WciFxuICAgKi9cbiAgc3RhdGljIG9uU2hhcmVXZWNoYXQob3B0aW9uczogeyB0aXRsZTogc3RyaW5nLCBkZXNjOiBzdHJpbmcsIGxpbms6IHN0cmluZywgaW1nVXJsOiBzdHJpbmcgfSk6IFByb21pc2U8bnVtYmVyPlxuICB7XG5cbiAgICBpZiAob3B0aW9ucy5pbWdVcmwuaW5kZXhPZignaHR0cCcpID09PSAtMSkge1xuICAgICAgb3B0aW9ucy5pbWdVcmwgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF0gKyBvcHRpb25zLmltZ1VybDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zaWduKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdqc3NkayDnrb7lkI3lpLHotKUnLCBlcnIpKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPG51bWJlcj4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB3eC5vbk1lbnVTaGFyZVRpbWVsaW5lKHtcbiAgICAgICAgICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUgKyAob3B0aW9ucy5kZXNjID8gJyB8ICcgKyBvcHRpb25zLmRlc2MgOiAnJyksXG4gICAgICAgICAgICAgIGRlc2M6IG51bGwsIC8vIOWIhuS6q+WIsOaci+WPi+WciOayoeaciSBkZXNjIOWtl+aute+8jOaLvOaOpeWIsCB0aXRsZSDkuIpcbiAgICAgICAgICAgICAgbGluazogb3B0aW9ucy5saW5rLFxuICAgICAgICAgICAgICBpbWdVcmw6IG9wdGlvbnMuaW1nVXJsLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiByZXNvbHZlKDEpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd3gub25NZW51U2hhcmVBcHBNZXNzYWdlKHtcbiAgICAgICAgICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUsIC8vIOWIhuS6q+agh+mimFxuICAgICAgICAgICAgICBkZXNjOiBvcHRpb25zLmRlc2MsIC8vIOWIhuS6q+aPj+i/sFxuICAgICAgICAgICAgICBsaW5rOiBvcHRpb25zLmxpbmssIC8vIOWIhuS6q+mTvuaOpVxuICAgICAgICAgICAgICBpbWdVcmw6IG9wdGlvbnMuaW1nVXJsLCAvLyDliIbkuqvlm77moIdcbiAgICAgICAgICAgICAgdHlwZTogJ2xpbmsnLCAvLyDliIbkuqvnsbvlnossbXVzaWPjgIF2aWRlb+aIlmxpbmvvvIzkuI3loavpu5jorqTkuLpsaW5rXG4gICAgICAgICAgICAgIGRhdGFVcmw6IG51bGwsIC8vIOWmguaenHR5cGXmmK9tdXNpY+aIlnZpZGVv77yM5YiZ6KaB5o+Q5L6b5pWw5o2u6ZO+5o6l77yM6buY6K6k5Li656m6XG4gICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHJlc29sdmUoMClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOiwg+i1t+W+ruS/oeaUr+S7mFxuICAgKiBUaXBcbiAgICog6YWN572u5a6J5YWo5pSv5LuY5Z+f5ZCNXG4gICAqIGpzc2RrIOmFjee9rlxuICAgKlxuICAgKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL3BheS53ZWl4aW4ucXEuY29tL3dpa2kvZG9jL2FwaS9qc2FwaS5waHA/Y2hhcHRlcj03XzcmaW5kZXg9NlwiPue9kemhteerr+iwg+i1t+aUr+S7mEFQSTwvYT5cbiAgICovXG4gIHN0YXRpYyBwYXkocGFyYW06IHtcbiAgICB0aW1lU3RhbXA6IHN0cmluZywgLy8g5pSv5LuY562+5ZCN5pe26Ze05oiz77yM5rOo5oSP5b6u5L+hanNzZGvkuK3nmoTmiYDmnInkvb/nlKh0aW1lc3RhbXDlrZfmrrXlnYfkuLrlsI/lhpnjgILkvYbmnIDmlrDniYjnmoTmlK/ku5jlkI7lj7DnlJ/miJDnrb7lkI3kvb/nlKjnmoR0aW1lU3RhbXDlrZfmrrXlkI3pnIDlpKflhpnlhbbkuK3nmoRT5a2X56ymXG4gICAgdGltZXN0YW1wPzogc3RyaW5nLFxuICAgIG5vbmNlU3RyOiBzdHJpbmcsIC8vIOaUr+S7mOetvuWQjemaj+acuuS4su+8jOS4jemVv+S6jiAzMiDkvY1cbiAgICBwYWNrYWdlOiBzdHJpbmcsIC8vIOe7n+S4gOaUr+S7mOaOpeWPo+i/lOWbnueahHByZXBheV9pZOWPguaVsOWAvO+8jOaPkOS6pOagvOW8j+Wmgu+8mnByZXBheV9pZD0qKirvvIlcbiAgICBzaWduVHlwZTogc3RyaW5nLCAvLyDnrb7lkI3mlrnlvI/vvIzpu5jorqTkuLonU0hBMSfvvIzkvb/nlKjmlrDniYjmlK/ku5jpnIDkvKDlhaUnTUQ1J1xuICAgIHBheVNpZ246IHN0cmluZywgLy8g5pSv5LuY562+5ZCNXG4gICAgc3VjY2Vzcz86IGFueSxcbiAgICBmYWlsPzogYW55XG4gIH0pOiBQcm9taXNlPGFueT5cbiAge1xuICAgIHBhcmFtLnRpbWVzdGFtcCA9IHBhcmFtLnRpbWVzdGFtcCB8fCBwYXJhbS50aW1lU3RhbXA7XG5cbiAgICBjb25zdCBjYWxsUGF5ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcGFyYW0uc3VjY2VzcyA9IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuZXJyTXNnID09PSAnY2hvb3NlV1hQYXk6b2snIHx8IHJlcy5lcnJfbXNnID09PSAnZ2V0X2JyYW5kX3djcGF5X3JlcXVlc3Q6b2snKSB7XG4gICAgICAgICAgcmVzb2x2ZSgnc3VjY2VzcycpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcy5lcnJfbXNnID09PSAnZ2V0X2JyYW5kX3djcGF5X3JlcXVlc3Q6Y2FuY2VsJykge1xuICAgICAgICAgIHJlamVjdCh7Y29kZTogMSwgbWVzc2FnZTogJ+WPlua2iOaUr+S7mCd9KTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuZXJyX21zZyA9PT0gJ2dldF9icmFuZF93Y3BheV9yZXF1ZXN0OmZhaWxlZCcpIHtcbiAgICAgICAgICByZWplY3Qoe2NvZGU6IDIsIG1lc3NhZ2U6ICfmlK/ku5jlpLHotKUnfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzLmVycl9jb2RlID09PSAzKSB7XG4gICAgICAgICAgcmVqZWN0KHtjb2RlOiAzLCBtZXNzYWdlOiByZXN9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3Qoe2NvZGU6IDksIG1lc3NhZ2U6IHJlcy5lcnJNc2cgfHwgcmVzLmVycl9tc2d9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcGFyYW0uZmFpbCA9IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMuZXJyTXNnKSB7XG4gICAgICAgICAgcmVqZWN0KHtjb2RlOiA5LCBtZXNzYWdlOiByZXMuZXJyTXNnIHx8IHJlcy5lcnJfbXNnfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvLyBAZGVwcmVjYXRlZCDkvb/nlKgge0BsaW5rIHBheU9sZH0sIGpzc2RrIOeahCB3eC5jaG9vc2VXeHBheVxuICAgICAgLy8gd3guY2hvb3NlV1hQYXkocGFyYW0pO1xuICAgICAgV2VjaGF0LnBheU9sZChwYXJhbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNhbGxQYXk7XG5cbiAgICAvLyByZXR1cm4gV2VjaGF0LnNpZ24oKS50aGVuKCgpID0+IGNhbGxQYXkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGF5T2xkKHNpZ246IHtcbiAgICBhcHBJZD86IHN0cmluZyxcbiAgICB0aW1lU3RhbXA6IHN0cmluZywgICAgLy8g5pSv5LuY562+5ZCN5pe26Ze05oiz77yM5rOo5oSP5b6u5L+hanNzZGvkuK3nmoTmiYDmnInkvb/nlKh0aW1lc3RhbXDlrZfmrrXlnYfkuLrlsI/lhpnjgILkvYbmnIDmlrDniYjnmoTmlK/ku5jlkI7lj7DnlJ/miJDnrb7lkI3kvb/nlKjnmoR0aW1lU3RhbXDlrZfmrrXlkI3pnIDlpKflhpnlhbbkuK3nmoRT5a2X56ymXG4gICAgdGltZXN0YW1wPzogc3RyaW5nLFxuICAgIG5vbmNlU3RyOiBzdHJpbmcsICAgICAvLyDmlK/ku5jnrb7lkI3pmo/mnLrkuLLvvIzkuI3plb/kuo4gMzIg5L2NXG4gICAgcGFja2FnZTogc3RyaW5nLCAgICAgIC8vIOe7n+S4gOaUr+S7mOaOpeWPo+i/lOWbnueahHByZXBheV9pZOWPguaVsOWAvO+8jOaPkOS6pOagvOW8j+Wmgu+8mnByZXBheV9pZD0qKirvvIlcbiAgICBzaWduVHlwZTogc3RyaW5nLCAgICAgLy8g562+5ZCN5pa55byP77yM6buY6K6k5Li6J1NIQTEn77yM5L2/55So5paw54mI5pSv5LuY6ZyA5Lyg5YWlJ01ENSdcbiAgICBwYXlTaWduOiBzdHJpbmcsICAgICAgLy8g5pSv5LuY562+5ZCNXG4gICAgc3VjY2Vzcz86IGFueSxcbiAgICBmYWlsPzogYW55XG4gIH0pXG4gIHtcbiAgICBjb25zdCBvbkJyaWRnZVJlYWR5ID0gKCkgPT4gV2VpeGluSlNCcmlkZ2UuaW52b2tlKCdnZXRCcmFuZFdDUGF5UmVxdWVzdCcsIHNpZ24sIHNpZ24uc3VjY2Vzcyk7XG4gICAgaWYgKHR5cGVvZiBXZWl4aW5KU0JyaWRnZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ1dlaXhpbkpTQnJpZGdlUmVhZHknLCBvbkJyaWRnZVJlYWR5LCBmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKChkb2N1bWVudCBhcyBhbnkpLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgIChkb2N1bWVudCBhcyBhbnkpLmF0dGFjaEV2ZW50KCdXZWl4aW5KU0JyaWRnZVJlYWR5Jywgb25CcmlkZ2VSZWFkeSk7XG4gICAgICAgIChkb2N1bWVudCBhcyBhbnkpLmF0dGFjaEV2ZW50KCdvbldlaXhpbkpTQnJpZGdlUmVhZHknLCBvbkJyaWRnZVJlYWR5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb25CcmlkZ2VSZWFkeSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzaGFyZVVybChwYXJhbTogb2JqZWN0KTogc3RyaW5nXG4gIHtcbiAgICBsZXQgdXJsID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG5cbiAgICAgIGlmICghcGFyYW1ba2V5XSB8fCBwYXJhbVtrZXldID09PSAnbnVsbCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdXJsICs9IHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnO1xuICAgICAgdXJsICs9IGtleSArICc9JyArIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbVtrZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICAvLyDlvq7kv6HnmbvlvZVcbiAgc3RhdGljIGNvZGUob3B0aW9uczoge1xuICAgIC8qKiDlhazkvJflj7cgYXBwIGlkICovXG4gICAgYXBwaWQ6IHN0cmluZyxcbiAgICAvKiog5byA5pS+5bmz5Y+wIGFwcCBpZCAqL1xuICAgIGNvbXBvbmVudF9hcHBpZD86IHN0cmluZyxcbiAgICAvKiog5Zue6LCDIOS4jeimgSB1cmkgZW5jb2RlICovXG4gICAgcmVkaXJlY3RfdXJpPzogc3RyaW5nLFxuICAgIHNjb3BlPzogJ3Nuc2FwaV91c2VyaW5mbycgfCAnc25zYXBpX2Jhc2UnLFxuICAgIC8qKiDku6PnkIYsIOeUqOS6jumdnuaOiOadg+Wfn+WQjeWunueOsOaOiOadg+S4muWKoSAqL1xuICAgIHByb3h5Pzogc3RyaW5nXG4gIH0pOiBPYnNlcnZhYmxlPHN0cmluZz5cbiAge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShzdWIgPT4ge1xuICAgICAgY29uc3QgY29kZSA9IHRoaXMuZ2V0QXV0aENvZGUoKTtcbiAgICAgIGlmICghY29kZSkge1xuICAgICAgICBjb25zdCBvcDogYW55ID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgb3Auc2NvcGUgPSBvcC5zY29wZSB8fCAnc25zYXBpX3VzZXJpbmZvJztcbiAgICAgICAgb3Auc3RhdGUgPSAnd2VjaGF0X2F1dGhfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBvcC5yZWRpcmVjdF91cmkgPSBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5yZWRpcmVjdF91cmkgfHwgbG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdKTtcbiAgICAgICAgb3AucmVzcG9uc2VfdHlwZSA9ICdjb2RlJztcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShXZWNoYXQuQ09PS0lFX0tFWV9BVVRIX1NUQVRFLCBvcC5zdGF0ZSk7XG5cbiAgICAgICAgbGV0IHVybCA9IChvcHRpb25zLnByb3h5IHx8ICdodHRwczovL29wZW4ud2VpeGluLnFxLmNvbS9jb25uZWN0L29hdXRoMi9hdXRob3JpemUnKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBPYmplY3Qua2V5cyhvcCkubWFwKGtleSA9PiBgJHtrZXl9PSR7b3Bba2V5XX1gKS5qb2luKCcmJyk7XG4gICAgICAgIHVybCArPSBgPyR7cXVlcnl9I3dlY2hhdF9yZWRpcmVjdGA7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybCk7XG4gICAgICAgIHN1Yi5jb21wbGV0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3ViLm5leHQoY29kZSk7XG4gICAgICAgIHN1Yi5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gIOiOt+WPluWcsOeQhuS9jee9ruaOpeWPo1xuICBzdGF0aWMgZ2V0TmV0d29ya1R5cGUoKTogUHJvbWlzZTxhbnk+XG4gIHtcbiAgICByZXR1cm4gdGhpcy5zaWduKCkudGhlbihyZXMgPT5cbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyB3eC5nZXROZXR3b3JrVHlwZSh7c3VjY2VzczogcmVzb2x2ZSwgZmFpbDogcmVqZWN0fSk7IH0pXG4gICAgKTtcbiAgfVxuXG5cbiAgLy8gIOiOt+WPluWcsOeQhuS9jee9ruaOpeWPo1xuICBzdGF0aWMgZ2V0TG9jYXRpb24oKTogUHJvbWlzZTxXWExvY2F0aW9uPlxuICB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LmdldExvY2F0aW9uKHtcbiAgICAgICAgdHlwZTogJ2djajAyJywgLy8g6buY6K6k5Li6d2dzODTnmoRncHPlnZDmoIfvvIzlpoLmnpzopoHov5Tlm57nm7TmjqXnu5lvcGVuTG9jYXRpb27nlKjnmoTngavmmJ/lnZDmoIfvvIzlj6/kvKDlhaUnZ2NqMDInXG4gICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXG4gICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAg5L2/55So5b6u5L+h5YaF572u5Zyw5Zu+5p+l55yL5L2N572u5o6l5Y+jXG4gIHN0YXRpYyBvcGVuTG9jYXRpb24obG9jYXRpb246IHtcbiAgICBsYXRpdHVkZTogbnVtYmVyLFxuICAgIGxvbmdpdHVkZTogbnVtYmVyXG4gIH0pXG4gIHtcbiAgICB3eC5vcGVuTG9jYXRpb24oe1xuICAgICAgbGF0aXR1ZGU6IGxvY2F0aW9uLmxhdGl0dWRlLCAvLyDnuqzluqbvvIzmta7ngrnmlbDvvIzojIPlm7TkuLo5MCB+IC05MFxuICAgICAgbG9uZ2l0dWRlOiBsb2NhdGlvbi5sb25naXR1ZGUsIC8vIOe7j+W6pu+8jOa1rueCueaVsO+8jOiMg+WbtOS4ujE4MCB+IC0xODDjgIJcbiAgICAgIG5hbWU6ICcnLCAvLyDkvY3nva7lkI1cbiAgICAgIGFkZHJlc3M6ICcnLCAvLyDlnLDlnYDor6bmg4Xor7TmmI5cbiAgICAgIHNjYWxlOiAxNCwgLy8g5Zyw5Zu+57yp5pS+57qn5YirLOaVtOW9ouWAvCzojIPlm7Tku44xfjI444CC6buY6K6k5Li65pyA5aSnXG4gICAgICBpbmZvVXJsOiAnJyAvLyDlnKjmn6XnnIvkvY3nva7nlYzpnaLlupXpg6jmmL7npLrnmoTotoXpk77mjqUs5Y+v54K55Ye76Lez6L2sXG4gICAgfSk7XG4gIH1cblxuLy8g5omT5byA5Zyw5Z2AXG4gIHN0YXRpYyBvcGVuQWRkcmVzcygpOiBQcm9taXNlPFdYQWRkcmVzcz5cbiAge1xuICAgIHJldHVybiB0aGlzLnNpZ24oKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxXWEFkZHJlc3M+KChyZXNvbHZlLCByZWplY3Q6IChlcnJvcjogeyBlcnJNc2c6IHN0cmluZyB9KSA9PiB2b2lkKSA9PlxuICAgICAgICAgIHd4Lm9wZW5BZGRyZXNzKHtzdWNjZXNzOiByZXNvbHZlLCBmYWlsOiByZWplY3R9KSk7XG4gICAgfSk7XG4gIH1cblxuLy8g6aKE6KeI5Zu+54mHXG4gIHN0YXRpYyBwcmV2aWV3SW1hZ2UodXJsczogQXJyYXk8c3RyaW5nPiwgY3VycmVudCA/OiBzdHJpbmcpXG4gIHtcbiAgICBpZiAoIXVybHMgfHwgdXJscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgY3VycmVudDogY3VycmVudCB8fCAnJywgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICB1cmxzOiB1cmxzICAgICAgICAgICAgICAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXG4gICAgfSk7XG4gIH1cblxuICAvKiog5YWz6Zet56qX5Y+jICovXG4gIHN0YXRpYyBjbG9zZVdpbmRvdygpXG4gIHtcbiAgICBpZiAodHlwZW9mIHd4ICE9PSAndW5kZWZpbmVkJyAmJiB3eCkge1xuICAgICAgd3guY2xvc2VXaW5kb3coKTtcbiAgICB9XG4gICAgbG9jYXRpb24uaHJlZiA9ICdhYm91dDpibGFuayc7XG4gICAgd2luZG93LmNsb3NlKCk7XG4gIH1cblxuICBzdGF0aWMgc2NhblFSQ29kZSgpOiBQcm9taXNlPGFueT5cbiAge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnNpZ24oKS50aGVuKCgpID0+IHtcbiAgICAgICAgd3guc2NhblFSQ29kZSh7XG4gICAgICAgICAgbmVlZFJlc3VsdDogMSwgLy8g6buY6K6k5Li6MO+8jOaJq+aPj+e7k+aenOeUseW+ruS/oeWkhOeQhu+8jDHliJnnm7TmjqXov5Tlm57miavmj4/nu5PmnpzvvIxcbiAgICAgICAgICBzY2FuVHlwZTogWydxckNvZGUnLCAnYmFyQ29kZSddLCAvLyDlj6/ku6XmjIflrprmiavkuoznu7TnoIHov5jmmK/kuIDnu7TnoIHvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICBzdWNjZXNzOiByZXMgPT4gcmVzb2x2ZShyZXMucmVzdWx0U3RyKVxuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICBtZW51SXRlbXMg6KaB6ZqQ6JeP55qE6I+c5Y2V6aG577yM5Y+q6IO96ZqQ6JeP4oCc5Lyg5pKt57G74oCd5ZKM4oCc5L+d5oqk57G74oCd5oyJ6ZKu77yM5omA5pyJbWVudemhueingemZhOW9lTNcbiAgICogQHNlZSB7QGxpbmsgV2VjaGF0Lk1FTlVfSVRFTVN9XG4gICAqL1xuICBzdGF0aWMgaGlkZU1lbnVJdGVtcyguLi5tZW51SXRlbXMpXG4gIHtcbiAgICB0aGlzLnNpZ24oKS50aGVuKCgpID0+IHd4LmhpZGVNZW51SXRlbXMoe21lbnVMaXN0OiBtZW51SXRlbXN9KSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICBtZW51SXRlbXMg6KaB6ZqQ6JeP55qE6I+c5Y2V6aG577yM5Y+q6IO96ZqQ6JeP4oCc5Lyg5pKt57G74oCd5ZKM4oCc5L+d5oqk57G74oCd5oyJ6ZKu77yM5omA5pyJbWVudemhueingemZhOW9lTNcbiAgICogQHNlZSB7QGxpbmsgV2VjaGF0Lk1FTlVfSVRFTVN9XG4gICAqL1xuICBzdGF0aWMgc2hvd01lbnVJdGVtcyguLi5tZW51SXRlbXMpXG4gIHtcbiAgICB0aGlzLnNpZ24oKS50aGVuKCgpID0+IHd4LnNob3dNZW51SXRlbXMoe21lbnVMaXN0OiBtZW51SXRlbXN9KSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gIH1cblxuLy8g5piv5ZCm5piv5b6u5L+h5rWP6KeI5Zmo5Lit5omT5byAXG4gIHN0YXRpYyBpc1dlY2hhdEFnZW50KCk6IGJvb2xlYW5cbiAge1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHIgPSB1YS5tYXRjaCgvTWljcm9NZXNzZW5nZXIvaSk7XG4gICAgcmV0dXJuIHIgJiYgclswXSA9PT0gJ21pY3JvbWVzc2VuZ2VyJyB8fCBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRVcmxQYXJhbShrZXk6IHN0cmluZywgdXJsOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHwgbnVsbFxuICB7XG4gICAgbGV0IHF1ZXJ5ID0gbnVsbDtcbiAgICBpZiAodXJsKSB7XG4gICAgICBxdWVyeSA9IHVybC5zcGxpdCgnPycpWzFdIHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0ge307XG4gICAgY29uc3QgdmFycyA9IHF1ZXJ5LnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFycykge1xuICAgICAgY29uc3QgcGFpciA9IGl0ZW0uc3BsaXQoJz0nKTtcbiAgICAgIC8vIElmIGZpcnN0IGVudHJ5IHdpdGggdGhpcyBuYW1lXG4gICAgICBpZiAodHlwZW9mIHF1ZXJ5U3RyaW5nW3BhaXJbMF1dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBxdWVyeVN0cmluZ1twYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgICAgIC8vIElmIHNlY29uZCBlbnRyeSB3aXRoIHRoaXMgbmFtZVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcXVlcnlTdHJpbmdbcGFpclswXV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHF1ZXJ5U3RyaW5nW3BhaXJbMF1dID0gW3F1ZXJ5U3RyaW5nW3BhaXJbMF1dLCBwYWlyWzFdXTtcbiAgICAgICAgLy8gSWYgdGhpcmQgb3IgbGF0ZXIgZW50cnkgd2l0aCB0aGlzIG5hbWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXJ5U3RyaW5nW3BhaXJbMF1dLnB1c2gocGFpclsxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHAgPSBxdWVyeVN0cmluZ1trZXldIHx8IG51bGw7XG4gICAgaWYgKHAgPT09ICdudWxsJykge1xuICAgICAgcCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2lnbigpOiBQcm9taXNlPGFueT5cbiAge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoV2VjaGF0LmluaXRpYWxpemVkKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2lnbmVyKCkudGhlbihzaWduID0+IHtcbiAgICAgICAgICBzaWduLmpzQXBpTGlzdCA9IFdlY2hhdC5BUElfTElTVDtcbiAgICAgICAgICBzaWduLmRlYnVnID0gV2VjaGF0LkRFQlVHO1xuXG4gICAgICAgICAgd3guY29uZmlnKHNpZ24pO1xuICAgICAgICAgIC8vIOetvuWQjeaIkOWKn+Wbnuiwg1xuICAgICAgICAgIHd4LnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHd4LmVycm9yKCgpID0+IHtcbiAgICAgICAgICAgIC8vIHJlamVjdChcImpzc2RrIGNvbmZpZyBlcnJvclwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2pzc2RrIGNvbmZpZyBlcnJvcicpO1xuICAgICAgICAgICAgcmVqZWN0KCdqc3NkayBjb25maWcgZXJyb3InKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgWyR7bmV3IERhdGUoKX1dW1dFQ0hBVF1gLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG5cbiAgc3RhdGljIHN0YXJ0UmVjb3JkKCk6IE9ic2VydmFibGU8c3RyaW5nPlxuICB7XG4gICAgd3guc3RhcnRSZWNvcmQoKTtcbiAgICByZXR1cm4gdGhpcy5vblZvaWNlUmVjb3JkRW5kKCk7XG4gIH1cblxuICBzdGF0aWMgc3RvcFJlY29yZCgpOiBPYnNlcnZhYmxlPHN0cmluZz5cbiAge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxzdHJpbmc+KSA9PiB7XG4gICAgICB3eC5zdG9wUmVjb3JkKHtcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXMubG9jYWxJZCk7XG4gICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5blhazkvJflj7diaXog55qE5pa55rOV77ya5omT5byA5YWs5LyX5Y+3Leafpeeci+WOhuWPsua2iOaBry1xdWVyeVtiaXpdXG4gICAqIOaJk+W8gOWFrOS8l+WPt+S/oeaBr+mhtVxuICAgKiBAcGFyYW0gYml6IE16QXdOREV5T0RBNU1RPT1cbiAgICovXG4gIHN0YXRpYyBob21lKGJpejogc3RyaW5nKVxuICB7XG4gICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vbXAud2VpeGluLnFxLmNvbS9tcC9wcm9maWxlX2V4dD9hY3Rpb249aG9tZSZfX2Jpej0ke2Jpen0mc2NlbmU9MTE2I3dlY2hhdF9yZWRpcmVjdGApO1xuICB9XG5cbiAgLy8g5b2V6Z+z5pe26Ze06LaF6L+H5LiA5YiG6ZKf5rKh5pyJ5YGc5q2i55qE5pe25YCZ5Lya5omn6KGMIGNvbXBsZXRlIOWbnuiwg1xuICBwcml2YXRlIHN0YXRpYyBvblZvaWNlUmVjb3JkRW5kKCk6IE9ic2VydmFibGU8c3RyaW5nPlxuICB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPHN0cmluZz4pID0+IHtcbiAgICAgIHd4Lm9uVm9pY2VSZWNvcmRFbmQoe1xuICAgICAgICBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihyZXMuZXJyTXNnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6IChyZXMpID0+IHtcbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmVzLmxvY2FsSWQpO1xuICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdHJhbnNsYXRlVm9pY2UobG9jYWxJZCk6IE9ic2VydmFibGU8c3RyaW5nPlxuICB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPHN0cmluZz4pID0+IHtcbiAgICAgIHd4LnRyYW5zbGF0ZVZvaWNlKHtcbiAgICAgICAgbG9jYWxJZCwgICAgICAgICAgICAgICAgLy8g6ZyA6KaB6K+G5Yir55qE6Z+z6aKR55qE5pys5ZywICBJZO+8jOeUseW9lemfs+ebuOWFs+aOpeWPo+iOt+W+l1xuICAgICAgICBpc1Nob3dQcm9ncmVzc1RpcHM6IDEsICAvLyDpu5jorqTkuLox77yM5pi+56S66L+b5bqm5o+Q56S6XG4gICAgICAgIHN1Y2Nlc3MocmVzKVxuICAgICAgICB7XG4gICAgICAgICAgLy8g6K+t6Z+z6K+G5Yir55qE57uT5p6cXG4gICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHJlcy50cmFuc2xhdGVSZXN1bHQpO1xuICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBXWFNpZ25cbntcbiAgYXBwSWQ6IHN0cmluZzsgICAgICAgICAgICAgIC8vIOW/heWhq++8jOWFrOS8l+WPt+eahOWUr+S4gOagh+ivhlxuICB0aW1lc3RhbXA6IG51bWJlcjsgICAgICAgICAgLy8g5b+F5aGr77yM55Sf5oiQ562+5ZCN55qE5pe26Ze05oizXG4gIG5vbmNlU3RyOiBzdHJpbmc7ICAgICAgICAgICAvLyDlv4XloavvvIznlJ/miJDnrb7lkI3nmoTpmo/mnLrkuLJcbiAgc2lnbmF0dXJlOiBzdHJpbmc7ICAgICAgICAgIC8vIOW/heWhq++8jOetvuWQjVxuICBqc0FwaUxpc3Q/OiBBcnJheTxzdHJpbmc+OyAgLy8g5b+F5aGr77yM6ZyA6KaB5L2/55So55qESlPmjqXlj6PliJfooajvvIzmiYDmnIlKU+aOpeWPo+WIl+ihqOingemZhOW9lTJcbiAgZGVidWc/OiBib29sZWFuOyAgICAgICAgICAgIC8vIOW8gOWQr+iwg+ivleaooeW8jyzosIPnlKjnmoTmiYDmnIlhcGnnmoTov5Tlm57lgLzkvJrlnKjlrqLmiLfnq69hbGVydOWHuuadpe+8jOiLpeimgeafpeeci+S8oOWFpeeahOWPguaVsO+8jOWPr+S7peWcqHBj56uv5omT5byA77yM5Y+C5pWw5L+h5oGv5Lya6YCa6L+HbG9n5omT5Ye677yM5LuF5ZyocGPnq6/ml7bmiY3kvJrmiZPljbDjgIJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXWEFkZHJlc3NcbntcbiAgdXNlck5hbWU6IHN0cmluZzsgICAgIC8vIFwi6ZmI5bCP6buRXCJcbiAgdGVsTnVtYmVyOiBzdHJpbmc7ICAgIC8vIFwiMTg4ODg4ODg4ODhcIlxuICBuYXRpb25Db2RlOiBzdHJpbmc7ICAgLy8gXCIzMTAxMTJcIixcbiAgZXJyTXNnOiBzdHJpbmc7ICAgICAgIC8vIFwib3BlbkFkZHJlc3M6b2tcIixcbiAgcG9zdGFsQ29kZTogc3RyaW5nOyAgIC8vIOmCrue8liBcIjIwMTEwMFwiXG4gIHByb3ZpbmNlTmFtZTogc3RyaW5nOyAvLyBcIuS4iua1t+W4glwiXG4gIGNpdHlOYW1lOiBzdHJpbmc7ICAgICAvLyBcIuS4iua1t+W4glwiXG4gIGNvdW50cnlOYW1lOiBzdHJpbmc7ICAvLyBcIumXteihjOWMulwiXG4gIGRldGFpbEluZm86IHN0cmluZzsgICAvLyBcIumXteihjOWMuuaihemZh+mVh+mrmOS8mOWVhuWKoeS4reW/g1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdYTG9jYXRpb25cbntcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gIGVyck1zZzogc3RyaW5nO1xufVxuXG5cbiJdfQ==