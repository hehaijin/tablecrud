import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CarService} from '../car.service';
import {Car} from '../Car';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DataService} from '../data.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

export interface ACode {
  id: string;
  Acode: string;
  Description: string;
  ScrubId: string;
  ReviewMessage: string;
  ScreeningIfPointOfCareFlag: string;
}


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  cars: Car[];
  cols: any[];
  Acodes: any;
  columnsToDisplay = ['select', 'id', 'Acode', 'Description', 'ScrubId', 'ReviewMessage', 'ScreeningIfPointOfCareFlag', 'actions'];
  datasource: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  selection;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {


    this.dataService.getAcode().subscribe((data) => {
      this.Acodes = data;
      console.log(this.Acodes);
      this.datasource = new MatTableDataSource(this.Acodes);
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
      const initialSelection = [];
      const allowMultiSelect = true;
      this.selection = new SelectionModel(false, initialSelection);

    });
  }

  applyFilter(filterValue: string) {
    console.log('filter applied');
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datasource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {

    console.log('toggling row');
    this.isAllSelected() ?
      this.selection.clear() :
      this.datasource.data.forEach(row => this.selection.select(row));
  }

  cellClick() {
    console.log('cell clicked');
  }

  addNew() {
    this.Acodes.unshift({id: null, Acode: null, Description: null});
    this.datasource.data = this.Acodes;
  }

}

