import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog, MatIconRegistry, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CreateProjectPopupComponent } from '../create-project-popup/create-project-popup.component';

import { ProjectService } from '../services/project.service';


@Component({
  selector: 'filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {
  
  isAllSelected = false;



  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private service : ProjectService){}

  createProject () {
    this.dialog.open(CreateProjectPopupComponent)
  }
  ngOnInit() {
  }

  loadAll(){

    this.isAllSelected = true;
  }

  
}
