declare interface Date
{
  weekOfYear: () => number[];
  format: (fmt: string) => string;
  addDay: (day: number) => this;
  ONE_DAY: number;
}

function now(format?: string)
{
  return new Date().format(format || 'yyyy/MM/dd HH:mm:ss');
}

Date.prototype.ONE_DAY = 86400000;

// 周次
Date.prototype.weekOfYear = function() {
  const year = this.getFullYear();
  const d = new Date(this);
  d.setHours(0, 0, 0, 0);

  // 当年的第一天
  const yearStart = new Date(year, 0, 1);
  // 修正第一天周数的偏移量
  d.setDate(d.getDate() + yearStart.getDay());

  const deltaDay = (d.getTime() - yearStart.getTime()) / this.ONE_DAY + 1;
  const weekNo = Math.ceil(deltaDay / 7);

  return [year, weekNo];
};

Date.prototype.format = function(fmt: string) { // author: meizz
  const o = {
    'M+': this.getMonth() + 1,                                      // 月份
    'd+': this.getDate(),                                           // 日
    'h+': this.getHours() % 12 === 0 ? 12 : this.getHours() % 12,    // 小时
    'H+': this.getHours(),                                          // 小时
    'm+': this.getMinutes(),                                        // 分
    's+': this.getSeconds(),                                        // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3),                    // 季度
    S: this.getMilliseconds()                                     // 毫秒
  };

  // 年
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  // 星期
  if (/(E+)/.test(fmt)) {
    const week = ['日', '一', '二', '三', '四', '五', '六'];
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '星期' : '周') : '')
        + week[this.getDay() + '']);
  }

  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
};

Date.prototype.addDay = function(days: number) {
  this.setTime(this.getTime() + this.ONE_DAY * days);
  return this;
};
