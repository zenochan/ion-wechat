// import {Pipe, PipeTransform} from "@angular/core";
// import {Observable} from "rxjs/Observable";

import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';

/**
 * 选择上传的图片，图片文件预览
 *
 * <p>usage
 * <pre>[src]="file | preview | async"</pre>
 */
@Pipe({name: 'preview'})
export class PreviewPipe implements PipeTransform
{
  transform(value: any, ...args)
  {
    return new Observable(subscriber => {
      const reader = new FileReader();
      reader.onload = event => {
        const result = (event.target as any).result;
        subscriber.next(result);
        subscriber.complete();
      };
      reader.readAsDataURL(value);
    });
  }
}
