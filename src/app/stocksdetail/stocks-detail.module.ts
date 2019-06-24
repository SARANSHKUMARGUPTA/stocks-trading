import { NgModule } from '@angular/core';
import { StocksDetailRoutingModule } from './stocks-detail-routing.module';
import { CommonModule }   from '@angular/common';
import { CoreModule }   from '../core/core.module';
import { StocksDetailComponent } from './stocks-detail.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
import { ThousandSuffixesPipe } from '../thousand-suff.pipe';


export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}

@NgModule({
  declarations: [
    StocksDetailComponent
  ],
  exports: [
   CoreModule
  ],
  imports: [
    CoreModule,
    StocksDetailRoutingModule,
    CommonModule,
    ChartModule
  ],
  providers: [ { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } ]
})
export class StocksDetailModule { 

}
