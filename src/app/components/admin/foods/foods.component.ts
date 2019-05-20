import { Component, OnInit } from '@angular/core';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {

  foods: Food[];

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit() {
    this.foodService.foods$.subscribe((data: Food[]) => {
      this.foods = data;
    })
  }

}
