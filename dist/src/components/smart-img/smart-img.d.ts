export declare class SmartImgComponent {
    enablePreview: boolean;
    src: string;
    /**
     *  0 AspectFill 拉伸
     *  1 ScaleToFill 完整显示在中间
     *  2 AspectFit 裁剪中间
     * @type {0|1|2}
     */
    mode: 0 | 1 | 2;
    constructor();
    preview($event: any): void;
}
