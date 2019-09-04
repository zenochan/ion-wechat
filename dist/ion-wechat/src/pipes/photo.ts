import {ElementRef, Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'photo'})
export class Photo implements PipeTransform
{
  public static BASE_URL = '';

  constructor(private el: ElementRef)
  {
  }

  transform(value, width?, height?)
  {
    return transPhoto(value, width, height);
  }
}

export function transPhoto(value, width?, height?)
{
  if (!value) {
    return '';
  }

  const p = value + '';

  if (p.indexOf('http') === 0) { return p; }

  const cdnPrefix = Photo.BASE_URL;

  let url = cdnPrefix + p;
  if (width) {
    url += '?imageView2/2/w/' + width;
    if (height) {
      url += '/h/' + height;
    }
  }
  return url;
}
