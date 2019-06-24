import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GainersComponent } from './gainers.component';




const gainersRoutes: Routes = [

  {
    path: '' , component: GainersComponent,
    children: [
  {
    path: 'details/:id',
    loadChildren: '../../stocksdetail/stocks-detail.module#StocksDetailModule',
  }
  ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(gainersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GainersRoutingModule { }