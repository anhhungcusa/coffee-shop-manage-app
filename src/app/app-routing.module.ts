import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { PageComponent } from './components/page/page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'page', component: PageComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'page', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
