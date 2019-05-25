import { Component, OnInit, Input } from '@angular/core';
import { FoodCategory } from 'src/app/models/food-category.model';

@Component({
  selector: 'app-o-food-category-item',
  templateUrl: './o-food-category-item.component.html',
  styleUrls: ['./o-food-category-item.component.scss']
})
export class OFoodCategoryItemComponent implements OnInit {
  @Input() foodCategory: FoodCategory;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
