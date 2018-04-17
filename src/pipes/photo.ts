import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'photo'})
export class Photo implements PipeTransform
{
  public static BASE_URL = "";

  transform(value, width, height)
  {
    return transPhoto(value, width, height);
  }
}

export function transPhoto(value, width?, height?)
{
  if (!value) {
    return "";
  }

  let p = value + "";

  if (p.indexOf('http') == 0) return p;

  let cdnPrefix = Photo.BASE_URL;

  let url = cdnPrefix + p;
  if (width) {
    url += '?imageView2/2/w/' + width;
    if (height) {
      url += '/h/' + height;
    }
  }
  return url;
}
