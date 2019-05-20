import { Component, OnInit } from '@angular/core';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { FoodCategory, SelectedFoodCategory } from 'src/app/models/food-category.model';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { Food } from 'src/app/models/food.model';
import { Account } from 'src/app/models/account.model';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.scss'],
  providers: []
})
export class FoodCategoriesComponent implements OnInit {
  selectedFoodCategoryParent: SelectedFoodCategory;
  foodCategories: FoodCategory[];

  constructor(
    private foodcategoryService: FoodCategoryService
    ) {
  }

  ngOnInit() {
    this.foodcategoryService.foodCategories$.subscribe( data => {
      this.foodCategories = [...data];
    })
  }



}


