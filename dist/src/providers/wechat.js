import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
// 注入微信 js
var jssdk = document.createElement('script');
jssdk.src = 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js';
document.getElementsByTagName('head')[0].appendChild(jssdk);
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
    //配置签名
    Wechat.configSigner = 
    //配置签名
    function (signer) {
        this.signer = signer;
        this.sign().then(function () {
            Wechat.hideMenuItems.apply(Wechat, Wechat.HIDES);
        }).catch(function (error) { return console.error('JS SDK 签名异常', error); });
    };
    // 获取 auth code
    // 获取 auth code
    Wechat.getAuthCode = 
    // 获取 auth code
    function () {
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
    /**
     * @return Promise<number> 0-好友，1-朋友圈
     */
    /**
       * @return Promise<number> 0-好友，1-朋友圈
       */
    Wechat.onShareWechat = /**
       * @return Promise<number> 0-好友，1-朋友圈
       */
    function (options) {
        return this.sign().catch(function (err) { return console.log("jssdk 签名失败", err); })
            .then(function () {
            return new Promise(function (resolve) {
                wx.onMenuShareTimeline({
                    title: options.title + (options.desc ? " | " + options.desc : ""),
                    desc: null,
                    // 分享到朋友圈没有 desc 字段，拼接到 title 上
                    link: options.link,
                    imgUrl: options.imgUrl,
                    success: function () { return resolve(1); }
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
                    success: function () { return resolve(0); }
                });
            });
        });
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
       */
    Wechat.pay = /**
       * 调起微信支付
       * Tip
       * 配置安全支付域名
       * jssdk 配置
       *
       * @see <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6">网页端调起支付API</a>
       */
    function (param) {
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
    // 微信登录
    Wechat.redirectToWechatLogin = 
    // 微信登录
    function (appId, redirectUrl, proxy) {
        var state = "wechat_auth_" + new Date().getTime();
        localStorage.setItem(Wechat.COOKIE_KEY_AUTH_STATE, state);
        var url = (proxy || 'https://open.weixin.qq.com/connect/oauth2/authorize')
            + '?appid=' + appId
            + '&redirect_uri=' + encodeURIComponent(redirectUrl)
            + '&response_type=code'
            + '&scope=snsapi_userinfo'
            + '&state=' + state
            + '#wechat_redirect';
        window.location.replace(url);
    };
    //获取地理位置接口
    //获取地理位置接口
    Wechat.getNetworkType = 
    //获取地理位置接口
    function () {
        return this.sign().then(function (res) {
            return new Promise(function (resolve, reject) { wx.getNetworkType({ success: resolve, fail: reject }); });
        });
    };
    //获取地理位置接口
    //获取地理位置接口
    Wechat.getLocation = 
    //获取地理位置接口
    function () {
        return new Promise(function (resolve, reject) {
            wx.getLocation({
                type: 'gcj02',
                // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: resolve,
                fail: reject
            });
        });
    };
    //使用微信内置地图查看位置接口
    //使用微信内置地图查看位置接口
    Wechat.openLocation = 
    //使用微信内置地图查看位置接口
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
    Wechat.openAddress = 
    // 打开地址
    function () {
        return this.sign().then(function () {
            return new Promise(function (resolve, reject) {
                return wx.openAddress({ success: resolve, fail: reject });
            });
        });
    };
    // 预览图片
    // 预览图片
    Wechat.previewImage = 
    // 预览图片
    function (urls, current) {
        if (!urls || urls.length == 0)
            return;
        wx.previewImage({
            current: current || '',
            // 当前显示图片的http链接
            urls: urls // 需要预览的图片http链接列表
        });
    };
    /** 关闭窗口 */
    /** 关闭窗口 */
    Wechat.closeWindow = /** 关闭窗口 */
    function () {
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
                    // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                    scanType: ["qrCode", "barCode"],
                    // 可以指定扫二维码还是一维码，默认二者都有
                    success: function (res) { return resolve(res.resultStr); }
                });
            }).catch(reject);
        });
    };
    /**
     * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
     * @see {@link Wechat.MENU_ITEMS}
     */
    /**
       * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
       * @see {@link Wechat.MENU_ITEMS}
       */
    Wechat.hideMenuItems = /**
       * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
       * @see {@link Wechat.MENU_ITEMS}
       */
    function () {
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
    /**
       * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
       * @see {@link Wechat.MENU_ITEMS}
       */
    Wechat.showMenuItems = /**
       * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
       * @see {@link Wechat.MENU_ITEMS}
       */
    function () {
        var menuItems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            menuItems[_i] = arguments[_i];
        }
        this.sign().then(function () { return wx.showMenuItems({ menuList: menuItems }); }).catch(function (e) { return console.log(e); });
    };
    // 是否是微信浏览器中打开
    // 是否是微信浏览器中打开
    Wechat.isWechatAgent = 
    // 是否是微信浏览器中打开
    function () {
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
        return Observable.create(function (subscriber) {
            wx.stopRecord({
                success: function (res) {
                    subscriber.next(res.localId);
                    subscriber.complete();
                }
            });
        });
    };
    /**
     * 获取公众号biz 的方法：打开公众号-查看历史消息-query[biz]
     * 打开公众号信息页
     * @param biz MzAwNDEyODA5MQ==
     */
    /**
       * 获取公众号biz 的方法：打开公众号-查看历史消息-query[biz]
       * 打开公众号信息页
       * @param biz MzAwNDEyODA5MQ==
       */
    Wechat.home = /**
       * 获取公众号biz 的方法：打开公众号-查看历史消息-query[biz]
       * 打开公众号信息页
       * @param biz MzAwNDEyODA5MQ==
       */
    function (biz) {
        window.open("https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=" + biz + "&scene=116#wechat_redirect");
    };
    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
    Wechat.onVoiceRecordEnd = 
    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
    function () {
        return Observable.create(function (subscriber) {
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
        return Observable.create(function (subscriber) {
            wx.translateVoice({
                localId: localId,
                // 需要识别的音频的本地  Id，由录音相关接口获得
                isShowProgressTips: 1,
                // 默认为1，显示进度提示
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
        //举报:
        SET_FONT: "menuItem:setFont",
        //调整字体:
        DAY_MODE: "menuItem:dayMode",
        //日间模式:
        NIGHT_MODE: "menuItem:nightMode",
        //夜间模式:
        REFRESH: "menuItem:refresh",
        //刷新:
        PROFILE: "menuItem:profile",
        //查看公众号（已添加）
        ADD_CONTACT: "menuItem:addContact",
        //查看公众号（未添加）
        //传播类
        SHARE_APP_MESSAGE: "menuItem:share:appMessage",
        //发送给朋友
        SHARE_TIME_LINE: "menuItem:share:timeline",
        //分享到朋友圈
        SHARE_QQ: "menuItem:share:qq",
        //分享到QQ
        SHARE_WEIBO_APP: "menuItem:share:weiboApp",
        //分享到Weibo
        SHARE_FACEBOOK: "menuItem:share:facebook",
        //分享到FB:
        SHARE_QZONE: "menuItem:share:QZone",
        //分享到 QQ 空间
        FAVORITE: "menuItem:favorite",
        //收藏
        // 保护类
        EDIT_TAG: "menuItem:editTag",
        //编辑标签:
        DELETE: "menuItem:delete",
        //删除:
        COPY_URL: "menuItem:copyUrl",
        //复制链接:
        ORIGIN_PAGE: "menuItem:originPage",
        //原网页:
        READ_MORE: "menuItem:readMode",
        //阅读模式:
        OPEN_WITH_QQ_BROWSER: "menuItem:openWithQQBrowser",
        //在QQ浏览器中打开:
        OPEN_WITH_SAFARI: "menuItem:openWithSafari",
        //在Safari中打开:
        SHARE_EMAIL: "menuItem:share:email",
        //邮件:
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
export { Wechat };
var WXSign = /** @class */ (function () {
    function WXSign() {
    }
    return WXSign;
}());
export { WXSign };
var WXAddress = /** @class */ (function () {
    function WXAddress() {
    }
    return WXAddress;
}());
export { WXAddress };
var WXLocation = /** @class */ (function () {
    function WXLocation() {
        this.latitude = 31.230416;
        this.longitude = 121.473701;
        this.errMsg = "getLocation:ok";
    }
    return WXLocation;
}());
export { WXLocation };
//# sourceMappingURL=wechat.js.map