import {Pipe, PipeTransform} from '@angular/core';
import "../extends.date";

/**
 * url | photo : 'yyyy-MM-dd' : 'default'
 */
@Pipe({
  name: 'zdate',
})
export class ZdatePipe implements PipeTransform
{
  transform(value: any, ...args)
  {
    if (!value || typeof value != "string") return "";
    // 屏蔽 php 。laravel 默认时间
    if (value.indexOf("1970-01-01") > -1 || value.indexOf("0000-00-00") > -1) value = null;
    if (!value) return args[1] || "";

    // compat HH:mm:ss
    if (value.length == 8 && value.indexOf(":") == 2 && value.lastIndexOf(":") == 5) {
      value = "2018/1/1 " + value;
    }

    value = value.replace(/-/g, "/");
    return new Date(Date.parse(value)).format(args[0] || "yyyy/MM/dd");
  }
}
