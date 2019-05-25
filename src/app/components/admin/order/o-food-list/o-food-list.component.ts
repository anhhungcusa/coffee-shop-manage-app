import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food.model';

@Component({
  selector: 'app-o-food-list',
  templateUrl: './o-food-list.component.html',
  styleUrls: ['./o-food-list.component.scss']
})
export class OFoodListComponent implements OnInit {

  @Input() foods: Food[];
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
