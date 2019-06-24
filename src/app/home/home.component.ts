import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { StocksService } from '../core/services/stocks.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { StockNameSymbol } from '../core/services/stocks.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import * as stocksDetail from './stocks.json';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiHost: string = 'assets/stocks.json';
  stocksCtrl = new FormControl();
  filteredStocks: Observable<StockNameSymbol[]>;
  hideList: boolean = false;
  stocksList: StockNameSymbol[];//= stocksDetail;

  ngOnInit() {
    this.http.get(this.apiHost).subscribe(
      data => {
        this.stocksList = data as StockNameSymbol[];
        this.filteredStocks = this.stocksCtrl.valueChanges.pipe(startWith(''),
          map(stock => stock ? this._filterStocks(stock) : this.stocksList.slice())
        );
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  constructor(private route: Router, private stockService: StocksService, private http: HttpClient) {
  }

  private _filterStocks(value: string): StockNameSymbol[] {
    const filterValue = value.toLowerCase();

    return this.stocksList.filter(stock => stock.Symbol.toLowerCase().indexOf(filterValue) === 0);
  }


  private getDetails(id: string, type: string) {
    this.route.navigate(['home/details/stock',  id , type]);
  }
  public fetchDetails(symbol: string, type: string) {
    this.stockService.gainerOrLosers.next(type);
    this.getDetails(symbol, type);
  }

  public fetchGainers() {
    this.stockService.gainerOrLosers.next('GAINER');
    this.route.navigate(['home/gainers']);
  }

  public fetchLosers() {
    this.stockService.gainerOrLosers.next('LOSER');
    this.route.navigate(['home/losers']);
  }
}
