import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Observable } from 'rxjs';
import { AngularFireObject } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderQueueService {

  static readonly OrderQueueKey = 'orderQueue';
  static readonly valueDefault = '#####';
  static readonly QueueKey = 'orderQueue/queue';
  static readonly QueueUrl = 'https://coffee-shop-manage-app.firebaseio.com/orderQueue/queue';
  private orderQueueFireObjec: AngularFireObject<any>;
  private queueFireObject: AngularFireObject<any>;
  private queue: any;

  queueDisplay: any;
  isOpen = false;
  orderQueue$: Observable<any>;
  queue$: Observable<any>;
  constructor(
    private dataStorageService: DataStorageService,
    private http: HttpClient

  ) {
    this.orderQueueFireObjec = this.dataStorageService.getobjectData(OrderQueueService.OrderQueueKey);
    this.orderQueue$ = this.orderQueueFireObjec.valueChanges();
    this.orderQueue$.subscribe( data => {
      this.isOpen = data.status.isOpen;
      this.queue = data.queue;
    });


    this.queueFireObject = this.dataStorageService.getobjectData(OrderQueueService.QueueKey);
    this.queue$ = this.queueFireObject.valueChanges().pipe(
      map(data => Object.keys(data).map(value => [value, data[value]])
    ));
    this.queue$.subscribe( data =>   this.queueDisplay = data);

  }

  addOrdertoQueue(value: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const tmp = {
      createDate: `${new Date()}`,
      isPaid: false,
    };
    const order = Object.assign(tmp, value);

    this.http.post(`${OrderQueueService.QueueUrl}.json`, order, httpOptions).subscribe(data => console.log(data));
  }
   calculateTotalPrice(list) {
    return list.reduce((acc, curr) => {
      return acc + curr.food.price * curr.amount;
    }, 0);
  }

  getValue(id: string) {
    return new Promise((resolve, reject) => {
      if (this.queue) {
        resolve(this.queue[id]);
      } else {
        let count = 0;
        const interval = setInterval(() =>{
          count += 1;
          try {
           resolve(this.queue[id]);
          } catch (error) {
            console.log('dang load thoi doi 1 ty')
          }

          if (this.queue || count > 20) {
           clearInterval(interval);
          }
         }, 500);
       //  reject('chua load xong');
      }
    })
  }

  removeObj(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.delete(`${OrderQueueService.QueueUrl}/${id}.json`, httpOptions).subscribe(data => console.log(data));
  }

}
