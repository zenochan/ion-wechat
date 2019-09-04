import {Injectable} from '@angular/core';
import {Events} from '@ionic/angular';
import {IonWechatModule} from '../ion-wechat.module';
import {Storage} from '@ionic/storage';
import {Wechat} from '../wechat';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService
{
  static KEY_USER = 'user';
  private user: any;

  constructor(public storage: Storage, public events: Events)
  {
    this.getUser().then(user => {
      if (this.user) {
        this.events.publish('user:ready', this.user);
      }
    }).catch();

    if (Wechat.getUrlParam('clear')) {
      storage.clear().then(res => location.replace(location.href.split('?')[0]));
    }
  }


  setUser(user: any): Promise<any>
  {
    console.warn('set user');
    this.user = user;
    if (this.user) {
      // *m/7d 有效期
      // this.user.expiresIn = Date.now() + (ENV.DEBUG ? 600000 : 86400000 * 30);
      this.user.expiresIn = Date.now() + (IonWechatModule.ENV.debug ? 1000 : 86400000 * 7);
      this.events.publish('user:ready', this.user);
    }
    return this.storage.set(DataService.KEY_USER, user);
  }

  getUser(): Promise<any>
  {
    if (this.user) {
      return Promise.resolve(this.user);
    } else {
      return this.storage.get(DataService.KEY_USER)
          .then(user => {
            if (user && user.expiresIn < Date.now()) {
              this.storage.remove(DataService.KEY_USER);
              return null;
            }
            this.user = user;
            return this.user;
          });
    }
  }

  getUserSync(): any
  {
    return this.user;
  }

  get(key: string): Promise<any>
  {
    return this.storage.get(key);
  }

  set(key: string, value: any): Promise<any>
  {
    return this.storage.set(key, value);
  }

  doOnUserReady(action: (user: any) => void, event: string = 'user:ready')
  {
    this.getUser().then(user => {
      this.user = this.user || user;
      if (this.user) {
        action(this.user);
        console.warn('user ready');
      } else {
        const handler = (res) => {
          action(res);
          this.events.unsubscribe(event, handler);
        };
        this.events.subscribe(event, handler);
        console.warn('user no ready');
      }
    });
  }

}
