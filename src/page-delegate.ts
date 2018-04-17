import {InfiniteScroll, Refresher} from "ionic-angular";

/**
 * 处理分页UI
 */
export class PageDelegate
{
  infinite: InfiniteScroll;
  refresher: Refresher;

  constructor(private refresh?: () => void, private loadMore?: () => void)
  {

  }

  onRefresh(refresher?: Refresher)
  {
    this.refresher = refresher;
    this.refresh();
  }

  onLoadMore(infinite?: InfiniteScroll)
  {
    this.infinite = infinite;
    this.loadMore();
  }

  complete()
  {
    if (this.refresher) {
      this.refresher.complete();
      this.refresher = null;
    }

    if (this.infinite) {
      this.infinite.complete();
      this.infinite = null;
    }
  }
}