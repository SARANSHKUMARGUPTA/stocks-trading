import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoosersComponent } from './loosers.component';




const losersRoutes: Routes = [
  {
    path: '' , component: LoosersComponent,
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
    RouterModule.forChild(losersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LosersRoutingModule { }