import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";
// import "http://res.wx.qq.com/open/js/jweixin-1.2.0.js";
// import "https://res.wx.qq.com/open/js/jweixin-1.2.0.js";
declare let wx;
declare let WeixinJSBridge;


// 注入微信 js
let jssdk = document.createElement('script');
jssdk.src = 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js';
document.getElementsByTagName('head')[0].appendChild(jssdk);

/**
 * js sdk
 * http://res.wx.qq.com/open/js/jweixin-1.1.0.js
 *
 * @see <a href="https://mp.weixin.qq.com/wiki">微信公众平台技术文档</a>
 */
export class Wechat
{
  public static DEBUG = false;
  private static initialized = false;
  private static COOKIE_KEY_AUTH_STATE = "cookie_auth_state";
  private static API_LIST = [
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
  public static MENU_ITEMS = {
    //基本类
    EXPOSE_ARTICLE: "menuItem:exposeArticle",     //举报:
    SET_FONT: "menuItem:setFont",                 //调整字体:
    DAY_MODE: "menuItem:dayMode",                 //日间模式:
    NIGHT_MODE: "menuItem:nightMode",             //夜间模式:
    REFRESH: "menuItem:refresh",                  //刷新:
    PROFILE: "menuItem:profile",                  //查看公众号（已添加）
    ADD_CONTACT: "menuItem:addContact",           //查看公众号（未添加）

    //传播类
    SHARE_APP_MESSAGE: "menuItem:share:appMessage",//发送给朋友
    SHARE_TIME_LINE: "menuItem:share:timeline",//分享到朋友圈
    SHARE_QQ: "menuItem:share:qq",//分享到QQ
    SHARE_WEIBO_APP: "menuItem:share:weiboApp",//分享到Weibo
    SHARE_FACEBOOK: "menuItem:share:facebook",//分享到FB:
    SHARE_QZONE: "menuItem:share:QZone",//分享到 QQ 空间
    FAVORITE: "menuItem:favorite",//收藏

    // 保护类
    EDIT_TAG: "menuItem:editTag",//编辑标签:
    DELETE: "menuItem:delete",//删除:
    COPY_URL: "menuItem:copyUrl",//复制链接:
    ORIGIN_PAGE: "menuItem:originPage",//原网页:
    READ_MORE: "menuItem:readMode",//阅读模式:
    OPEN_WITH_QQ_BROWSER: "menuItem:openWithQQBrowser",//在QQ浏览器中打开:
    OPEN_WITH_SAFARI: "menuItem:openWithSafari",//在Safari中打开:
    SHARE_EMAIL: "menuItem:share:email",//邮件:
    SHARE_BRAND: "menuItem:share:brand"//一些特殊公众号:
  };

  private static HIDES: Array<string> = [
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

  private static signer: () => Promise<WXSign>;

//配置签名
  static configSigner(signer: () => Promise<WXSign>)
  {
    this.signer = signer;
    this.sign().then(() => {
      Wechat.hideMenuItems(...Wechat.HIDES)
    }).catch(error => console.error('JS SDK 签名异常', error));
  }


// 获取 auth code
  static getAuthCode()
  {
    let cookieState = localStorage.getItem(Wechat.COOKIE_KEY_AUTH_STATE);
    localStorage.removeItem(Wechat.COOKIE_KEY_AUTH_STATE);
    let urlState = Wechat.getUrlParam("state");

    if (urlState && urlState == cookieState) {
      return Wechat.getUrlParam("code");
    } else {
      return null;
    }
  }


  /**
   * @return Promise<number> 0-好友，1-朋友圈
   */
  static onShareWechat(options: { title: string, desc: string, link: string, imgUrl: string }): Promise<number>
  {
    return this.sign().catch(err => console.log("jssdk 签名失败", err))
        .then(() => {
          return new Promise<number>(resolve => {
            wx.onMenuShareTimeline({
              title: options.title + (options.desc ? " | " + options.desc : ""),
              desc: null,// 分享到朋友圈没有 desc 字段，拼接到 title 上
              link: options.link,
              imgUrl: options.imgUrl,
              success: () => resolve(1)
            });

            wx.onMenuShareAppMessage({
              title: options.title, // 分享标题
              desc: options.desc, // 分享描述
              link: options.link, // 分享链接
              imgUrl: options.imgUrl, // 分享图标
              type: 'link', // 分享类型,music、video或link，不填默认为link
              dataUrl: null, // 如果type是music或video，则要提供数据链接，默认为空
              success: () => resolve(0)
            });

          });
        })
  }

  /**
   * 调起微信支付
   * Tip
   * 配置安全支付域名
   * jssdk 配置
   *
   * @see <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&index=6">网页端调起支付API</a>
   */
  static pay(param: {
    timeStamp: string, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
    timestamp?: string,
    nonceStr: string, // 支付签名随机串，不长于 32 位
    package: string, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
    signType: string, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
    paySign: string, // 支付签名
    success?: any,
    fail?: any
  }): Promise<any>
  {
    param.timestamp = param.timestamp || param.timeStamp;

    let callPay = new Promise((resolve, reject) => {
      param.success = res => {
        if (res.errMsg == 'chooseWXPay:ok' || res.err_msg == "get_brand_wcpay_request:ok") {
          resolve('success');
        } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
          reject({code: 1, message: "取消支付"});
        } else if (res.err_msg == "get_brand_wcpay_request:failed") {
          reject({code: 2, message: "支付失败"});
        } else if (res.err_code == 3) {
          reject({code: 3, message: res});
        } else {
          reject({code: 9, message: res.errMsg || res.err_msg});
        }
      };

      param.fail = res => {
        if (res.errMsg) {
          reject({code: 9, message: res.errMsg || res.err_msg});
        } else {
          reject(res);
        }
      };
      //* @deprecated 使用 {@link payOld}, jssdk 的 wx.chooseWxpay
      // wx.chooseWXPay(param);
      Wechat.payOld(param)
    });
    return callPay;

    // return Wechat.sign().then(() => callPay);
  }

  private static payOld(sign: {
    appId?: string,
    timeStamp: string,    // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
    timestamp?: string,
    nonceStr: string,     // 支付签名随机串，不长于 32 位
    package: string,      // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
    signType: string,     // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
    paySign: string,      // 支付签名
    success?: any,
    fail?: any
  })
  {
    let onBridgeReady = () => WeixinJSBridge.invoke('getBrandWCPayRequest', sign, sign.success);
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if ((document as any).attachEvent) {
        (document as any).attachEvent('WeixinJSBridgeReady', onBridgeReady);
        (document as any).attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    } else {
      onBridgeReady();
    }
  }

  static shareUrl(param: Object): string
  {
    let url = location.href.split("?")[0];
    Object.keys(param).forEach((key, index) => {

      if (!param[key] || param[key] == "null") return;
      url += url.indexOf("?") == -1 ? "?" : "&";
      url += key + "=" + decodeURIComponent(param[key]);
    });

    return url;
  }

// 微信登录
  static redirectToWechatLogin(appId: string, redirectUrl: string, proxy?: string): void
  {
    let state = "wechat_auth_" + new Date().getTime();
    localStorage.setItem(Wechat.COOKIE_KEY_AUTH_STATE, state);

    let url = (proxy || 'https://open.weixin.qq.com/connect/oauth2/authorize')
        + '?appid=' + appId
        + '&redirect_uri=' + encodeURIComponent(redirectUrl)
        + '&response_type=code'
        + '&scope=snsapi_userinfo'
        + '&state=' + state
        + '#wechat_redirect';

    window.location.replace(url);
  }


//获取地理位置接口
  static getNetworkType(): Promise<any>
  {
    return this.sign().then(res =>
        new Promise((resolve, reject) => { wx.getNetworkType({success: resolve, fail: reject}) })
    );
  }


//获取地理位置接口
  static getLocation(): Promise<WXLocation>
  {
    return new Promise((resolve, reject) => {
      wx.getLocation({
        type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: resolve,
        fail: reject
      });
    });
  }

//使用微信内置地图查看位置接口
  static openLocation(location: {
    latitude: number,
    longitude: number
  })
  {
    wx.openLocation({
      latitude: location.latitude, // 纬度，浮点数，范围为90 ~ -90
      longitude: location.longitude, // 经度，浮点数，范围为180 ~ -180。
      name: '', // 位置名
      address: '', // 地址详情说明
      scale: 14, // 地图缩放级别,整形值,范围从1~28。默认为最大
      infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
    });
  }

// 打开地址
  static openAddress(): Promise<WXAddress>
  {
    return this.sign().then(() => {
      return new Promise<WXAddress>((resolve, reject: (error: { errMsg: string }) => void) =>
          wx.openAddress({success: resolve, fail: reject}));
    });
  }

// 预览图片
  static previewImage(urls: Array<string>, current ?: string)
  {
    if (!urls || urls.length == 0) return;

    wx.previewImage({
      current: current || '', // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    });
  }

  /** 关闭窗口 */
  static closeWindow()
  {
    typeof wx != "undefined" && wx && wx.closeWindow();
    location.href = "about:blank";
    window.close();
  }

  static scanQRCode(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.sign().then(() => {
        wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: res => resolve(res.resultStr)
        });
      }).catch(reject);
    });
  }

  /**
   * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
   * @see {@link Wechat.MENU_ITEMS}
   */
  static hideMenuItems(...menuItems)
  {
    this.sign().then(() => wx.hideMenuItems({menuList: menuItems})).catch(e => console.log(e));
  }

  /**
   * @param  menuItems 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
   * @see {@link Wechat.MENU_ITEMS}
   */
  static showMenuItems(...menuItems)
  {
    this.sign().then(() => wx.showMenuItems({menuList: menuItems})).catch(e => console.log(e));
  }

