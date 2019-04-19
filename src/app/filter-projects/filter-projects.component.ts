import { Component, OnInit } from '@angular/core';
import { MatDialog, MatIconRegistry } from '@angular/material';
import { CreateProjectPopupComponent } from '../create-project-popup/create-project-popup.component';


@Component({
  selector: 'filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {
  
  showFiller = false;

  constructor(public dialog: MatDialog){}

  createProject () {
    this.dialog.open(CreateProjectPopupComponent)
  }
  ngOnInit() {
  }

}
