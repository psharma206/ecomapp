import { Injectable } from '@angular/core';
import { EMethod, IRequest } from 'projects/ecoomerecelib/src/lib/modal/configuration.model';
import { ResourceRequestService } from 'projects/ecoomerecelib/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _reqResource: ResourceRequestService) { }

  getProductList(): Observable<any> {
    const _request: IRequest = {
      url: 'products/',
      methodtype: EMethod.GET
    };
    return this._reqResource.productResource(_request);
  }
}
