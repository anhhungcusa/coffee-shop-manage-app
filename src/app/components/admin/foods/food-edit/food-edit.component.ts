import { Component, OnInit } from '@angular/core';
import { TrueFalse, BtnStatus } from 'src/app/models/enums.modal';
import { FoodService } from 'src/app/services/food.service';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { FoodCategory } from 'src/app/models/food-category.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { filter, tap, map } from 'rxjs/operators';
import { Food } from 'src/app/models/food.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss'],
  providers: []
})
export class FoodEditComponent implements OnInit {

  foodCategories: FoodCategory[];
  foods: Food[];
  food: Food;
  index: number;
  foodForm: FormGroup;


  btnStatus = BtnStatus.edit;
  statusOption = {
    true: 'true',
    false: 'false',
  };
  setCurrentClasses = {
    'disableContent': true
  };

  constructor(
    private foodService: FoodService,
    private foodCategoryService: FoodCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm(false);
    this.foodCategoryService.foodCategories$
      .subscribe((data: FoodCategory[]) => {
        this.foodCategories = [...data];
      });
    this.route.params
      .subscribe((params: Params) => {
        if (params.id) {
          this.index = this.foodService.getIndex(params.id);
          if (params.id[params.id.length - 1] !== '1') {
            this.setCurrentClasses.disableContent = true;
            this.btnStatus = BtnStatus.edit;
          } else {
            this.setCurrentClasses.disableContent = false;
            this.btnStatus = BtnStatus.save;
          }
        } else {
          this.setCurrentClasses.disableContent = false;
          this.btnStatus = BtnStatus.add;
          this.initForm(false);
        }
        this.foodService.getValue(this.index).then(data => {
          this.food = data as Food;
          if (this.food) {
            this.initForm(true);
          }
        })
          .catch(err => console.log(err));
      });


  }

  initForm(status: boolean) {
    let foodName = '';
    let updateDate = '';
    let idFoodCategory = '';
    let price = 10;
    let isSelled = this.statusOption.true;
    let imgURL = '';
    if (status) {
      foodName = this.food.name;
      idFoodCategory = `${this.food.idFoodCategory}`;
      price = this.food.price;
      isSelled = this.food.isSelled.toString();
      imgURL = this.food.imgUrl;
      updateDate = this.foodService.convertToFormDatetimelocal(this.food.updateDate);
    }
    const nameFormControl = new FormControl(foodName);
    let dateFormControl;
    if (this.btnStatus === BtnStatus.add) {
      updateDate = this.foodService.convertToFormDatetimelocal(new Date());

      dateFormControl = new FormControl({value: updateDate, disabled: false});
    } else {
      dateFormControl = new FormControl({value: updateDate, disabled: true});
    }
    const idFoodCategoryFormControl = new FormControl(idFoodCategory);
    const priceFromControl = new FormControl(price);
    const isSelledFormControl = new FormControl(isSelled);
    const imgUrlFormControl = new FormControl(imgURL);

    this.foodForm = new FormGroup({
      'idFoodCategory' : idFoodCategoryFormControl,
      'imgUrl': imgUrlFormControl,
      'isSelled': isSelledFormControl,
      'name': nameFormControl,
      'price': priceFromControl,
      'updateDate': dateFormControl,
    })

  }

  editFood() {

    this.router.navigate([`../${this.index}${this.food.id}${this.food.name}1/edit`], {relativeTo: this.route});
  }
  onCancel() {
    // if(this.btnStatus === BtnStatus.edit) {
    //   this.router.navigate(['../../'], {relativeTo: this.route});

    // } else { }

     this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    switch (this.btnStatus) {
      case BtnStatus.save:
        const formValue = this.foodForm.value;
        this.food.name  = formValue.name.toLocaleUpperCase();
        this.food.updateDate = new Date();
        this.food.idFoodCategory = formValue.idFoodCategory;
        this.food.price = formValue.price;
        this.food.imgUrl = formValue.imgUrl;
        this.food.isSelled = formValue.isSelled;
        // console.log(this.food, this.index);
        this.foodService.updateFood(this.food, this.index);
        break;
      case BtnStatus.add:
        this.foodService.addFood(this.foodForm.value);
        break;
    }
  }



}
