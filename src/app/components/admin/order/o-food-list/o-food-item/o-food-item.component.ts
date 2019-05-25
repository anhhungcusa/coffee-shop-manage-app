import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-o-food-item',
  templateUrl: './o-food-item.component.html',
  styleUrls: ['./o-food-item.component.scss']
})
export class OFoodItemComponent implements OnInit {
  @Input() food: Food;
  @Input() index: number;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  addFood() {
    this.orderService.selectedFood.emit(this.food);
  }

}
