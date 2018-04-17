export class PageData<T>
{
  data: Array<T>;

  current_page: number;
  last_page: number;
  total: number;
  per_page: number;
}