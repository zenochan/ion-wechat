"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
/**
 * js sdk
 * http://res.wx.qq.com/open/js/jweixin-1.1.0.js
 *
 * @see <a href="https://mp.weixin.qq.com/wiki">微信公众平台技术文档</a>
 */
var Wechat = /** @class */ (function () {
    function Wechat() {
    }
    //配置签名
    Wechat.configSigner = function (signer) {
        this.signer = signer;
        this.sign().then(function () {
            Wechat.hideMenuItems.apply(Wechat, Wechat.HIDES);
        }).catch(function (error) { return console.error('JS SDK 签名异常', error); });
    };
    // 获取 auth code
    Wechat.getAuthCode = function () {
        var cookieState = localStorage.getItem(Wechat.COOKIE_KEY_AUTH_STATE);
        localStorage.removeItem(Wechat.COOKIE_KEY_AUTH_STATE);
        var urlState = Wechat.getUrlParam("state");
        if (urlState && urlState == cookieState) {
            return Wechat.getUrlParam("code");
        }
        else {
            return null;
        }
    };
    Wechat.onShareWechat = function (options) {
        this.sign().then(function () {
            wx.onMenuShareTimeline({
                title: options.title + (options.desc ? " | " + options.desc : ""),
                desc: null,
                link: options.link,
                imgUrl: options.imgUrl,
                success: function () { return options.success && options.success(1); },
                cancel: function () { return options.cancel && options.cancel(1); }
            });
            wx.onMenuShareAppMessage({
                title: options.title,
                desc: options.desc,
                link: options.link,
                imgUrl: options.imgUrl,
                type: 'link',
                dataUrl: null,
                success: function () { return options.success && options.success(0); },
                cancel: function () { return options.cancel && options.cancel(0); }
            });
        }).catch(function (err) { return console.log("jssdk 签名失败", err); });
    };
    /**
     * 调起微信支付
     * Tip
     * 配置安全支付域名
     * jssdk 配置
     *
     * @see <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6">网页端调起支付API</a>
     */
    Wechat.pay = function (param) {
        param.timestamp = param.timestamp || param.timeStamp;
        var callPay = new Promise(function (resolve, reject) {
            param.success = function (res) {
                if (res.errMsg == 'chooseWXPay:ok' || res.err_msg == "get_brand_wcpay_request:ok") {
                    resolve('success');
                }
                else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                    reject({ code: 1, message: "取消支付" });
                }
                else if (res.err_msg == "get_brand_wcpay_request:failed") {
                    reject({ code: 2, message: "支付失败" });
                }
                else if (res.err_code == 3) {
                    reject({ code: 3, message: res });
                }
                else {
                    reject({ code: 9, message: res.errMsg || res.err_msg });
                }
            };
            param.fail = function (res) {
                if (res.errMsg) {
                    reject({ code: 9, message: res.errMsg || res.err_msg });
                }
                else {
                    reject(res);
                }
            };
            //* @deprecated 使用 {@link payOld}, jssdk 的 wx.chooseWxpay
            // wx.chooseWXPay(param);
            Wechat.payOld(param);
        });
        return callPay;
        // return Wechat.sign().then(() => callPay);
    };
    Wechat.payOld = function (sign) {
        var onBridgeReady = function () { return WeixinJSBridge.invoke('getBrandWCPayRequest', sign, sign.success); };
        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            }
            else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
        }
        else {
            onBridgeReady();
        }
    };
    Wechat.shareUrl = function (param) {
        var url = location.href.split("?")[0];
        Object.keys(param).forEach(function (key, index) {
            if (!param[key] || param[key] == "null")
                return;
            url += url.indexOf("?") == -1 ? "?" : "&";
            url += key + "=" + decodeURIComponent(param[key]);
        });
        return url;
    };
    // 微信登录
    Wechat.redirectToWechatLogin = function (appId, redirectUrl) {
        var state = "wechat_auth_" + new Date().getTime();
        localStorage.setItem(Wechat.COOKIE_KEY_AUTH_STATE, state);
        var url = 'https://open.weixin.qq.com/connect/oauth2/authorize'
            + '?appid=' + appId
            + '&redirect_uri=' + encodeURIComponent(redirectUrl)
            + '&response_type=code'
            + '&scope=snsapi_userinfo'
            + '&state=' + state
            + '#wechat_redirect';
        window.location.replace(url);
    };
    //获取地理位置接口
    Wechat.getNetworkType = function () {
        return this.sign().then(function (res) {
            return new Promise(function (resolve, reject) { wx.getNetworkType({ success: resolve, fail: reject }); });
        });
    };
    //获取地理位置接口
    Wechat.getLocation = function () {
        return new Promise(function (resolve, reject) {
            wx.getLocation({
                type: 'gcj02',
                success: resolve,
                fail: reject
            });
        });
    };
    //使用微信内置地图查看位置接口
    Wechat.openLocation = function (location) {
        wx.openLocation({
            latitude: location.latitude,
            longitude: location.longitude,
            name: '',
            address: '',
            scale: 14,
            infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
        });
    };
    // 打开地址
    Wechat.openAddress = function () {
        return this.sign().then(function () {
            return new Promise(function (resolve, reject) {
                return wx.openAddress({ success: resolve, fail: reject });
            });
        });
    };
    // 预览图片
    Wechat.previewImage = function (urls, current) {
        wx.previewImage({
            current: current || '',
            urls: urls // 需要预览的图片http链接列表
        });
    };
    /** 关闭窗口 */
    Wechat.closeWindow = function () {
        typeof wx != "undefined" && wx && wx.closeWindow();
        location.href = "about:blank";
        window.close();
    };
    Wechat.scanQRCode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sign().then(function () {
                wx.scanQRCode({
                    needResult: 1,
                    scanType: ["qrCode", "barCode"],
                    success: function (res) { return resolve(res.resultStr); }
                });
            }).catch(reject);
        });
    };
    /**
     * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @see {@link Wechat.MENU_ITEMS}
     */
    Wechat.hideMenuItems = function () {
        var menuItems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            menuItems[_i] = arguments[_i];
        }
        this.sign().then(function () { return wx.hideMenuItems({ menuList: menuItems }); }).catch(function (e) { return console.log(e); });
    };
    /**
     * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @see {@link Wechat.MENU_ITEMS}
     */
    Wechat.showMenuItems = function () {
        var menuItems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            menuItems[_i] = arguments[_i];
        }
        this.sign().then(function () { return wx.showMenuItems({ menuList: menuItems }); }).catch(function (e) { return console.log(e); });
    };
    // 是否是微信浏览器中打开
    Wechat.isWechatAgent = function () {
        var ua = navigator.userAgent.toLowerCase();
        var r = ua.match(/MicroMessenger/i);
        return r && r[0] == "micromessenger" || false;
    };
    Wechat.getUrlParam = function (key, url) {
        if (url === void 0) { url = null; }
        var query = null;
        if (url) {
            query = url.split("?")[1] || "";
        }
        else {
            query = window.location.search.substring(1);
        }
        var query_string = {};
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            // If first entry with this name
            if (typeof query_string[pair[0]] === 'undefined') {
                query_string[pair[0]] = pair[1];
                // If second entry with this name
            }
            else if (typeof query_string[pair[0]] === 'string') {
                query_string[pair[0]] = [query_string[pair[0]], pair[1]];
                // If third or later entry with this name
            }
            else {
                query_string[pair[0]].push(pair[1]);
            }
        }
        var p = query_string[key] || null;
        if (p == "null")
            p = null;
        return p;
    };
    Wechat.sign = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (Wechat.initialized) {
                resolve();
            }
            else {
                _this.signer().then(function (sign) {
                    sign.jsApiList = Wechat.API_LIST;
                    sign.debug = Wechat.DEBUG;
                    wx.config(sign);
                    //签名成功回调
                    wx.ready(function () {
                        _this.initialized = true;
                        resolve();
                    });
                    wx.error(function () {
                        // reject("jssdk config error");
                        console.error("jssdk config error");
                        reject("jssdk config error");
                    });
                }).catch(function (e) {
                    console.error("[" + new Date() + "][WECHAT]", e);
                });
            }
        });
    };
    Wechat.startRecord = function () {
        wx.startRecord();
        return this.onVoiceRecordEnd();
    };
    Wechat.stopRecord = function () {
        return Observable_1.Observable.create(function (subscriber) {
            wx.stopRecord({
                success: function (res) {
                    subscriber.next(res.localId);
                    subscriber.complete();
                }
            });
        });
    };
    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
    Wechat.onVoiceRecordEnd = function () {
        return Observable_1.Observable.create(function (subscriber) {
            wx.onVoiceRecordEnd({
                fail: function (res) {
                    subscriber.error(res.errMsg);
                },
                complete: function (res) {
                    subscriber.next(res.localId);
                    subscriber.complete();
                }
            });
        });
    };
    Wechat.translateVoice = function (localId) {
        return Observable_1.Observable.create(function (subscriber) {
            wx.translateVoice({
                localId: localId,
                isShowProgressTips: 1,
                success: function (res) {
                    // 语音识别的结果
                    subscriber.next(res.translateResult);
                    subscriber.complete();
                }
            });
        });
    };
    Wechat.DEBUG = false;
    Wechat.initialized = false;
    Wechat.COOKIE_KEY_AUTH_STATE = "cookie_auth_state";
    Wechat.API_LIST = [
        "onMenuShareTimeline",
        "onMenuShareAppMessage",
        "onMenuShareQQ",
        "onMenuShareWeibo",
        "onMenuShareQZone",
        "startRecord",
        "stopRecord",
        "onVoiceRecordEnd",
        "playVoice",
        "pauseVoice",
        "stopVoice",
        "onVoicePlayEnd",
        "uploadVoice",
        "downloadVoice",
        "chooseImage",
        "previewImage",
        "uploadImage",
        "downloadImage",
        "translateVoice",
        "getNetworkType",
        "openLocation",
        "getLocation",
        "hideOptionMenu",
        "showOptionMenu",
        "hideMenuItems",
        "showMenuItems",
        "hideAllNonBaseMenuItem",
        "showAllNonBaseMenuItem",
        "closeWindow",
        "scanQRCode",
        "chooseWXPay",
        "openProductSpecificView",
        "addCard",
        "chooseCard",
        "openCard",
        "openAddress"
    ];
    Wechat.MENU_ITEMS = {
        //基本类
        EXPOSE_ARTICLE: "menuItem:exposeArticle",
        SET_FONT: "menuItem:setFont",
        DAY_MODE: "menuItem:dayMode",
        NIGHT_MODE: "menuItem:nightMode",
        REFRESH: "menuItem:refresh",
        PROFILE: "menuItem:profile",
        ADD_CONTACT: "menuItem:addContact",
        //传播类
        SHARE_APP_MESSAGE: "menuItem:share:appMessage",
        SHARE_TIME_LINE: "menuItem:share:timeline",
        SHARE_QQ: "menuItem:share:qq",
        SHARE_WEIBO_APP: "menuItem:share:weiboApp",
        SHARE_FACEBOOK: "menuItem:share:facebook",
        SHARE_QZONE: "menuItem:share:QZone",
        FAVORITE: "menuItem:favorite",
        // 保护类
        EDIT_TAG: "menuItem:editTag",
        DELETE: "menuItem:delete",
        COPY_URL: "menuItem:copyUrl",
        ORIGIN_PAGE: "menuItem:originPage",
        READ_MORE: "menuItem:readMode",
        OPEN_WITH_QQ_BROWSER: "menuItem:openWithQQBrowser",
        OPEN_WITH_SAFARI: "menuItem:openWithSafari",
        SHARE_EMAIL: "menuItem:share:email",
        SHARE_BRAND: "menuItem:share:brand" //一些特殊公众号:
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
exports.Wechat = Wechat;
var WXSign = /** @class */ (function () {
    function WXSign() {
    }
    return WXSign;
}());
exports.WXSign = WXSign;
var WXAddress = /** @class */ (function () {
    function WXAddress() {
    }
    return WXAddress;
}());
exports.WXAddress = WXAddress;
var WXLocation = /** @class */ (function () {
    function WXLocation() {
        this.latitude = 31.230416;
        this.longitude = 121.473701;
        this.errMsg = "getLocation:ok";
    }
    return WXLocation;
}());
exports.WXLocation = WXLocation;
/**
 * 微信分享
 *
 * @property title     分享标题
 * @property desc      分享描述
 * @property link      分享链接
 * @property imgUrl    分享图标
 * @property success   用户确认分享后执行的回调函数 type:0:好友， 1：朋友圈
 * @property cancel    用户取消分享后执行的回调函数 type:0:好友， 1：朋友圈
 */
var ShareOptions = /** @class */ (function () {
    function ShareOptions() {
    }
    return ShareOptions;
}());
exports.ShareOptions = ShareOptions;
//# sourceMappingURL=wechat.js.map