import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatIconRegistry, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CreateProjectPopupComponent } from '../create-project-popup/create-project-popup.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { Project } from '../model/project.model';
import { ProjectService } from '../services/project.service';


@Component({
  selector: 'filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {
  
  showFiller = false;
  projects: Project[];
  dataSource: MatTableDataSource<Project>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private service : ProjectService){}

  createProject () {
    this.dialog.open(CreateProjectPopupComponent)
  }
  ngOnInit() {
  }

  loadAll(){

    this.service.refreshList().subscribe((data:Project[]) => 
      {
        
        
        this.projects= data;      
         this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }); 
    
  }
  
}
