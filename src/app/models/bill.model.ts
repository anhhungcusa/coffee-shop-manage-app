import { Food } from './food.model';

export class Bill {
  public priceTotal = 0;
  constructor(
    public id: string ,
    public idCustomer: string,
    public idEmployee: string,
    public isPaid: boolean,
    public createDate: Date,
    public deliverAddress: string,
    public orderedFoodList: BillInfo[]
  ) {
    this.priceTotal = orderedFoodList.reduce(
      (acc: number, curr: BillInfo) => acc + curr.calculatePrice(), 0
    );
  }

  // caculatePriTotal(): number {

  // }
}


export class BillInfo {
  constructor(
    public food: Food,
    public amount: number = 1
  ) {}

  calculatePrice(): number {
    return this.food.price * this.amount;
  }
}
