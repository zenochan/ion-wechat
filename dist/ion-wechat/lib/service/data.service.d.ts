import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
export declare class DataService {
    storage: Storage;
    events: Events;
    static KEY_USER: string;
    private user;
    constructor(storage: Storage, events: Events);
    setUser(user: any): Promise<any>;
    getUser(): Promise<any>;
    getUserSync(): any;
    get(key: string): Promise<any>;
    set(key: string, value: any): Promise<any>;
    doOnUserReady(action: (user: any) => void, event?: string): void;
}
