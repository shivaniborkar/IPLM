import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CreateProjectPopupComponent, Category } from '../create-project-popup/create-project-popup.component';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { NgForm } from '@angular/forms';

export interface Category {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(public dailogRef: MatDialogRef<CreateProjectPopupComponent>,
    private _router : Router, private service: ProjectService) { }

  ngOnInit() {
    this.resetForm();
  }

  onNoClick() {
    this.dailogRef.close();
   }

   category: Category[] = [
    {value: 1, viewValue: 'Scouting Round'},
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
     CategoryID: null
   }
}
}
