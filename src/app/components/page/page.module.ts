import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OFoodCategoriesComponent } from '../admin/order/o-food-categories/o-food-categories.component';
import { OFoodCategoryItemComponent } from '../admin/order/o-food-categories/o-food-category-item/o-food-category-item.component';
import { OFoodItemComponent } from '../admin/order/o-food-list/o-food-item/o-food-item.component';
import { OFoodListComponent } from '../admin/order/o-food-list/o-food-list.component';
import { OTheOrderComponent } from '../admin/order/o-the-order/o-the-order.component';
import { OrderedFoodsComponent } from '../admin/order/o-the-order/ordered-foods/ordered-foods.component';
import { OrderedFoodItemComponent } from '../admin/order/o-the-order/ordered-foods/ordered-food-item/ordered-food-item.component';
import { FilterFoodPipe } from 'src/app/pipes/filter-food.pipe';
import { FoodCategoryService } from 'src/app/services/food-category.service';
import { FoodService } from 'src/app/services/food.service';
import { OrderService } from 'src/app/services/order.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AdminModule } from '../admin/admin.module';
import { NavbarCComponent } from './navbar-c/navbar-c.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { PageRoutingModule } from './page-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerInfoFormComponent } from './customer-info-form/customer-info-form.component';
import { MFoodItemComponent } from './menu/m-food-item/m-food-item.component';
import { MFoodCategoryComponent } from './menu/m-food-category/m-food-category.component';
import { FillterFood2Pipe } from 'src/app/pipes/fillter-food2.pipe';

@NgModule({
  declarations: [
  PageComponent,
  NavbarCComponent,
  MenuComponent,
  CustomerInfoFormComponent,
  MFoodItemComponent,
  MFoodCategoryComponent,
  FillterFood2Pipe,
],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    FoodCategoryService,
    FoodService,
    OrderService
  ]
})
export class PageModule { }
