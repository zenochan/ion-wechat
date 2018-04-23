var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { InjectionToken, NgModule } from '@angular/core';
export var DA_TEST = new InjectionToken("IonWechatConfig");
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule_1 = TestModule;
    // constructor(ui: WeuiService, data: DataService, events: Events, @Inject(CONFIG) options: Options)
    // {
    //   IonWechatModule.DEBUG = options.debug;
    //   Photo.BASE_URL = options.imgBaseUrl;
    //
    //   UI = ui;
    //   Data = data;
    //   IonEvent = events;
    // }
    TestModule.forRoot = function (options) {
        return {
            ngModule: TestModule_1,
            providers: [
                { provide: DA_TEST, useValue: options },
            ]
        };
    };
    TestModule.DEBUG = false;
    TestModule = TestModule_1 = __decorate([
        NgModule({
            imports: []
        })
    ], TestModule);
    return TestModule;
    var TestModule_1;
}());
export { TestModule };
//# sourceMappingURL=test.modlue.js.map