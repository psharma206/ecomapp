import { APP_INITIALIZER, NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { SignaturePadModule } from 'angular2-signaturepad';
import { MatButtonModule } from '@angular/material/button';
import { RecordsignatureComponent } from './recordsignature/recordsignature.component';
import { EcommerceModule } from 'projects/ecoomerecelib/src/public-api';
import { AppInitializer } from 'src/app/app-initializer.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { SearchPipe } from './search.pipe';

// import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

export function startupServiceFactory(startupService: AppInitializer) {
  return (): Promise<any> => {
    return startupService.loadConfig();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    DashboardComponent,
    RecordsignatureComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SignaturePadModule,
    EcommerceModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatNativeDateModule,
    FormsModule,
    LocalStorageModule.forRoot({
      prefix: 'threechipmunks.com',
      storageType: 'localStorage'
    }),
    ReactiveFormsModule,
    ChartsModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [AppInitializer,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AppInitializer],
      multi: true

    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
