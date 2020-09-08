import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpService } from '../../@core/services/http.service';
import { SharedModule } from '../../shared/shared.module';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs';
import { IndicatorsService } from './indicators.service';
import { IndicatorsComponent } from 'src/app/pages/indicators/indicators.component';

const mockIndicators = [
  {
    key: 'cobre',
    name: 'Precio del Cobre, dólares por libra',
    unit: 'dolar',
    date: 1584489600,
    value: 2.39
  },
  {
    key: 'dolar',
    name: 'Dólar observado',
    unit: 'pesos',
    date: 1598832000,
    value: 779.92
  }
];

const mockValues = {
  key: 'cobre',
  name: 'Precio del Cobre, dólares por libra',
  unit: 'dolar',
  values: {
    1546387200: 2.71,
    1546473600: 2.7,
    1546560000: 2.64
  }
};

const responseError = {
  error: 'error',
  status: 500,
  statusText: 'Error de servicio, intentelo mas tarde',
};

const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [
      IndicatorsComponent
    ],
    imports: [
      SharedModule
    ],
    providers: [
      HttpService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

  });
};

describe('IndicatorsService', () => {
  let service: IndicatorsService;
  let httpClientSpy: { get: jasmine.Spy };

  it('debe ser creado', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
    testModuleConfig();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new IndicatorsService(httpClientSpy as any);
  });

  it('Metodo getLast debe retornar indicadores', () => {
    httpClientSpy.get.and.returnValue(of(mockIndicators));
    service.getLast().subscribe(
      indicators => expect(indicators).toEqual(mockIndicators, 'espera indicadores'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'llamado 1 vez');
  });

  it('Metodo getlast debe retornar error 500', () => {
    const errorResponse = new HttpErrorResponse(responseError);

    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    service.getLast().subscribe(
      indicators => fail('se espera error'),
      error => expect(error.message).toContain('Error de servicio, intentelo mas tarde')
    );
  });

  it('Metodo getValue debe retornar valores de indicador especifico', () => {
    httpClientSpy.get.and.returnValue(of(mockValues));
    service.getValue('cobre').subscribe(
      values => expect(values).toEqual(mockValues, 'espera valores'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'llamado 1 vez');
  });

  it('Metodo getValue debe retornar error 500', () => {
    const errorResponse = new HttpErrorResponse(responseError);

    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    service.getValue('cobre').subscribe(
      values => fail('se espera error'),
      error => expect(error.message).toContain('Error de servicio, intentelo mas tarde')
    );
  });

});
