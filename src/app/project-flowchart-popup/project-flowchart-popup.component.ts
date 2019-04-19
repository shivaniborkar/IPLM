import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'project-flowchart-popup',
  templateUrl: './project-flowchart-popup.component.html',
  styleUrls: ['./project-flowchart-popup.component.css']
})
export class ProjectFlowchartPopupComponent implements OnInit {

  constructor(public dailogRef: MatDialogRef<ProjectFlowchartPopupComponent>) { }
  onNoClick() {
    this.dailogRef.close()
  }
  ngOnInit() {
  }

}
