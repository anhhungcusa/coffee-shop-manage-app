import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodCategory, SelectedFoodCategory } from 'src/app/models/food-category.model';
import { FoodCategoryService } from 'src/app/services/food-category.service';

@Component({
  selector: 'app-food-category-item',
  templateUrl: './food-category-item.component.html',
  styleUrls: ['./food-category-item.component.scss']
})
export class FoodCategoryItemComponent implements OnInit {
  @Input() index: number;
  @Input() foodCategory: FoodCategory;
  statusFoodCategoryMap: any = {true: 'mở.', false: 'đóng.'};


  constructor( private foodCategoryService: FoodCategoryService ) {
    console.log()
  }

  ngOnInit() {
  }

  onSelectItem() {
    this.foodCategoryService.selectedFoodCategoryEmitter.emit(new SelectedFoodCategory(this.foodCategory, this.index));
  }

}
