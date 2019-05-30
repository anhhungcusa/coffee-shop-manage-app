import { Component, OnInit } from '@angular/core';
import { OrderQueueService } from 'src/app/services/order-queue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order: any = [];
  amount: number;
  id: any;
  constructor(
    private orderQueueService: OrderQueueService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = data.id;
      this.orderQueueService.getValue(data.id).then( data => {
        this.order = data;
        this.amount = this.order.orderedFoodList.reduce( (acc, curr) => acc + curr.amount, 0);
      });
    });


  }

}
