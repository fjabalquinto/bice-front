import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  get(path: string, params = ''): Observable<any> {
    return this.http.get(`${environment.urlApi}${path}/${params}`);
  }

  post(path: string, body: any = {}, params?: any): Observable<any> {
    return this.http.post(`${environment.urlApi}${path}`, JSON.stringify(body), params);
  }

}
