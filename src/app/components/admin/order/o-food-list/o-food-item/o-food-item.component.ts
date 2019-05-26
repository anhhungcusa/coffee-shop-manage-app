import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { OrderService } from 'src/app/services/order.service';
import { EEmitterService } from 'src/app/services/e-emitter.service';

@Component({
  selector: 'app-o-food-item',
  templateUrl: './o-food-item.component.html',
  styleUrls: ['./o-food-item.component.scss'],

})
export class OFoodItemComponent implements OnInit {
  @Input() food: Food;
  @Input() index: number;
  @Input() isCustomer: boolean;

  constructor(
    private eemitterService: EEmitterService
  ) {

  }

  ngOnInit() {
  }

  addFood() {
    // if (this.isCustomer) {
      // this.eemitterService.selectedFoodForCusomer.emit(this.food);
      // console.log(1);

    // } else {
      this.eemitterService.selectedFood.emit(this.food);
    // }
  }

}
