import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog, MatIconRegistry, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import {CreateProjectComponent} from '../create-project/create-project.component';
import {DataService} from '../services/data.service';


@Component({
  selector: 'filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {

  isAllSelected = false;




  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private service : ProjectService, private data: DataService) {}

  createProject () {
    this.dialog.open(CreateProjectComponent)
  }
  ngOnInit() {
  }

  loadAll(){

    this.isAllSelected = true;
  }
  loadProjectList() {
   // this.data.;
}

}
