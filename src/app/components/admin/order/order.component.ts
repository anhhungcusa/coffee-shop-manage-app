import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { Food } from 'src/app/models/food.model';
import { FoodCategory } from 'src/app/models/food-category.model';
import { OrderService } from 'src/app/services/order.service';
import { BillInfo } from 'src/app/models/bill.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  foods: Food[];
  foodCategories: FoodCategory[];


  constructor(
    private foodService: FoodService,
    private foodCategoryService: FoodCategoryService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.foodService.foods$
      .subscribe((data: Food[]) => this.foods = [...data]);
    this.foodCategoryService.foodCategories$
      .subscribe((data: FoodCategory[]) => {
        this.foodCategories = [...data];
      });

  }

}
