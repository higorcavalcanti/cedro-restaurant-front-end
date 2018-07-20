import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { RestaurantTableDataSource } from './restaurant-table-datasource';

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: RestaurantTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new RestaurantTableDataSource(this.paginator, this.sort);
  }
}
