import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { EEmitterService } from 'src/app/services/e-emitter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderQueueService } from 'src/app/services/order-queue.service';

@Component({
  selector: 'app-customer-info-form',
  templateUrl: './customer-info-form.component.html',
  styleUrls: ['./customer-info-form.component.scss']
})
export class CustomerInfoFormComponent implements OnInit {

  @Output() comeBackEmitter: EventEmitter<void> = new EventEmitter<void>();
  infoForm: FormGroup;
  isPaid: string;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private orderQueueService: OrderQueueService
  ) { }

  ngOnInit() {
    this.initForm();
    // this.eemitterService.selectedFood.unsubscribe();
  }

  onSubmit() {

    if (this.orderService.orderdFoodListForCusomer.length > 0) {
      let order = {
        orderedFoodList: this.orderService.orderdFoodListForCusomer,
        idCustomer: OrderQueueService.valueDefault,
        priceTotal: this.orderQueueService.calculateTotalPrice(this.orderService.orderdFoodListForCusomer)
      }
      order = Object.assign(order, this.infoForm.value)
      this.orderQueueService.addOrdertoQueue(order);
      this.orderService.orderdFoodListForCusomer = [];
      this.isPaid = 'true';
    } else {
      this.isPaid = 'zero';
    }
  }

  comeBack() {
    this.router.navigate(['../order'], {relativeTo: this.route});
  }

  initForm() {
    this.infoForm = new FormGroup({
      'deliverAddress' : new FormControl(''),
      'receiverName' : new FormControl(''),
      'receiverPhoneNumber' : new FormControl(''),
    });
  }



}
