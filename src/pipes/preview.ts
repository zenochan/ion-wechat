import {Pipe, PipeTransform} from "@angular/core";
import {Observable} from "rxjs/Observable";

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
      let reader = new FileReader();
      reader.onload = event => {
        let result = (<any>event.target).result;
        subscriber.next(result);
        subscriber.complete();
      };
      reader.readAsDataURL(value);
    });
  }
}
