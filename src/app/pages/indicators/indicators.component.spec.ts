import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppModule } from '../../app.module';
import { CoreModule } from '../../@core/core.module';
import { IndicatorsComponent } from './indicators.component';
import { IndicatorsService } from 'src/app/shared/services/indicators.service';

const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      BrowserModule,
      CoreModule,
      AppModule,
    ],
    providers: [IndicatorsService],
    declarations: [IndicatorsComponent],
    schemas: [NO_ERRORS_SCHEMA]
  });
};



describe('Componente -> IndicatorsComponent', () => {
  let component: IndicatorsComponent;
  let fixture: ComponentFixture<IndicatorsComponent>;

  beforeEach(() => {
    testModuleConfig();
    fixture = TestBed.createComponent(IndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('Debe iniciar atributos', () => {
    expect(component.error).toEqual(false);
    expect(component.loading).toEqual(true);
    expect(component.indicators).toEqual([]);
    expect(component.indicatorValues).toEqual({});
  });



});
