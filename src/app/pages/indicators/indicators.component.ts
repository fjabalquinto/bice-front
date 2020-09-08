import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IndicatorsService } from '../../shared/services/indicators.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {
  indicators: any[] = [];
  indicatorValues: any = {};
  loading = true;
  error = false;
  private subscription: Subscription = null;

  constructor(
    private indicatorsService: IndicatorsService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getIndicators();
  }

  /**
   * Obtiene lista de indicadares
   */
  getIndicators(): void {
    this.error = false;
    this.loading = true;
    this.subscription = this.indicatorsService.getLast()
      .subscribe(response => {
        this.indicators = response;
        this.loading = false;
      }, () => {
        this.error = true;
        this.loading = false;
      });
  }

  /**
   * Navega a vista detalle de indicador
   * @param value nombre de indicador
   */
  navigateDetail(value: string): void {
    this.loading = true;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        value,
      }
    };
    this.router.navigate(['indicator'], navigationExtras);
  }

}
