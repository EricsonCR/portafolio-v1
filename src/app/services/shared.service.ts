import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private menuBS = new BehaviorSubject<string>("deafult");
  menu = this.menuBS.asObservable();

  updateMenu(value: string) {
    this.menuBS.next(value);
  }
}
