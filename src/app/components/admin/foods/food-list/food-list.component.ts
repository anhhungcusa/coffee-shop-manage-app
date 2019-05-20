import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  @Input() foods: Food[];
  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit() {

  }

}
