import { Component, OnInit } from '@angular/core';
import { FoodCategoryService } from 'src/app/services/food-category.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {

  constructor(private foodCategoryService: FoodCategoryService) { }

  ngOnInit() {
  }

}
