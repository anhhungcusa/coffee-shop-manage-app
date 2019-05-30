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
import { FoodItemComponent } from './foods/food-list/food-item/food-item.component';
import { DisableInputDirective } from 'src/app/directives/disable-input.directive';
import { FoodService } from 'src/app/services/food.service';
import { OFoodCategoriesComponent } from './order/o-food-categories/o-food-categories.component';
import { OFoodListComponent } from './order/o-food-list/o-food-list.component';
import { OTheOrderComponent } from './order/o-the-order/o-the-order.component';
import { OFoodCategoryItemComponent } from './order/o-food-categories/o-food-category-item/o-food-category-item.component';
import { OFoodItemComponent } from './order/o-food-list/o-food-item/o-food-item.component';
import { OrderService } from 'src/app/services/order.service';
import { FilterFoodPipe } from 'src/app/pipes/filter-food.pipe';
import { OrderedFoodsComponent } from './order/o-the-order/ordered-foods/ordered-foods.component';
import { OrderedFoodItemComponent } from './order/o-the-order/ordered-foods/ordered-food-item/ordered-food-item.component';
import { CalculatePricePipe } from 'src/app/pipes/calculate-price.pipe';
import { FooterComponent } from '../footer/footer.component';
import { OrderQueueComponent } from './order-queue/order-queue.component';
import { OrderDetailComponent } from './order-queue/order-detail/order-detail.component';
import { OrderItemComponent } from './order-queue/order-item/order-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AdminComponent,
    // OrderComponent,
    // OFoodCategoriesComponent,
    // OFoodCategoryItemComponent,
    // OFoodListComponent,
    // OFoodItemComponent,
    // OTheOrderComponent,
    // OrderedFoodsComponent,
    // OrderedFoodItemComponent,
    FoodsComponent,
    FoodListComponent,
    FoodItemComponent,
    FoodEditComponent,
    FoodCategoriesComponent,
    FoodCategoryItemComponent,
    FoodCategoryEditComponent,
    EmployeesComponent,
    CustomersComponent,
    AccountsComponent,

    CalculatePricePipe,
    DisableInputDirective,
    OrderQueueComponent,
    OrderDetailComponent,
    OrderItemComponent,

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
  ]
})
export class AdminModule { }
