import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProjectService } from '../services/project.service';
import { observable, Observable } from 'rxjs';
import { Project } from '../model/project.model';

export interface UserData {
  id: string;
  name: string;
  description: string;
  date: string;
}

/** Constants used to fill up our data base. */
const DESCRIPTION: string[] = ['IPLM1', 'IPLM2', 'IPLM3', 'IPLM4', 'IPLM5', 'IPLM6', 'IPLM7',
  'IPLM8', 'IPLM9', 'IPLM110', 'IPLM1110', 'IPLM134', 'IPLM15', 'IPLM156', 'IPLM1789'];
const NAMES: string[] = ['Project Management1', 'Project Management2', 'Project Management3', 'Project Management90', 'Project Management89', 'Project Management11',
  'Project Management4', 'Project Management5', 'Project Management6', 'Project Management7', 'Project Management789', 'Project Management24',
  'Project Management8', 'Project Management9', 'Project Management10', 'Project Management11', 'Project Management12', 'Project Management13', 'Project Management45'];
const DATE: string[] = ['01/01/2018', '01/01/2018', '01/01/2018', '01/01/2018', '01/01/2018', '01/01/2018', '01/01/2018',
  '01/01/2018', '01/01/2018', '01/01/2018', '01/01/2018', '01/01/2018', '01/01/2018', '01/01/2018', '01/01/2018'];

var displayProjects: boolean = true;

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

  constructor(private service : ProjectService) {
    // Create 100 users
    const users = Array.from({length: 1000}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
   // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
   // this.dataSource.paginator = this.paginator;
   // this.dataSource.sort = this.sort;
    this.service.refreshList().subscribe((data:Project[]) => 
      {
        this.projects = data;
        this.dataSource = new MatTableDataSource(data);
      });
    console.log(this.projects);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  const description =
  DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))] 
  DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))]

  const date =
  DATE[Math.round(Math.random() * (DATE.length - 1))]
  DATE[Math.round(Math.random() * (DATE.length - 1))]

  return {
    id: id.toString(),
    name: name,
    description: description,
    date: date
  };
}