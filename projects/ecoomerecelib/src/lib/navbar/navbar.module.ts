import { MenubarModule } from './../menubar/menubar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

import { MatSidenavModule  } from '@angular/material/sidenav';
import {  MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MenubarModule,
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
