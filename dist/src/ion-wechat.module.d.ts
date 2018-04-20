export declare class IonWechatModule {
    static DEBUG: boolean;
    static forRoot(options: Options): typeof IonWechatModule;
}
export declare class Options {
    debug: boolean;
    /**
     * 存放用户的 key
     */
    userKey: string;
    imgBaseUrl: string;
}
