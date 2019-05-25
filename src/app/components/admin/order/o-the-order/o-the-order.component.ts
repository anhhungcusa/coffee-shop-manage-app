import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { BillInfo } from 'src/app/models/bill.model';
import { Food } from 'src/app/models/food.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-o-the-order',
  templateUrl: './o-the-order.component.html',
  styleUrls: ['./o-the-order.component.scss']
})
export class OTheOrderComponent implements OnInit, OnChanges, DoCheck  {
  orderdFoodList: BillInfo[] = [];
  totalPrice = 0;
  btnBan = true;
  constructor(
    private orderService: OrderService
  ) {

    this.orderService.selectedFood
      .subscribe((data: Food) => {
        let isHas = false;
        let loopStop = false;
        this.orderdFoodList.forEach(item => {
          if (loopStop) { return; }
          if (item.food.id === data.id) {
            item.amount += 1;
            isHas = true;
            loopStop = true;
            return;
          }
        });
        if (!isHas) {
          const newBillInfo = new BillInfo(data);
          this.orderdFoodList.push(newBillInfo);
        }
      });
    this.orderService.deletedFoodIndex
      .subscribe((data: number) => {
        this.orderdFoodList.splice(data, 1);
      })
  }

  private calculateFood() {
    this.totalPrice = this.orderdFoodList.reduce((acc, curr) => {
      return acc + curr.food.price * curr.amount;
    }, 0);
  }
  pay() {
    if (this.totalPrice > 0) {
      this.orderService.creatBill(this.orderdFoodList, true, this.totalPrice);
      this.orderdFoodList = [];
    } else {
      console.log('chua co don hang');
    }
  }


  ngOnChanges() {
  }

  ngOnInit() {

  }

  ngDoCheck() {
    this.calculateFood();
    this.btnBan = (this.totalPrice > 0) ? false : true;
  }






}
