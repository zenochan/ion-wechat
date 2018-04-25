/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./app.module";
import * as i2 from "ionic-angular/components/app/app-root";
import * as i3 from "../../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory";
import * as i4 from "../../node_modules/ionic-angular/components/alert/alert-component.ngfactory";
import * as i5 from "../../node_modules/ionic-angular/components/app/app-root.ngfactory";
import * as i6 from "../../node_modules/ionic-angular/components/loading/loading-component.ngfactory";
import * as i7 from "../../node_modules/ionic-angular/components/modal/modal-component.ngfactory";
import * as i8 from "../../node_modules/ionic-angular/components/picker/picker-component.ngfactory";
import * as i9 from "../../node_modules/ionic-angular/components/popover/popover-component.ngfactory";
import * as i10 from "../../node_modules/ionic-angular/components/select/select-popover-component.ngfactory";
import * as i11 from "../../node_modules/ionic-angular/components/toast/toast-component.ngfactory";
import * as i12 from "./app.component.ngfactory";
import * as i13 from "../pages/home/home.ngfactory";
import * as i14 from "@angular/common";
import * as i15 from "@angular/platform-browser";
import * as i16 from "ionic-angular/gestures/gesture-config";
import * as i17 from "@angular/forms";
import * as i18 from "@angular/common/http";
import * as i19 from "ionic-angular/components/action-sheet/action-sheet-controller";
import * as i20 from "ionic-angular/components/app/app";
import * as i21 from "ionic-angular/config/config";
import * as i22 from "ionic-angular/util/form";
import * as i23 from "ionic-angular/tap-click/haptic";
import * as i24 from "ionic-angular/platform/platform";
import * as i25 from "ionic-angular/platform/keyboard";
import * as i26 from "ionic-angular/platform/dom-controller";
import * as i27 from "ionic-angular/module";
import * as i28 from "ionic-angular/navigation/url-serializer";
import * as i29 from "ionic-angular/navigation/deep-linker";
import * as i30 from "ionic-angular/util/module-loader";
import * as i31 from "ionic-angular/components/modal/modal-controller";
import * as i32 from "ionic-angular/components/picker/picker-controller";
import * as i33 from "ionic-angular/components/popover/popover-controller";
import * as i34 from "ionic-angular/tap-click/tap-click";
import * as i35 from "ionic-angular/gestures/gesture-controller";
import * as i36 from "ionic-angular/transitions/transition-controller";
import * as i37 from "@ionic-native/status-bar/index";
import * as i38 from "@ionic-native/splash-screen/index";
import * as i39 from "ionic-angular/util/ionic-error-handler";
import * as i40 from "ionic-angular/platform/platform-registry";
import * as i41 from "ionic-angular/components/app/menu-controller";
import * as i42 from "ionic-angular/util/ng-module-loader";
import * as i43 from "ionic-angular/config/mode-registry";
import * as i44 from "ionic-angular/util/events";
import * as i45 from "@ionic/storage/dist/index";
import * as i46 from "../providers/providers.module";
import * as i47 from "ionic-angular/components/loading/loading-controller";
import * as i48 from "ionic-angular/components/alert/alert-controller";
import * as i49 from "ionic-angular/components/toast/toast-controller";
import * as i50 from "../providers/weui.service";
import * as i51 from "@ionic/storage/dist/storage";
import * as i52 from "../providers/data.service";
import * as i53 from "../ion-wechat.module";
import * as i54 from "./app.component";
var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.IonicApp], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ActionSheetCmpNgFactory, i4.AlertCmpNgFactory, i5.IonicAppNgFactory, i6.LoadingCmpNgFactory, i7.ModalCmpNgFactory, i8.PickerCmpNgFactory, i9.PopoverCmpNgFactory, i10.SelectPopoverNgFactory, i11.ToastCmpNgFactory, i12.MyAppNgFactory, i13.HomePageNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵq, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i14.NgLocalization, i14.NgLocaleLocalization, [i0.LOCALE_ID, [2, i14.ɵa]]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵi, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵn, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵo, []), i0.ɵmpd(4608, i15.DomSanitizer, i15.ɵe, [i14.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i15.DomSanitizer]), i0.ɵmpd(4608, i15.HAMMER_GESTURE_CONFIG, i16.IonicGestureConfig, []), i0.ɵmpd(5120, i15.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i15.ɵDomEventsPlugin(p0_0, p0_1), new i15.ɵKeyEventsPlugin(p1_0), new i15.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i14.DOCUMENT, i0.NgZone, i14.DOCUMENT, i14.DOCUMENT, i15.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i15.EventManager, i15.EventManager, [i15.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i15.ɵDomSharedStylesHost, i15.ɵDomSharedStylesHost, [i14.DOCUMENT]), i0.ɵmpd(4608, i15.ɵDomRendererFactory2, i15.ɵDomRendererFactory2, [i15.EventManager, i15.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i15.ɵDomRendererFactory2]), i0.ɵmpd(6144, i15.ɵSharedStylesHost, null, [i15.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i15.Meta, i15.Meta, [i14.DOCUMENT]), i0.ɵmpd(4608, i15.Title, i15.Title, [i14.DOCUMENT]), i0.ɵmpd(4608, i17.ɵi, i17.ɵi, []), i0.ɵmpd(4608, i17.FormBuilder, i17.FormBuilder, []), i0.ɵmpd(4608, i18.HttpXsrfTokenExtractor, i18.ɵh, [i14.DOCUMENT, i0.PLATFORM_ID, i18.ɵf]), i0.ɵmpd(4608, i18.ɵi, i18.ɵi, [i18.HttpXsrfTokenExtractor, i18.ɵg]), i0.ɵmpd(5120, i18.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i18.ɵi]), i0.ɵmpd(4608, i18.ɵe, i18.ɵe, []), i0.ɵmpd(6144, i18.XhrFactory, null, [i18.ɵe]), i0.ɵmpd(4608, i18.HttpXhrBackend, i18.HttpXhrBackend, [i18.XhrFactory]), i0.ɵmpd(6144, i18.HttpBackend, null, [i18.HttpXhrBackend]), i0.ɵmpd(4608, i18.HttpHandler, i18.ɵc, [i18.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i18.HttpClient, i18.HttpClient, [i18.HttpHandler]), i0.ɵmpd(4608, i19.ActionSheetController, i19.ActionSheetController, [i20.App, i21.Config]), i0.ɵmpd(4608, i22.Form, i22.Form, []), i0.ɵmpd(4608, i23.Haptic, i23.Haptic, [i24.Platform]), i0.ɵmpd(4608, i25.Keyboard, i25.Keyboard, [i21.Config, i24.Platform, i0.NgZone, i26.DomController]), i0.ɵmpd(5120, i14.LocationStrategy, i27.provideLocationStrategy, [i14.PlatformLocation, [2, i14.APP_BASE_HREF], i21.Config]), i0.ɵmpd(4608, i14.Location, i14.Location, [i14.LocationStrategy]), i0.ɵmpd(5120, i28.UrlSerializer, i28.setupUrlSerializer, [i20.App, i28.DeepLinkConfigToken]), i0.ɵmpd(5120, i29.DeepLinker, i29.setupDeepLinker, [i20.App, i28.UrlSerializer, i14.Location, i30.ModuleLoader, i0.ComponentFactoryResolver]), i0.ɵmpd(4608, i31.ModalController, i31.ModalController, [i20.App, i21.Config, i29.DeepLinker]), i0.ɵmpd(4608, i32.PickerController, i32.PickerController, [i20.App, i21.Config]), i0.ɵmpd(4608, i33.PopoverController, i33.PopoverController, [i20.App, i21.Config, i29.DeepLinker]), i0.ɵmpd(4608, i34.TapClick, i34.TapClick, [i21.Config, i24.Platform, i26.DomController, i20.App, i35.GestureController]), i0.ɵmpd(4608, i36.TransitionController, i36.TransitionController, [i24.Platform, i21.Config]), i0.ɵmpd(4608, i37.StatusBar, i37.StatusBar, []), i0.ɵmpd(4608, i38.SplashScreen, i38.SplashScreen, []), i0.ɵmpd(512, i14.CommonModule, i14.CommonModule, []), i0.ɵmpd(512, i0.ErrorHandler, i39.IonicErrorHandler, []), i0.ɵmpd(256, i21.ConfigToken, null, []), i0.ɵmpd(1024, i40.PlatformConfigToken, i40.providePlatformConfigs, []), i0.ɵmpd(1024, i24.Platform, i24.setupPlatform, [i15.DOCUMENT, i40.PlatformConfigToken, i0.NgZone]), i0.ɵmpd(1024, i21.Config, i21.setupConfig, [i21.ConfigToken, i24.Platform]), i0.ɵmpd(512, i26.DomController, i26.DomController, [i24.Platform]), i0.ɵmpd(512, i41.MenuController, i41.MenuController, []), i0.ɵmpd(512, i20.App, i20.App, [i21.Config, i24.Platform, [2, i41.MenuController]]), i0.ɵmpd(512, i35.GestureController, i35.GestureController, [i20.App]), i0.ɵmpd(256, i28.DeepLinkConfigToken, null, []), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i42.NgModuleLoader, i42.NgModuleLoader, [i0.Compiler]), i0.ɵmpd(1024, i30.ModuleLoader, i30.provideModuleLoader, [i42.NgModuleLoader, i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [i15.ɵh(p0_0), i43.registerModeConfigs(p1_0), i44.setupProvideEvents(p2_0, p2_1), i34.setupTapClick(p3_0, p3_1, p3_2, p3_3, p3_4), i30.setupPreloading(p4_0, p4_1, p4_2, p4_3)]; }, [[2, i0.NgProbeToken], i21.Config, i24.Platform, i26.DomController, i21.Config, i24.Platform, i26.DomController, i20.App, i35.GestureController, i21.Config, i28.DeepLinkConfigToken, i30.ModuleLoader, i0.NgZone]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i15.BrowserModule, i15.BrowserModule, [[3, i15.BrowserModule]]), i0.ɵmpd(512, i17.ɵba, i17.ɵba, []), i0.ɵmpd(512, i17.FormsModule, i17.FormsModule, []), i0.ɵmpd(512, i17.ReactiveFormsModule, i17.ReactiveFormsModule, []), i0.ɵmpd(512, i27.IonicModule, i27.IonicModule, []), i0.ɵmpd(512, i18.HttpClientXsrfModule, i18.HttpClientXsrfModule, []), i0.ɵmpd(512, i18.HttpClientModule, i18.HttpClientModule, []), i0.ɵmpd(512, i45.IonicStorageModule, i45.IonicStorageModule, []), i0.ɵmpd(512, i46.IonWechatProvidersModule, i46.IonWechatProvidersModule, []), i0.ɵmpd(512, i47.LoadingController, i47.LoadingController, [i20.App, i21.Config]), i0.ɵmpd(512, i48.AlertController, i48.AlertController, [i20.App, i21.Config]), i0.ɵmpd(512, i49.ToastController, i49.ToastController, [i20.App, i21.Config]), i0.ɵmpd(512, i50.WeuiService, i50.WeuiService, [i47.LoadingController, i48.AlertController, i49.ToastController]), i0.ɵmpd(256, i51.StorageConfigToken, null, []), i0.ɵmpd(1024, i51.Storage, i51.provideStorage, [i51.StorageConfigToken]), i0.ɵmpd(512, i44.Events, i44.Events, []), i0.ɵmpd(512, i52.DataService, i52.DataService, [i51.Storage, i44.Events]), i0.ɵmpd(256, i53.CONFIG, { debug: true, userKey: "user", imgBaseUrl: "" }, []), i0.ɵmpd(512, i53.IonWechatModule, i53.IonWechatModule, [i50.WeuiService, i52.DataService, i44.Events, i53.CONFIG]), i0.ɵmpd(512, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i18.ɵf, "XSRF-TOKEN", []), i0.ɵmpd(256, i18.ɵg, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i2.AppRootToken, i54.MyApp, []), i0.ɵmpd(256, i14.APP_BASE_HREF, "/", [])]); });
export { AppModuleNgFactory as AppModuleNgFactory };
//# sourceMappingURL=app.module.ngfactory.js.map