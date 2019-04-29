import { Injectable } from '@angular/core';
import { Project } from '../model/project.model';
import { HttpClient } from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  formData: Project;
 
  readonly rootURL = "http://localhost:2228/api";
  constructor(private service: ProjectService, private http: HttpClient) { 
   
  }

  postProjectDetails  (formData : Project)
  {
     return this.http.post(this.rootURL + '/Project_Details', formData );
  }
}
