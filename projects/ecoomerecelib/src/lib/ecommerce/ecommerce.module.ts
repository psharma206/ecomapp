import { RequestinterceptorService } from './../requestinterceptor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestinterceptorService, multi: true }]
})
export class EcommerceModule { 
  static forRoot() {
    return {
      ngModule: EcommerceModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestinterceptorService, multi: true }]
    }
  }
}
