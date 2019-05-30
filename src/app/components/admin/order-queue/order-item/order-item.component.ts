import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderQueueService } from 'src/app/services/order-queue.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() order: any = null;
  @Input() id: any = null;
  @Input() stt: number;
  @Output() indexEmitter: EventEmitter<number> = new EventEmitter<number>();
  amount: number;

  constructor(
    private orderService: OrderService,
    private orderQueueService: OrderQueueService
  ) { }

  ngOnInit() {
    this.amount = this.order.orderedFoodList.reduce( (acc,curr) => acc + curr.amount, 0);
  }

  accept() {
    this.orderService.creatBill(
      this.order.orderedFoodList,
      true, this.order.priceTotal,
      this.order.deliverAddress,
      OrderService.valueDefault,
      OrderService.valueDefault,
      this.order.receiverName,
      this.order.receiverPhoneNumber);
    this.orderQueueService.removeObj(this.id);
    this.indexEmitter.emit(this.stt);
  }

  reject() {
    this.orderQueueService.removeObj(this.id);
    this.indexEmitter.emit(this.stt);
  }

}
