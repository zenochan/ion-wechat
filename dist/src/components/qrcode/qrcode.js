import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import * as QRCode from 'qrcode';
var QrcodeComponent = /** @class */ (function () {
    function QrcodeComponent(renderer) {
        this.renderer = renderer;
        this.elementType = 'img';
        this.cssClass = 'qrcode';
        this.value = '';
        this.version = '';
        this.errorCorrectionLevel = 'M';
        this.margin = 4;
        this.scale = 4;
        this.width = 10;
        this.colorDark = '#000000';
        this.colorLight = '#ffffff';
    }
    QrcodeComponent.prototype.ngOnChanges = function () {
        this.createQRCode();
    };
    QrcodeComponent.prototype.toDataURL = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toDataURL(_this.value, {
                version: _this.version,
                errorCorrectionLevel: _this.errorCorrectionLevel,
                margin: _this.margin,
                scale: _this.scale,
                width: _this.width,
                color: {
                    dark: _this.colorDark,
                    light: _this.colorLight
                }
            }, function (err, url) {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                else {
                    //console.log(url);
                    resolve(url);
                }
            });
        });
    };
    QrcodeComponent.prototype.toCanvas = function (canvas) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toCanvas(canvas, _this.value, {
                version: _this.version,
                errorCorrectionLevel: _this.errorCorrectionLevel,
                margin: _this.margin,
                scale: _this.scale,
                width: _this.width,
                color: {
                    dark: _this.colorDark,
                    light: _this.colorLight
                }
            }, function (error) {
                if (error) {
                    //console.error(error);
                    reject(error);
                }
                else {
                    //console.log('success!');
                    resolve("success");
                }
            });
        });
    };
    QrcodeComponent.prototype.renderElement = function (element) {
        for (var _i = 0, _a = this.qrcElement.nativeElement.childNodes; _i < _a.length; _i++) {
            var node = _a[_i];
            this.renderer.removeChild(this.qrcElement.nativeElement, node);
        }
        this.renderer.appendChild(this.qrcElement.nativeElement, element);
    };
    QrcodeComponent.prototype.createQRCode = function () {
        var _this = this;
        if (!this.value) {
            return;
        }
        var element;
        //console.log("QR Encoding " + this.value);
        switch (this.elementType) {
            case 'canvas':
                element = this.renderer.createElement('canvas');
                this.toCanvas(element).then(function (v) {
                    //console.log(v);
                    //console.log(v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
                break;
            case 'url':
            case 'img':
            default:
                element = this.renderer.createElement('img');
                this.toDataURL().then(function (v) {
                    //console.log(v);
                    element.setAttribute("src", v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
        }
    };
    QrcodeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'qrcode',
                    template: "\n    <div #qrcElement [class]=\"cssClass\"></div>"
                },] },
    ];
    /** @nocollapse */
    QrcodeComponent.ctorParameters = function () { return [
        { type: Renderer2, },
    ]; };
    QrcodeComponent.propDecorators = {
        "elementType": [{ type: Input, args: ['type',] },],
        "cssClass": [{ type: Input, args: ['qrc-class',] },],
        "value": [{ type: Input, args: ['value',] },],
        "version": [{ type: Input, args: ['version',] },],
        "errorCorrectionLevel": [{ type: Input, args: ['errorCorrectionLevel',] },],
        "margin": [{ type: Input, args: ['margin',] },],
        "scale": [{ type: Input, args: ['scale',] },],
        "width": [{ type: Input, args: ['width',] },],
        "colorDark": [{ type: Input, args: ['colorDark',] },],
        "colorLight": [{ type: Input, args: ['colorLight',] },],
        "qrcElement": [{ type: ViewChild, args: ['qrcElement',] },],
    };
    return QrcodeComponent;
}());
export { QrcodeComponent };
//# sourceMappingURL=qrcode.js.map