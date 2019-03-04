import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Storage} from "@ionic/storage";
import {Events} from "ionic-angular";


let ENV = {DEBUG: false};

/*
 Generated class for the DataService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class DataService
{

  static KEY_USER: string = 'user';
  private user: any;

  constructor(public storage: Storage, public events: Events)
  {
    this.getUser().then(user => {
      if (this.user) this.events.publish("user:ready", this.user)
    }).catch();
  }

  setUser(user: any)
  {
    console.warn("set user");
    this.user = user;
    if (this.user) {
      // *m/7d 有效期
      // this.user.expiresIn = Date.now() + (ENV.DEBUG ? 600000 : 86400000 * 30);
      this.user.expiresIn = Date.now() + (ENV.DEBUG ? 1000 : 86400000 * 7);
      this.events.publish("user:ready", this.user)
    }
    this.storage.set(DataService.KEY_USER, user);
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
    return this.storage.get(key)
  }

  set(key: string, value: any): Promise<any>
  {
    return this.storage.set(key, value);
  }

  doOnUserReady(action: (user: any) => void, event: string = "user:ready")
  {
    this.getUser().then(user => {
      this.user = this.user || user;
      if (this.user) {
        action(this.user);
        console.warn("user ready");
      } else {
        let handler = (user) => {
          action(user);
          this.events.unsubscribe(event, handler)
        };
        this.events.subscribe(event, handler);
        console.warn("user no ready");
      }
    });
  }

}
