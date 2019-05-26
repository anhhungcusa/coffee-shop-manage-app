import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { CartComponent } from './cart/cart.component';
import { PageComponent } from './page.component';
import { HomeComponent } from '../home/home.component';
import { CustomerInfoFormComponent } from './customer-info-form/customer-info-form.component';

const pageRoutes: Routes = [
  {path: 'page', component: PageComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'order', component: OrderPageComponent},
    {path: 'press-info', component: CustomerInfoFormComponent},
    {path: 'my-cart', component: CartComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]}

];

@NgModule({
  imports: [
    RouterModule.forChild(pageRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class PageRoutingModule {

}
