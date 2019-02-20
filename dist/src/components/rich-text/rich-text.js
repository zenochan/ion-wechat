import { Component, Input } from '@angular/core';
import { Wechat } from "../../providers/wechat";
// import {Wechat} from "../../providers/wechat";
/**
 * 实现微信浏览器内点击预览
 */
var RichTextComponent = /** @class */ (function () {
    function RichTextComponent() {
        this._html = "";
    }
    Object.defineProperty(RichTextComponent.prototype, "src", {
        get: function () {
            return this._html;
        },
        set: function (html) {
            var _this = this;
            this._html = html;
            this.imgUrls = [];
            html.replace(/<img src=['"]([^['"]+)['"]/g, function (a, url) {
                _this.imgUrls.push(url);
                return a;
            });
        },
        enumerable: true,
        configurable: true
    });
    RichTextComponent.prototype.click = function ($event) {
        var target = $event.target || $event.srcElement;
        if (target.tagName.toLowerCase() != "img") {
            return;
        }
        var src = target.src;
        try {
            Wechat.previewImage(this.imgUrls, src);
        }
        catch (e) {
            console.error("微信预览失败", e);
        }
    };
    RichTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rich-text',
                    styles: [
                        "rich-text {\n      display: block\n    }",
                        "rich-text img {\n      display: block;\n      width: 100%;\n    }"
                    ],
                    template: "\n    <div [innerHTML]=\"_html |sanitizer:'HTML'\" (click)=\"click($event)\"></div>\n  "
                },] },
    ];
    /** @nocollapse */
    RichTextComponent.ctorParameters = function () { return []; };
    RichTextComponent.propDecorators = {
        "src": [{ type: Input },],
    };
    return RichTextComponent;
}());
export { RichTextComponent };
//# sourceMappingURL=rich-text.js.map