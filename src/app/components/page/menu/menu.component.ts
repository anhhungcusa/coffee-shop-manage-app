import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { FoodCategory } from 'src/app/models/food-category.model';
import { FoodService } from 'src/app/services/food.service';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { OrderService } from 'src/app/services/order.service';
import { EEmitterService } from 'src/app/services/e-emitter.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [EEmitterService]
})
export class MenuComponent implements OnInit {
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
