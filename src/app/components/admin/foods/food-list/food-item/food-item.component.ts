import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { SelectedFood, Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit {

  @Input() food: Food;
  @Input() index: number;

  isSelledMap: any = {true: 'còn', false: 'dừng'};

  selectedFood: SelectedFood;

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit() {
  }

  onSelectItem() {
    this.foodService.selectedFoodEmitter.emit( new SelectedFood(this.food, this.index));
  }

}