// 是否是微信浏览器中打开
  static isWechatAgent(): boolean
  {
    let ua = navigator.userAgent.toLowerCase();
    let r = ua.match(/MicroMessenger/i);
    return r && r[0] == "micromessenger" || false;
  }

  static getUrlParam(key: string, url: string = null): string | null
  {
    let query = null;
    if (url) {
      query = url.split("?")[1] || "";
    } else {
      query = window.location.search.substring(1);
    }

    let query_string = {};
    let vars = query.split('&');

    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=');
      // If first entry with this name
      if (typeof query_string[pair[0]] === 'undefined') {
        query_string[pair[0]] = pair[1];
        // If second entry with this name
      } else if (typeof query_string[pair[0]] === 'string') {
        query_string[pair[0]] = [query_string[pair[0]], pair[1]];
        // If third or later entry with this name
      } else {
        query_string[pair[0]].push(pair[1]);
      }
    }

    let p = query_string[key] || null;
    if (p == "null") p = null;
    return p;
  }

  private static sign(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      if (Wechat.initialized) {
        resolve();
      } else {
        this.signer().then(sign => {
          sign.jsApiList = Wechat.API_LIST;
          sign.debug = Wechat.DEBUG;

          wx.config(sign);
          //签名成功回调
          wx.ready(() => {
            this.initialized = true;
            resolve();
          });
          wx.error(() => {
            // reject("jssdk config error");
            console.error("jssdk config error");
            reject("jssdk config error");
          });
        }).catch(e => {
          console.error(`[${new Date()}][WECHAT]`, e)
        });
      }
    });

  }


  static startRecord(): Observable<string>
  {
    wx.startRecord();
    return this.onVoiceRecordEnd()
  }

  static stopRecord(): Observable<string>
  {
    return Observable.create((subscriber: Subscriber<string>) => {
      wx.stopRecord({
        success: (res) => {
          subscriber.next(res.localId);
          subscriber.complete();
        }
      });
    })
  }

  /**
   * 获取公众号biz 的方法：打开公众号-查看历史消息-query[biz]
   * 打开公众号信息页
   * @param biz MzAwNDEyODA5MQ==
   */
  static home(biz: string)
  {
    window.open(`https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=${biz}&scene=116#wechat_redirect`);
  }

  // 录音时间超过一分钟没有停止的时候会执行 complete 回调
  private static onVoiceRecordEnd(): Observable<string>
  {
    return Observable.create((subscriber: Subscriber<string>) => {
      wx.onVoiceRecordEnd({
        fail: (res) => {
          subscriber.error(res.errMsg);
        },
        complete: (res) => {
          subscriber.next(res.localId);
          subscriber.complete()
        }
      });
    })
  }

  static translateVoice(localId): Observable<string>
  {
    return Observable.create((subscriber: Subscriber<string>) => {
      wx.translateVoice({
        localId: localId,           // 需要识别的音频的本地  Id，由录音相关接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
          // 语音识别的结果
          subscriber.next(res.translateResult);
          subscriber.complete();
        }
      });
    });
  }
}

export class WXSign
{
  appId: string; // 必填，公众号的唯一标识
  timestamp: number; // 必填，生成签名的时间戳
  nonceStr: string; // 必填，生成签名的随机串
  signature: string;// 必填，签名
  jsApiList?: Array<string>; // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  debug?: boolean; // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
}

export class WXAddress
{
  userName: string;     //"陈小黑"
  telNumber: string;    //"18888888888"
  nationCode: string;   //"310112",
  errMsg: string;       //"openAddress:ok",
  postalCode: string;   //邮编 "201100"
  provinceName: string; //"上海市"
  cityName: string;     //"上海市"
  countryName: string;  //"闵行区"
  detailInfo: string;   //"闵行区梅陇镇高优商务中心
}

export class WXLocation
{
  latitude: number = 31.230416;
  longitude: number = 121.473701;
  errMsg: string = "getLocation:ok";
}

