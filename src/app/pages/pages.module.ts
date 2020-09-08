import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { CoreModule } from '../@core/core.module';
import { IndicatorsComponent } from './indicators/indicators.component';
import { IndicatorsService } from '../shared/services/indicators.service';
import { IndicatorDetailComponent } from './indicator-detail/indicator-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule
  ],
  providers: [IndicatorsService],
  declarations: [IndicatorsComponent, IndicatorDetailComponent]
})
export class PagesModule { }
