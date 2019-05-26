import { Food } from './food.model';

export class Bill {
  private static readonly idPrefix = 'O';
  private static readonly numberAmount = 4;
  public id: string;
  constructor(
    length: number,
    public idCustomer: string,
    public idEmployee: string,
    public isPaid: boolean,
    public createDate: string,
    public deliverAddress: string,
    public receiverName: string,
    public reciverPhoneNumber: string,
    public orderedFoodList: BillInfo[],
    public priceTotal = 0
  ) {
    this.id = this.generateId(length);
    // this.priceTotal = orderedFoodList.reduce(
    //   (acc: number, curr: BillInfo) => acc + curr.calculatePrice(), 0
    // );
  }

  generateId(length) {
    length++;
    const suffixNumber = length.toString();
    let zeroAmount = Bill.numberAmount - suffixNumber.length;
    let suffix = '';
    while (zeroAmount > 0) {
      suffix += '0';
      --zeroAmount;
    }
    suffix += suffixNumber;
    return Bill.idPrefix + suffix;
  }
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


