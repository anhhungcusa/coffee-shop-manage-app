import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Observable } from 'rxjs';
import { AngularFireObject } from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderQueueService {

  static readonly OrderQueueKey = 'orderQueue';
  static readonly valueDefault = '#####';
  static readonly QueueKey = 'orderQueue/queue';
  static readonly QueueUrl = 'https://coffee-shop-manage-app.firebaseio.com/orderQueue/queue.json';
  private orderQueue: AngularFireObject<any>;
  private queue: AngularFireObject<any>;

  isOpen = false;
  orderQueue$: Observable<any>;
  queue$: Observable<any>;
  constructor(
    private dataStorageService: DataStorageService,
    private http: HttpClient

  ) {
    this.orderQueue = this.dataStorageService.getobjectData(OrderQueueService.OrderQueueKey);
    this.orderQueue$ = this.orderQueue.valueChanges();
    this.orderQueue$.subscribe( data => {
      this.isOpen = data.status.isOpen;
    });


    this.queue = this.dataStorageService.getobjectData(OrderQueueService.QueueKey);
    this.queue$ = this.queue.valueChanges();
    this.queue$.subscribe( data => {

    });
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

     this.http.post(OrderQueueService.QueueUrl, order, httpOptions).subscribe(data => console.log(data));
  }
   calculateTotalPrice(list) {
    return list.reduce((acc, curr) => {
      return acc + curr.food.price * curr.amount;
    }, 0);
  }

}
