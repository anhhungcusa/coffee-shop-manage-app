import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { FoodCategory } from 'src/app/models/food-category.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  @Input() foods: Food[];
  foodCategories: FoodCategory[];
  constructor(
    private foodService: FoodService,
    private foodCategoryService: FoodCategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.foodCategoryService.foodCategories$
      .subscribe((data: FoodCategory[]) => {
        this.foodCategories = [...data];
      });
  }

  addFood() {
  }

}
