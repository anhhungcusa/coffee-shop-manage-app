import { Pipe, PipeTransform } from '@angular/core';
import { BillInfo } from '../models/bill.model';

@Pipe({
  name: 'calculatePrice'
})
export class CalculatePricePipe implements PipeTransform {

  transform(value: number , data: BillInfo[]): any {
    value = data.reduce((acc,curr) => {
      console.log(1);
      return acc + curr.food.price * curr.amount;
    }, 10);
    return value;
  }

}
