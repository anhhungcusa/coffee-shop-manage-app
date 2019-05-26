import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminModule } from './components/admin/admin.module';
import { FoodService } from './services/food.service';
import { DisableInputDirective } from './directives/disable-input.directive';
import { FilterFoodPipe } from './pipes/filter-food.pipe';
import { CalculatePricePipe } from './pipes/calculate-price.pipe';
import { PageModule } from './components/page/page.module';
import { OrderPageComponent } from './components/page/order-page/order-page.component';
import { OFoodCategoriesComponent } from './components/admin/order/o-food-categories/o-food-categories.component';
import { OFoodCategoryItemComponent } from './components/admin/order/o-food-categories/o-food-category-item/o-food-category-item.component';
import { OFoodListComponent } from './components/admin/order/o-food-list/o-food-list.component';
import { OFoodItemComponent } from './components/admin/order/o-food-list/o-food-item/o-food-item.component';
import { OTheOrderComponent } from './components/admin/order/o-the-order/o-the-order.component';
import { OrderedFoodsComponent } from './components/admin/order/o-the-order/ordered-foods/ordered-foods.component';
import { OrderedFoodItemComponent } from './components/admin/order/o-the-order/ordered-foods/ordered-food-item/ordered-food-item.component';
import { PageComponent } from './components/page/page.component';
import { OrderComponent } from './components/admin/order/order.component';
import { OrderService } from './services/order.service';
import { FoodCategoryService } from './services/food-category.service';
import { EEmitterService } from './services/e-emitter.service';
import { CustomerInfoFormComponent } from './components/page/customer-info-form/customer-info-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    // PageComponent,
    CustomerInfoFormComponent,
    OrderPageComponent,
    OrderComponent,
    OFoodCategoriesComponent,
    OFoodCategoryItemComponent,
    OFoodListComponent,
    OFoodItemComponent,
    OTheOrderComponent,
    OrderedFoodsComponent,
    OrderedFoodItemComponent,

     FilterFoodPipe,
  ],
  imports: [
    BrowserModule,
    PageModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'ReadTime'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    FoodCategoryService,
    FoodService,
    OrderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
