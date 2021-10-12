import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AppInitializer } from './app-initializer.service';
import { FooterComponent } from './footer/footer.component';
import { DxashComponent } from './dxash/dxash.component';
import { MenubarModule } from 'projects/ecoomerecelib/src/lib/menubar/menubar.module';

export function startupServiceFactory(startupService: AppInitializer) {
  return (): Promise<any> => {
    return startupService.loadConfig();
  };
}


@NgModule({
  declarations: [AppComponent, ItemdetailsComponent,
     DashboardComponent, 
    ItemComponent, ItemlistComponent, HomeComponent, SignupComponent, LoginComponent, FooterComponent, DxashComponent],
  imports: [BrowserModule, BrowserAnimationsModule,
    MatFormFieldModule,
    MenubarModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FlexLayoutModule, NavbarModule,
    MatInputModule, MatSlideToggleModule,
    MatIconModule, MatButtonModule, 
    EcommerceModule.forRoot(),
    MatSelectModule,
    MatDialogModule, ModalModule
    , MatCardModule,
    AppRoutingModule,
    LocalStorageModule.forRoot({
      prefix: 'threechipmunks.com',
      storageType: 'localStorage'
    })],
  providers: [AppInitializer,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AppInitializer],
      multi: true

    }],
  bootstrap: [AppComponent],
})
export class AppModule { }
