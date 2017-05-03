import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-jd-grid',
  templateUrl: './jd-grid.component.html',
  styleUrls: ['./jd-grid.component.css']
})
export class JdGridComponent implements OnInit {
  gridOptions: GridOptions;

  constructor(private http: Http) {

     this.gridOptions = {rowHeight: 48};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id"
            },
            {
                headerName: "Value",
                field: "value"
            },

        ];
        http.get('../../data/testData.json').map((res:Response) => this.gridOptions.rowData = res.json());
        console.log(this.gridOptions.rowData);
        this.gridOptions.rowData = [
            { "id": 1, "value": 10 },
            { "id": 2, "value": 2 },
            { "id": 3, "value": 6 }
        ];
  }

  ngOnInit() {
  }

}
