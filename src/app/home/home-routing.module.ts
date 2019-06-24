import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const homeRoutes: Routes = [

  {
path: '', 
component: HomeComponent,
children: [
  {
    path: 'gainers',
    loadChildren: './gainers/gainers.module#GainersModule',
  },
   {
    path: 'losers',
    loadChildren: './loosers/losers.module#LosersModule',
  },
   {
    path: 'details',
    loadChildren: './details/details.module#DetailsModule',
  }
  ]
}
];


@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }