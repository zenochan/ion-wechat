import { PipeTransform } from "@angular/core";
import { Observable } from "rxjs/Observable";
/**
 * 选择上传的图片，图片文件预览
 *
 * <p>usage
 * <pre>[src]="file | preview | async"</pre>
 */
export declare class PreviewPipe implements PipeTransform {
    transform(value: any, ...args: any[]): Observable<{}>;
}
