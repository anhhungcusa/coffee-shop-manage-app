import { Component, OnInit, Input } from '@angular/core';
import { BillInfo } from 'src/app/models/bill.model';

@Component({
  selector: 'app-ordered-foods',
  templateUrl: './ordered-foods.component.html',
  styleUrls: ['./ordered-foods.component.scss']
})
export class OrderedFoodsComponent implements OnInit {

  @Input() orderdFoodList: BillInfo[];
  @Input() isCustomer: boolean;
  constructor() { }

  ngOnInit() {
  }

}
