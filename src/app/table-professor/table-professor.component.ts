import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableProfessorDataSource } from './table-professor-datasource';
import { Professor } from '../models/professor';
import { ProfessorService } from '../services/professor.service';
@Component({
  selector: 'app-table-professor',
  templateUrl: './table-professor.component.html',
  styleUrls: ['./table-professor.component.css']
})
export class TableProfessorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableProfessorDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  professores: Professor[];

  constructor(private service: ProfessorService) { }

  ngOnInit() {
    this.dataSource = new TableProfessorDataSource(this.paginator, this.sort);
    this.listaProfessor();
  }

  listaProfessor(): void {
    this.service.getListaProfessor().subscribe(
      (res) => {
        this.professores = res; 
        console.log("professores: ", this.professores)
      },
      (err) => {
        alert('There is a problem!' + JSON.stringify(err)); 
      }
    );
}
}
