import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  profileForm: FormGroup;
  showFiller = false;
  @Input() selectedProjectID: number

  constructor() { }

  ngOnInit() {
      }

  onSelectedFile(event) {
    if (event.target.files.lenght > 0) {
      const profile = event.target.files[0];
      this.profileForm.get('profile').setValue(profile);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.profileForm.get('name').value);
    formData.append('name', this.profileForm.get('profile').value);
  }
}
