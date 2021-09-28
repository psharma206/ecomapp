import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ItemdetailsComponent } from './itemDetails/itemdetails/itemdetails.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [{ path: 'dash', component: DashboardComponent }] },
  { path: 'itemslist', component: ItemlistComponent },
  { path: 'items', component: ItemComponent },
  { path: 'itemdetail', component: ItemdetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: SignupComponent },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
