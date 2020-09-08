import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppModule } from '../../app.module';
import { CoreModule } from '../../@core/core.module';
import { IndicatorsService } from 'src/app/shared/services/indicators.service';
import { IndicatorDetailComponent } from './indicator-detail.component';

const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      BrowserModule,
      CoreModule,
      AppModule,
    ],
    providers: [IndicatorsService],
    declarations: [IndicatorDetailComponent],
    schemas: [NO_ERRORS_SCHEMA]
  });
};
describe('Componente -> IndicatorDetailComponent', () => {
  let component: IndicatorDetailComponent;
  let fixture: ComponentFixture<IndicatorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndicatorDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    testModuleConfig();
    fixture = TestBed.createComponent(IndicatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('Debe iniciar atributos', () => {
    expect(component.error).toEqual(false);
    expect(component.loading).toEqual(true);
    expect(component.indicatorValues).toEqual({});
  });
});
