import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
public notificationSubject = new BehaviorSubject<string>('Hello World');


  constructor() { }
   sendNotification(text:any){
    this.notificationSubject.next(text);
   }
}
