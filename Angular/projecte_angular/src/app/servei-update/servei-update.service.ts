import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServeiUpdateService {
  constructor() {}

  private subjectName = new Subject<any>(); //need to create a subject
  private subjectName2 = new Subject<any>(); //need to create a subject
  private subjectName3 = new Subject<any>(); //need to create a subject


  sendUpdate(message: any) {
    //the component that wants to update something, calls this fn
    this.subjectName.next({ _rol: message}); //next() will feed the value in Subject
  }

  getUpdate(): Observable<any> {
    //the receiver component calls this function
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }

  sendUpdate2(msg: any) {
    //the component that wants to update something, calls this fn
    this.subjectName2.next({_user: msg }); //next() will feed the value in Subject
  }

  getUpdate2(): Observable<any> {
    //the receiver component calls this function
    return this.subjectName2.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }

  sendUpdate3(msg: any) {
    //the component that wants to update something, calls this fn
    this.subjectName3.next({ _success: msg}); //next() will feed the value in Subject
  }

  getUpdate3(): Observable<any> {
    //the receiver component calls this function
    return this.subjectName3.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }
}
