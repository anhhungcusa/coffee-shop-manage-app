import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomersComponent } from './customers/customers.component';
import { AdminComponent } from './admin.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { EmployeesComponent } from './employees/employees.component';
import { OrderComponent } from './order/order.component';
import { FoodEditComponent } from './foods/food-edit/food-edit.component';
import { FoodItemComponent } from './foods/food-list/food-item/food-item.component';
import { OrderQueueComponent } from './order-queue/order-queue.component';
import { OrderDetailComponent } from './order-queue/order-detail/order-detail.component';

const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path : '', redirectTo: 'order', pathMatch: 'full'},
      {path: 'order', component: OrderComponent},
      {path: 'foods', component: FoodsComponent, children: [
        {path: 'new', component: FoodEditComponent},
        {path: ':id', component: FoodEditComponent},
        {path: ':id/edit', component: FoodEditComponent},
      ]},
      {path: 'order-queue', component: OrderQueueComponent, children: [
        {path: ':id', component: OrderDetailComponent}
      ]},
      {path: 'customers', component: CustomersComponent},
      {path: 'food-categories', component: FoodCategoriesComponent},
      {path: 'employees', component: EmployeesComponent},
      {path: 'accounts', component: AccountsComponent}
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
