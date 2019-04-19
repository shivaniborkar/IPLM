import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'create-project-popup',
  templateUrl: './create-project-popup.component.html',
  styleUrls: ['./create-project-popup.component.css']
})
export class CreateProjectPopupComponent implements OnInit {

  constructor(public dailogRef: MatDialogRef<CreateProjectPopupComponent>) { }

   onNoClick() {
   this.dailogRef.close()
  }

  ngOnInit() {
  }

  //categoryControl = new FormControl('', [Validators.required]);
    
    category: Category[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
