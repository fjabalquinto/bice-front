import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorsService } from './services/indicators.service';
import { FooterBiceComponent } from './components/footer-bice/footer-bice.component';
import { HeaderBiceComponent } from './components/header-bice/header-bice.component';

const sharedComponent = [
  HeaderBiceComponent,
  FooterBiceComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    IndicatorsService
  ],
  declarations: [
    ...sharedComponent,
  ],
  exports: [
    ...sharedComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
