import { Component, OnInit, Input } from '@angular/core';
import { BillInfo } from 'src/app/models/bill.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-ordered-food-item',
  templateUrl: './ordered-food-item.component.html',
  styleUrls: ['./ordered-food-item.component.scss']
})
export class OrderedFoodItemComponent implements OnInit {
  @Input() orderedFoodItem: BillInfo;
  @Input() index: number;
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {

  }

  addFood() {
    this.orderedFoodItem.amount++;
  }

  deleteFood() {
    this.orderedFoodItem.amount--;
    if (this.orderedFoodItem.amount === 0) {
      this.orderService.deletedFoodIndex.emit(this.index);
    }
  }
}
