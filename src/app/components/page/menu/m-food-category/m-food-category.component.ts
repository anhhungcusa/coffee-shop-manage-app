import { Component, OnInit, Input } from '@angular/core';
import { FoodCategory } from 'src/app/models/food-category.model';

@Component({
  selector: 'app-m-food-category',
  templateUrl: './m-food-category.component.html',
  styleUrls: ['./m-food-category.component.scss']
})
export class MFoodCategoryComponent implements OnInit {
  @Input() foodCategory: FoodCategory;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
