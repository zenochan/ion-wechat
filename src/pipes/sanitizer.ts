import {Injectable, Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({name: 'sanitizer'})
@Injectable()
export class Sanitizer implements PipeTransform
{
  SecurityContextMap: any = {NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5};

  constructor(public sanitiser: DomSanitizer) { }

  transform(value, args)
  {
    let res;
    value = value + '';

    let context = this.SecurityContextMap.STYLE;
    if (args && typeof args == "string" && this.SecurityContextMap.hasOwnProperty(args.toUpperCase())) {
      context = this.SecurityContextMap[args.toUpperCase()];
    }

    switch (context) {
      case this.SecurityContextMap.HTML:
        res = this.sanitiser.bypassSecurityTrustHtml(value);
        break;
      default:
        res = this.sanitiser.sanitize(context, value);
        break;
    }

    return res;
  }

}
