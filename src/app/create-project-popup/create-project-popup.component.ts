import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Category {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'create-project-popup',
  templateUrl: './create-project-popup.component.html',
  styleUrls: ['./create-project-popup.component.css']
})
export class CreateProjectPopupComponent implements OnInit {

  constructor(public dailogRef: MatDialogRef<CreateProjectPopupComponent>,
    private _router : Router, private service: ProjectService) { }

   onNoClick() {
   this.dailogRef.close();
  }

  ngOnInit() {
    this.resetForm();
  }

  //categoryControl = new FormControl('', [Validators.required]);
    
    category: Category[] = [
      {value: 1, viewValue: 'Steak'},
      {value: 2, viewValue: 'Pizza'},
      {value: 3, viewValue: 'Tacos'}
  ];



  onSubmit(form : NgForm)
  {
    this.insertRecord(form);
    console.log(form.value);
    this.onNoClick();
  }

  insertRecord(form : NgForm)
  {
      this.service.postProjectDetails(form.value).subscribe(res=> {
      this.resetForm(form)
    });
  }
  resetForm(form? : NgForm)
  {
    if(form!= null)
     form.resetForm();

     this.service.formData = {
       ProjectId: null,
       ProjectName: '',
       ProjectDescription: '',
       ProjectDate: null,
       CategoryID: null,
       Project_Catchphrases: ''
     }
  }
}
