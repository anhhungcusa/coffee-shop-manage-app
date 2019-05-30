import { Component, OnInit } from '@angular/core';
import { OrderQueueService } from 'src/app/services/order-queue.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order-queue',
  templateUrl: './order-queue.component.html',
  styleUrls: ['./order-queue.component.scss']
})
export class OrderQueueComponent implements OnInit {

  orderList: any[];

  constructor(
    private orderQueueService: OrderQueueService,
  ) { }

  ngOnInit() {
    this.orderQueueService.queue$
      .subscribe(data => {
        this.orderList = [...data];
      });
    this.orderList = this.orderQueueService.queueDisplay;
  }
  remove(index: number) {
    this.orderList.splice(index, 1);
  }

}
