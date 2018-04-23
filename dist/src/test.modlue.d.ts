import { InjectionToken, ModuleWithProviders } from '@angular/core';
export declare const DA_TEST: InjectionToken<{}>;
export declare class TestModule {
    static DEBUG: boolean;
    static forRoot(options: string): ModuleWithProviders;
}
