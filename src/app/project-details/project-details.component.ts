import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProjectService } from '../services/project.service';
import { observable, Observable } from 'rxjs';
import { Project } from '../model/project.model';
import { ProjectFlowchart1Component } from '../project-flowchart1/project-flowchart1.component';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'date'];
  dataSource: MatTableDataSource<Project>;
  projects: Project[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service : ProjectService, private _router: Router) {
    
  }

  ngOnInit() {
  
    this.service.refreshList().subscribe((data:Project[]) => 
      {
        this.projects = data;
        this.dataSource = new MatTableDataSource(data);
      });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.projects);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClick(){
   //this._router.navigate(['projects/projectsflowchart']);
  }
}
