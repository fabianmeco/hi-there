import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()

export class ChangeChatService{
    private subject = new Subject<any>();

    onNotifyChange(id:string){
        this.subject.next({id: id})    
    }

    onGetNotification(): Observable<any>{
        return this.subject.asObservable();
    }
}