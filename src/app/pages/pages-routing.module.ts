import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicatorsComponent } from '../pages/indicators/indicators.component';
import { IndicatorDetailComponent } from '../pages/indicator-detail/indicator-detail.component';

const routes: Routes = [
    {
        path: 'indicators',
        component: IndicatorsComponent
    },
    {
        path: 'indicator',
        component: IndicatorDetailComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'indicators'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
