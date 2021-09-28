import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EcommerceModule, NavbarModule, ModalModule } from 'projects/ecoomerecelib/src/public-api';
import { MatIconModule } from '@angular/material/icon';
 import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ItemdetailsComponent } from './itemDetails/itemdetails/itemdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ItemdetailsComponent,
     DashboardComponent, 
    ItemComponent, ItemlistComponent, HomeComponent, SignupComponent, LoginComponent],
  imports: [BrowserModule, BrowserAnimationsModule,
    EcommerceModule.forRoot(),
    ReactiveFormsModule,
    FlexLayoutModule, NavbarModule,
    MatInputModule, MatSlideToggleModule,
    MatIconModule, MatButtonModule, 
    MatSelectModule,
    MatDialogModule, ModalModule
    , MatCardModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
