import { Injectable } from '@angular/core';
import { EMethod, IRequest } from 'projects/ecoomerecelib/src/lib/modal/configuration.model';
import { ResourceRequestService } from 'projects/ecoomerecelib/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendancerecorderService {

  constructor(private _reqResource: ResourceRequestService) { }

  getProductList(): Observable<any> {
    const _request: IRequest = {
      url: 'products/attendancelist',
      methodtype: EMethod.GET
    };
    return this._reqResource.productResource(_request);
  }
  getAttendance(id: number): Observable<any> {
    const _request: IRequest = {
      url: 'products/attendancelist/' + id,
      methodtype: EMethod.GET
    };
    return this._reqResource.productResource(_request);
  }
  submitAttendance(id: number, record): Observable<any> {
    const _request: IRequest = {
      url: 'products/saveattendance/' + id,
      methodtype: EMethod.POST,
      body: record
    };
    return this._reqResource.productResource(_request);
  }
}
