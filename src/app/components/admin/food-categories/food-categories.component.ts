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
  foods: Food[];
  accounts: Account[];
  items: AngularFireList<FoodCategory>;
  item2s: Observable<any[]>;
  item3s: Observable<any[]>;
  item4s: Observable<any[]>;

  constructor(
    private foodcategoryService: FoodCategoryService,
    private dataStorageService: DataStorageService,
    private db2: AngularFireDatabase
  ) {
    this.items = this.dataStorageService.getData<FoodCategory>('foodCategories');
    this.items.valueChanges().subscribe(
      data => {
        this.foodCategories = [...data];
        console.log(data, 1);
      }
    );




   }

  ngOnInit() {

  }

  add() {
   // this.item2s.push(this.foodCategories[0]).then(data => console.log(data));
    this.items.update('9', this.foodCategories[1]);
    // this.foodcategoryService.fetchDataFromFireBase();


  }

}


