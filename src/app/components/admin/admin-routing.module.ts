import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { AdminComponent } from './admin.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { EmployeesComponent } from './employees/employees.component';
import { OrderComponent } from './order/order.component';

const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: 'order', component: OrderComponent},
      {path: 'foods', component: FoodsComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'food-categories', component: FoodCategoriesComponent},
      {path: 'employees', component: EmployeesComponent},
      {path: 'accounts', component: AccountsComponent},
      {path : '', redirectTo: 'order', pathMatch: 'full'}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {}
