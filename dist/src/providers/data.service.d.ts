import "rxjs/add/operator/map";
import { Storage } from "@ionic/storage";
import { Events } from "ionic-angular";
export declare class DataService {
    storage: Storage;
    events: Events;
    static KEY_USER: string;
    private user;
    constructor(storage: Storage, events: Events);
    setUser(user: any): void;
    getUser(): Promise<any>;
    getUserSync(): any;
    get(key: string): Promise<any>;
    set(key: string, value: any): Promise<any>;
    doOnUserReady(action: (user: any) => void, event?: string): void;
}
