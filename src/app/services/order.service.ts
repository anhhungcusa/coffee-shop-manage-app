import { Injectable, EventEmitter } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { FoodService } from './food.service';
import { FoodCategoryService } from './food-category.service';
import { Food } from '../models/food.model';
import { FoodCategory } from '../models/food-category.model';
import { BillInfo, Bill } from '../models/bill.model';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  static readonly OrderStorageKey = 'bills';
  static readonly valueDefault = '#####';
  private bills: AngularFireList<Bill>;
  private length: number;


  bills$: Observable<Bill[]>;
  orderdFoodList: BillInfo[] = [];
  orderdFoodListForCusomer: BillInfo[] = [];
  foods: Food[];
  foodCategories: FoodCategory[];
  groupFood: any[];


  constructor(
    private dataStorageService: DataStorageService,
    private foodService: FoodService,
    private foodCategoryService: FoodCategoryService
  ) {
    this.bills = this.dataStorageService.getData<Bill>(OrderService.OrderStorageKey);
    this.bills$ = this.bills.valueChanges();
    this.bills$.subscribe( (data: Bill[]) => {
      this.length = data.length;
    });



  }

  creatBill(orderFoodList: BillInfo[],
            isPaid: boolean,
            priceTotal: number,
            deliverAddress: string = OrderService.valueDefault,
            idCustomer: string = OrderService.valueDefault,
            idEmployee: string = OrderService.valueDefault,
            receiverName: string = OrderService.valueDefault,
            receiverPhoneNumber: string = OrderService.valueDefault,
  ) {
    if (this.length) {
      const createDate = new Date();
      const newBill = new Bill(
        this.length, idCustomer, idEmployee, isPaid, `${createDate}`,
        deliverAddress, receiverName, receiverPhoneNumber, orderFoodList, priceTotal);
      this.dataStorageService.addObject(this.bills, `${this.length}`, newBill);
    }
  }

}
