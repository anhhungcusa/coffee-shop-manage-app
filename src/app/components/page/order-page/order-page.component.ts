import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { FoodCategory } from 'src/app/models/food-category.model';
import { FoodService } from 'src/app/services/food.service';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { OrderService } from 'src/app/services/order.service';
import { EEmitterService } from 'src/app/services/e-emitter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
  providers: [EEmitterService]
})
export class OrderPageComponent implements OnInit {

  foods: Food[];
  foodCategories: FoodCategory[];
  isCustomer = true;
  onSeletedFood = false;


  constructor(
    private foodService: FoodService,
    private foodCategoryService: FoodCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.foodService.foods$
      .subscribe((data: Food[]) => this.foods = [...data]);
    this.foodCategoryService.foodCategories$
      .subscribe((data: FoodCategory[]) => {
        this.foodCategories = [...data];
      });
  }

  onReceive(event) {
    this.router.navigate(['../press-info'], {relativeTo: this.route});
  }

  onComeBack() {
    this.onSeletedFood = false;
    console.log(1)
  }
  showCart() {
    this.router.navigate(['../my-cart'], {relativeTo: this.route});
  }

}
