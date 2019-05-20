import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { EmployeesComponent } from './employees/employees.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FoodCategoryItemComponent } from './food-categories/food-category-item/food-category-item.component';
import { FoodCategoryEditComponent } from './food-categories/food-category-edit/food-category-edit.component';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodListComponent } from './foods/food-list/food-list.component';
import { FoodEditComponent } from './foods/food-edit/food-edit.component';
import { FoodDetailComponent } from './foods/food-detail/food-detail.component';
import { FoodItemComponent } from './foods/food-list/food-item/food-item.component';

@NgModule({
  declarations: [
    OrderComponent,
    FoodsComponent,
    FoodCategoriesComponent,
    FoodCategoryItemComponent,
    FoodCategoryEditComponent,
    EmployeesComponent,
    CustomersComponent,
    AccountsComponent,
    AdminComponent,
    NavbarComponent,
    FoodListComponent,
    FoodEditComponent,
    FoodDetailComponent,
    FoodItemComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent
  ],
  providers: [
    FoodCategoryService
  ]
})
export class AdminModule { }
