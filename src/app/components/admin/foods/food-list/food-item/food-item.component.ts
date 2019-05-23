import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { SelectedFood, Food } from 'src/app/models/food.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
    private foodService: FoodService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  editFood() {
    this.router.navigate([`${this.index}${this.food.id}${this.food.name}1/edit`], {relativeTo: this.route});
  }



}
