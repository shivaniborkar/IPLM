import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectFlowchartPopupComponent } from '../project-flowchart-popup/project-flowchart-popup.component';


@Component({
  selector: 'project-flowchart1',
  templateUrl: './project-flowchart1.component.html',
  styleUrls: ['./project-flowchart1.component.css']
})
export class ProjectFlowchart1Component implements OnInit {

  constructor(public dialog: MatDialog) { }
 
  createProject () {
   // this.dialog.open(ProjectFlowchartPopupComponent)
  }

  ngOnInit() {
  }

  
}


