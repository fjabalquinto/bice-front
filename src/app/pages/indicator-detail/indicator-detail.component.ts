import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndicatorsService } from '../../shared/services/indicators.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-indicator-detail',
  templateUrl: './indicator-detail.component.html',
  styleUrls: ['./indicator-detail.component.scss']
})
export class IndicatorDetailComponent implements OnInit {
  indicatorValues: any = {};
  loading = true;
  error = false;
  private subscription: Subscription = null;

  constructor(
    private indicatorsService: IndicatorsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ value }) => {
      this.getIndicatorValues(value);
    });
  }

  /**
   * Obtiene valores de indicadores especifico
   * @param value nombre de indicador
   */
  getIndicatorValues(value: string): void {
    this.loading = true;
    this.error = false;
    this.subscription = this.indicatorsService.getValue(value)
      .subscribe(response => {
        this.indicatorValues = response;
        this.loading = false;
      }, () => {
        this.error = true;
        this.loading = false;
      });
  }
}
