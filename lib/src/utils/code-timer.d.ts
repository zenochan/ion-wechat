export declare class CodeTimer {
    type: string;
    wait: number;
    /**
     * 等待间隔(s)，默认60
     * @type {number}
     */
    during: number;
    constructor(type?: string);
    intoWait(): void;
    /**
     * 在 ionWillUnload 方法中调用
     */
    saveStatus(): void;
}
