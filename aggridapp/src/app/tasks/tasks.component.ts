import { Component, OnInit, ViewChild } from '@angular/core';
import { AggridService } from '../services/aggrid.service';
import { Observable } from 'rxjs';
import { CellClickedEvent } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  rowData: any[] = [];
  // rowData$!: Observable<any[]>;
  columnDefs: any[] = [];
  defaultColDef: any;
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  constructor(private _aggrdSe: AggridService) {}
  ngOnInit(): void {
    this._aggrdSe.getAllGridList().subscribe((response) => {
      console.log(response);
      this.rowData = response;
    });
    // this.rowData = [
    //   {
    //     name: 'Task 1',
    //     start_date: '2023-05-29 06:00:00',
    //     end_date: '2023-06-20 06:00:00',
    //   },
    //   {
    //     name: 'Task 2',
    //     start_date: '2023-05-30 06:00:00',
    //     end_date: '2023-06-21 06:00:00',
    //   },
    //   {
    //     name: 'Task 3',
    //     start_date: '2023-05-31 06:00:00',
    //     end_date: '2023-06-22 06:00:00',
    //   },
    //   // Add more data as needed
    // ];

    this.columnDefs = [
      { headerName: 'Task Name', field: 'make' },
      { headerName: 'Start Date', field: 'model' },
      { headerName: 'End Date', field: 'price' },
      // Add more columns as needed
    ];

    this.defaultColDef = {
      sortable: true,
      filter: true,
    };
  }
  onCellClicked(event: CellClickedEvent) {
    console.log(event);
  }
  clearSelection() {
    this.agGrid.api.deselectAll();
  }
}
