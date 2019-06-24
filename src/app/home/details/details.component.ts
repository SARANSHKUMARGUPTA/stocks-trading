import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { StocksService } from '../../core/services/stocks.service';
import { StocksModel } from '../../core/services/stocks.model';
import { RouterModule, Router }    from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
}