import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { EEmitterService } from 'src/app/services/e-emitter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-info-form',
  templateUrl: './customer-info-form.component.html',
  styleUrls: ['./customer-info-form.component.scss']
})
export class CustomerInfoFormComponent implements OnInit {

  @Output() comeBackEmitter: EventEmitter<void> = new EventEmitter<void>();
  infoForm: FormGroup;
  isPaid : string;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
    // this.eemitterService.selectedFood.unsubscribe();
  }

  onSubmit() {
    console.log(this.infoForm.value);
    console.log(this.orderService.orderdFoodListForCusomer);
    if (this.orderService.orderdFoodListForCusomer.length > 0) {
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
