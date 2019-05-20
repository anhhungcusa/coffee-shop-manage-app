import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectedFoodCategory } from 'src/app/models/food-category.model';

@Component({
  selector: 'app-food-category-edit',
  templateUrl: './food-category-edit.component.html',
  styleUrls: ['./food-category-edit.component.scss']
})
export class FoodCategoryEditComponent implements OnInit {
  @ViewChild('selectedItem') selectedItemRef: ElementRef;
  selectedFoodCategory: SelectedFoodCategory;

  statusOption = {true: true, false: false};
  foodCategoryForm: FormGroup;

  constructor(
    private foodCategoryService: FoodCategoryService
  ) {
    this.initForm(false);
  }

  ngOnInit() {
    this.foodCategoryService.selectedFoodCategory
    .subscribe( (value: SelectedFoodCategory) => {
      this.selectedFoodCategory = value;
      this.initForm(true);
    })
  }

  editFoodCategory() {
    const formValue = this.foodCategoryForm.value;
    const status = (formValue.status === 'true') ? true : false;
    this.selectedFoodCategory.selectedFoodCategory.name = formValue.name.toLocaleUpperCase();
    this.selectedFoodCategory.selectedFoodCategory.status = status;
    this.foodCategoryService.updateFoodCategory(this.selectedFoodCategory.selectedFoodCategory, this.selectedFoodCategory.index)
      .then( data => console.log('success: ', data))
      .catch(err => console.log('err: ', err));
    //console.log(this.selectedFoodCategory.selectedFoodCategory);
  }

  onSubmit() {
     this.foodCategoryService.addFoodCategory(this.foodCategoryForm.value)
     .then( data => console.log('add success: ', data))
     .catch(err => console.log('add err: ', err));;
  }

  initForm(isEdit: boolean = false) {
    let foodCategoryName = '';
    let foodCategoryStatus = 'true';

    if(isEdit) {
      foodCategoryName = this.selectedFoodCategory.selectedFoodCategory.name;
      foodCategoryStatus = `${this.selectedFoodCategory.selectedFoodCategory.status}`;
    }

    let nameFormControl = new FormControl(foodCategoryName);
    let statusFormControl = new FormControl(foodCategoryStatus);
    this.foodCategoryForm = new FormGroup({
      'name': nameFormControl,
      'status': statusFormControl
    });
  }
}
