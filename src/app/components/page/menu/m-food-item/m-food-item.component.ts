import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { EEmitterService } from 'src/app/services/e-emitter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-m-food-item',
  templateUrl: './m-food-item.component.html',
  styleUrls: ['./m-food-item.component.scss'],
})
export class MFoodItemComponent implements OnInit {
  @Input() food: Food;
  @Input() index: number;

  constructor(
    private eemitterService: EEmitterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  buyFood() {
    this.router.navigate(['../order'], {relativeTo: this.route});
  }

}
