export declare class Cnzz {
    /**
     * 用于发送页面上按钮等交互元素被触发时的事件统计请求。如视频的“播放、暂停、调整音量”，页面上的“返回顶部”、“赞”、“收藏”等。也可用于发送Flash事件统计请求。
     *
     * @param category 表示事件发生在谁身上，如“视频”、“小说”、“轮显层”等等。
     * @param action 表示访客跟元素交互的行为动作，如"播放"、"收藏"、"翻层"等等。
     * @param label 用于更详细的描述事件，如具体是哪个视频，哪部小说。
     * @param value 用于填写打分型事件的分值，加载时间型事件的时长，订单型事件的价格。  请填写整数数值，如果填写为其他形式，系统将按0处理。若填写为浮点小数，系统会自动取整，去掉小数点。
     * @param nodeid  填写事件元素的div元素id。  请填写class id，暂不支持name。
     */
    static trackEvent(category: string, action: string, label?: string, value?: number, nodeid?: string): void;
    /**
     * 用于发送某个URL的PV统计请求，适用于统计AJAX、异步加载页面，友情链接，下载链接的流量。
     *
     * @param content_url 自定义虚拟PV页面的URL地址,填写以斜杠‘/’开头的相对路径，系统会自动补全域名
     * @param referer_url 自定义该受访页面的来源页URL地址,建议填写该异步加载页面的母页面。 不填，则来路按母页面的来路计算。 填为“空”，即""，则来路按“直接输入网址或书签”计算。
     */
    static trackPageView(content_url: string, referer_url?: string): void;
}
