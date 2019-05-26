import { Component, OnInit, Input } from '@angular/core';
import { BillInfo } from 'src/app/models/bill.model';
import { OrderService } from 'src/app/services/order.service';
import { EEmitterService } from 'src/app/services/e-emitter.service';

@Component({
  selector: 'app-ordered-food-item',
  templateUrl: './ordered-food-item.component.html',
  styleUrls: ['./ordered-food-item.component.scss']

})
export class OrderedFoodItemComponent implements OnInit {
  @Input() orderedFoodItem: BillInfo;
  @Input() index: number;
  @Input() isCustomer: boolean;
  constructor(
    private eemitterService: EEmitterService
  ) { }

  ngOnInit() {

  }

  addFood() {
    this.orderedFoodItem.amount++;
  }

  deleteFood() {
    this.orderedFoodItem.amount--;
    if (this.orderedFoodItem.amount === 0) {
      // if (this.isCustomer) {
        // this.eemitterService.deletedFoodIndexForCusomer.emit(this.index);
      // } else{
        this.eemitterService.deletedFoodIndex.emit(this.index);
      // }
    }
  }
}
