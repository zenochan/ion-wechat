import { Data } from "../ion-wechat.module";
var CodeTimer = /** @class */ (function () {
    function CodeTimer(type) {
        if (type === void 0) { type = "code"; }
        var _this = this;
        this.type = type;
        this.wait = 0;
        /**
           * 等待间隔(s)，默认60
           * @type {number}
           */
        this.during = 60;
        Data.get("code:wait:" + this.type).then(function (wait) {
            if (!wait)
                return;
            var remain = (wait - new Date().getTime()) / 1000 | 0;
            if (remain > 0) {
                _this.wait = remain;
                _this.intoWait();
            }
        });
    }
    // 进入等待
    // 进入等待
    CodeTimer.prototype.intoWait = 
    // 进入等待
    function () {
        var _this = this;
        if (this.wait == 0)
            this.wait = 60;
        setTimeout(function () {
            _this.wait--;
            if (_this.wait > 0) {
                _this.intoWait();
            }
        }, 1000);
    };
    /**
     * 在 ionWillUnload 方法中调用
     */
    /**
       * 在 ionWillUnload 方法中调用
       */
    CodeTimer.prototype.saveStatus = /**
       * 在 ionWillUnload 方法中调用
       */
    function () {
        Data.set("code:wait:" + this.type, new Date().getTime() + this.wait * 1000).then();
    };
    return CodeTimer;
}());
export { CodeTimer };
//# sourceMappingURL=code-timer.js.map