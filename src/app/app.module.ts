import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FoodCategoriesComponent } from './components/admin/food-categories/food-categories.component';
import { FoodsComponent } from './components/admin/foods/foods.component';
import { EmployeesComponent } from './components/admin/employees/employees.component';
import { CustomersComponent } from './components/admin/customers/customers.component';
import { AccountsComponent } from './components/admin/accounts/accounts.component';
import { OrderComponent } from './components/admin/order/order.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FoodCategoriesComponent,
    FoodsComponent,
    EmployeesComponent,
    CustomersComponent,
    AccountsComponent,
    OrderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
