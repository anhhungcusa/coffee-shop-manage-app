import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  static readonly appDataKey = 'https://coffee-shop-manage-app.firebaseio.com/.json';
  constructor(
    private db: AngularFireDatabase
  ) { }


  getData<T>(key: string) {
    return this.db.list<T>(key);
  }

  addObject(firebaseList: AngularFireList<any>, key: string, value: any) {
    return firebaseList.update(key, value)
    .then(data => console.log('success: ', data))
    .catch(err => console.log('err :', err));
  }

  updateObject(firebaseList: AngularFireList<any>, key: string, value: any) {
    return firebaseList.update(key, value)
    .then(data => console.log('success: ', data))
    .catch(err => console.log('err :', err));
  }

}
