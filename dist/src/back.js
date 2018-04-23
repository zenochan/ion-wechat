var Back = /** @class */ (function () {
    function Back() {
    }
    Back.title = function (title) {
        document.getElementsByTagName('title')[0].innerHTML = title;
    };
    Back.onIonViewDidLoad = function (page) {
        page.time = new Date().getTime();
        page.back = function (e) {
            // 这里获取到的 state 实际上是 popstate 后的 data, so 后面的代码需要替换前一个 state data
            if (window.history.state.time == page.time) {
                page.navCtrl.pop().catch(function (e) { return console.error(e); });
                // 注销监听
                window.removeEventListener("popstate", page.back);
                page.back = null;
                // 处理其他需要操作的事件， 如 dismiss modal
            }
        };
        window.addEventListener("popstate", page.back, false);
        // 设置前一个和将要压入的 state data 数据
        window.history.replaceState({ time: page.time, active: false }, null, null);
        window.history.pushState({ time: page.time, active: true }, null, null);
    };
    Back.onIonViewWillUnload = function (page) {
        // 注销监听器
        page.back && window.removeEventListener("popstate", page.back);
        if (window.history.state.time == page.time && window.history.state.active) {
            // 如果不是通过 back 回退的，需要手动回退一个状态
            window.history.back();
        }
    };
    return Back;
}());
export { Back };
var BasePage = /** @class */ (function () {
    /**
     * @param {string} title 标题
     * @param {boolean} enableBack 是否添加 window.history 会退栈
     */
    function BasePage(title, enableBack) {
        if (title === void 0) { title = null; }
        if (enableBack === void 0) { enableBack = false; }
        this.title = null;
        this.enableBack = false;
        this.title = title;
        this.enableBack = enableBack;
    }
    BasePage.prototype.ionViewWillEnter = function () {
        this.title && Back.title(this.title);
    };
    BasePage.prototype.setTitle = function (title) {
        this.title = title;
        this.title && Back.title(this.title);
    };
    BasePage.prototype.ionViewDidLoad = function () {
        console.log('BasePage::ionViewDidLoad', this.constructor.name);
        this.enableBack && Back.onIonViewDidLoad(this);
    };
    BasePage.prototype.ionViewWillUnload = function () {
        console.log('BasePage:ionViewWillUnload', this.constructor.name);
        this.enableBack && Back.onIonViewWillUnload(this);
    };
    return BasePage;
}());
export { BasePage };
//# sourceMappingURL=back.js.map