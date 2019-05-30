import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EEmitterService } from 'src/app/services/e-emitter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [EEmitterService]
})
export class CartComponent implements OnInit {
  isCustomer = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onReceive(event) {
    this.router.navigate(['../press-info'], {relativeTo: this.route});
  }
}
