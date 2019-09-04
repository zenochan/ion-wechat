import {Component} from '@angular/core';
import {DataService} from '../../../projects/ion-wechat/src/lib/service/data.service';
import {UI} from '../../../projects/ion-wechat/src/lib/ion-wechat.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage
{
  constructor(data: DataService)
  {
  }

  toast()
  {
    UI.toastShort('234', 'top');
  }

}
