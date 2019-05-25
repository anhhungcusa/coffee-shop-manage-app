import { Component, OnInit, Input } from '@angular/core';
import { FoodCategory } from 'src/app/models/food-category.model';

@Component({
  selector: 'app-o-food-categories',
  templateUrl: './o-food-categories.component.html',
  styleUrls: ['./o-food-categories.component.scss']
})
export class OFoodCategoriesComponent implements OnInit {

  @Input() foodCategories: FoodCategory[];

  constructor() { }

  ngOnInit() {
  }

}
