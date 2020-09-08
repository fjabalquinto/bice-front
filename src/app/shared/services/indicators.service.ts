import { Injectable } from '@angular/core';
import { HttpService } from '../../@core/services/http.service';
import { Observable } from 'rxjs/internal/Observable';
import { INDICATORS } from '../constants/urlApi.constants';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  constructor(private readonly httpService: HttpService) { }

  getLast(): Observable<any> {
    return this.httpService.get(INDICATORS.GET_LAST);
  }

  getValue(value: string): Observable<any> {
    return this.httpService.get(INDICATORS.GET_VALUE, value);
  }

}
