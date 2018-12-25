import { InfiniteScroll, Refresher } from "ionic-angular";
/**
 * 处理分页UI
 */
export declare class PageDelegate {
    private refresh;
    private loadMore;
    infinite: InfiniteScroll;
    refresher: Refresher;
    constructor(refresh?: () => void, loadMore?: () => void);
    onRefresh(refresher?: Refresher): void;
    onLoadMore(infinite?: InfiniteScroll): void;
    complete(): void;
}
