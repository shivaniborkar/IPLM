import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { ProjectService } from '../services/project.service';

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

  constructor(public dailogRef: MatDialogRef<CreateProjectPopupComponent>,private service: ProjectService) { }

   onNoClick() {
   this.dailogRef.close()
  }

  ngOnInit() {
    this.resetForm();
  }

  //categoryControl = new FormControl('', [Validators.required]);
    
    category: Category[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
  ];



  onSubmit(form : NgForm)
  {
    this.insertRecord(form);
  }

  insertRecord(form : NgForm)
  {
    this.service.postProjectDetails(form.value).subscribe(res=> {
      this.resetForm(form)
    });
  }
  resetForm(form? : NgForm)
  {
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
