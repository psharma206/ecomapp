import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpcallService } from '../httpconfiguration/httpcall.service';
import { InterceptorService } from '../httpconfiguration/interceptor.service';
import { MessageToast } from '../services/toaster/message.component';
import { LoaderService } from '../services/spinner/loader.service';
import { MessageService } from '../services/toaster/message.service';
import { ConfigurationsetupService } from '../services/startup/configurationsetup.service';
import { ResourceRequestService } from '../httpconfiguration/resourcerequest.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [MessageToast],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MdePopoverModule,
    ToastrModule.forRoot({ toastComponent: MessageToast }),
    ToastContainerModule
  ],
  providers: [HttpcallService,
    InterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }],
    exports: [HttpClientModule, MessageToast]
})
export class EcommerceModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EcommerceModule,
      providers: [HttpcallService, LoaderService, MessageService,
        ConfigurationsetupService, InterceptorService,
        ResourceRequestService]
    };
  }
}
