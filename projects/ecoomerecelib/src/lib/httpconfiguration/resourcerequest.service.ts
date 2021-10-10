import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IRequest, EMethod, IConfig} from '../modal/configuration.model';
import { HttpcallService } from '../httpconfiguration/httpcall.service';
import { ConfigurationsetupService } from '../services/startup/configurationsetup.service';
  import { ServiceRequest } from '../service-resource.constant';

@Injectable({
  providedIn: 'root'
})
export class ResourceRequestService {

  constructor(private config: ConfigurationsetupService,
    private serviceRequest: HttpcallService) { }

  productResource(request: IRequest): Observable<any> {
    const server = this.getServer(ServiceRequest.PRODUCTSERVER, this.config.configservice);
    request.url = server + request.url;
    return this.resourceRequest(request);
  }


  private resourceRequest(request: IRequest): Observable<any> {

    switch (request.methodtype) {
      case EMethod.GET:
        return this.serviceRequest.get(request.url, request.params);
        break;
      case EMethod.PATCH:
        return this.serviceRequest.patch(request.url, request.body);
        break;
      case EMethod.PUT:
        return this.serviceRequest.put(request.url, request.body);
        break;
      case EMethod.POST:
        return this.serviceRequest.post(request.url, request.body, request.params);
      case EMethod.DELETE:
        return this.serviceRequest.delete(request.url);
        break;
      default:
        break;
    }
  }

  private getServer(serviceRequest: ServiceRequest, config: IConfig) {
    let server = '';
    server = config.SERVER[serviceRequest];
    return server;
  }
}
