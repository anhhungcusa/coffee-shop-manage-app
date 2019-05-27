import { Component, OnInit, OnChanges, DoCheck, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { BillInfo } from 'src/app/models/bill.model';
import { Food } from 'src/app/models/food.model';
import { OrderService } from 'src/app/services/order.service';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { EEmitterService } from 'src/app/services/e-emitter.service';
import { OrderQueueService } from 'src/app/services/order-queue.service';


@Component({
  selector: 'app-o-the-order',
  templateUrl: './o-the-order.component.html',
  styleUrls: ['./o-the-order.component.scss']

})
export class OTheOrderComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() isCustomer = false;

  @Output() orderdFoodListEmitter: EventEmitter<BillInfo[]> = new EventEmitter<BillInfo[]>();
  orderdFoodList: BillInfo[];
  totalPrice = 0;
  btnBan = true;
  isOpen = null;


  constructor(
    private eemitterService: EEmitterService,
    private orderService: OrderService,
    private orderQueue: OrderQueueService
  ) { }
  ngOnChanges() {
  }
  ngOnInit() {
    if (this.isCustomer) {
      this.orderdFoodList = this.orderService.orderdFoodListForCusomer;
      // this.subscribe(this.eemitterService.selectedFoodForCusomer,
      //   this.eemitterService.deletedFoodIndexForCusomer);
      // this.unsubscribe(this.orderService.selectedFood,
      //                 this.orderService.deletedFoodIndex);
    } else {
      this.orderdFoodList = this.orderService.orderdFoodList;
      // this.subscribe(this.eemitterService.selectedFood,
      //                this.eemitterService.deletedFoodIndex);
      // this.unsubscribe(this.orderService.selectedFoodForCusomer,
      //                this.orderService.deletedFoodIndexForCusomer);
    }
    this.isOpen = this.orderQueue.isOpen;
    this.subscribe(this.eemitterService.selectedFood,
      this.eemitterService.deletedFoodIndex);
    this.orderQueue.orderQueue$.subscribe( data => {
      this.isOpen = data.status.isOpen;
    });
    this.isOpen = this.orderQueue.isOpen;
    console.log(this.isOpen)
  }
  ngDoCheck() {
    this.calculateTotalPrice();
    this.btnBan = (this.totalPrice > 0) ? false : true;
  }
  ngOnDestroy() {
    // if(this.isCustomer) {
      // this.unsubscribe(this.eemitterService.selectedFood,
      //   this.eemitterService.deletedFoodIndex);
    // } else {
    //   this.unsubscribe(this.orderService.selectedFoodForCusomer,
    //     this.orderService.deletedFoodIndexForCusomer);
    // }
    // this.eemitterService.selectedFood.complete();

  }

  pay() {
    if (!this.btnBan) {
      if (this.isCustomer) {
        if (this.isOpen) {
          this.orderdFoodListEmitter.emit(this.orderdFoodList);
        }
        // this.orderService.orderdFoodListForCusomer = [];
        // this.orderdFoodList = this.orderService.orderdFoodListForCusomer;
      } else {
        this.orderService.creatBill(this.orderdFoodList, true, this.totalPrice);
        this.orderService.orderdFoodList = [];
        this.orderdFoodList = this.orderService.orderdFoodList;
      }
    } else {
      console.log('chua co don hang');
    }
  }

  private calculateTotalPrice() {
    this.totalPrice = this.orderdFoodList.reduce((acc, curr) => {
      return acc + curr.food.price * curr.amount;
    }, 0);
  }
  private unsubscribe(seletedEmitter, indexEmitter) {
    seletedEmitter.unsubscribe();
    indexEmitter.unsubscribe();
  }
  private subscribe(seletedEmitter, indexEmitter) {
    seletedEmitter
      .subscribe((data: Food) => {
        let isHas = false;
        let loopStop = false;
        this.orderdFoodList.forEach(item => {
          if (loopStop) {
            return;
          }
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
    indexEmitter
      .subscribe((data: number) => {
        this.orderdFoodList.splice(data, 1);
      });
  }



}
