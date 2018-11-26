/**
 * 处理分页UI
 */
var /**
 * 处理分页UI
 */
PageDelegate = /** @class */ (function () {
    function PageDelegate(refresh, loadMore) {
        this.refresh = refresh;
        this.loadMore = loadMore;
    }
    PageDelegate.prototype.onRefresh = function (refresher) {
        this.refresher = refresher;
        this.refresh();
    };
    PageDelegate.prototype.onLoadMore = function (infinite) {
        this.infinite = infinite;
        this.loadMore();
    };
    PageDelegate.prototype.complete = function () {
        if (this.refresher) {
            this.refresher.complete();
            this.refresher = null;
        }
        if (this.infinite) {
            this.infinite.complete();
            this.infinite = null;
        }
    };
    return PageDelegate;
}());
/**
 * 处理分页UI
 */
export { PageDelegate };
//# sourceMappingURL=page-delegate.js.map