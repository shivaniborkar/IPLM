import { Injectable } from '@angular/core';
import { Project } from '../model/project.model';
import { HttpClient, HttpHeaders } from '@angular/common/http' ;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  formData: Project;
  list: Project[]; 
  readonly rootURL = "http://localhost:2228/api";

  constructor(private service: ProjectService, private http: HttpClient) { 
   
  }

  postProjectDetails(formData : Project) 
  {
     return this.http.post(this.rootURL + '/Project_Details1', formData);
  }

  refreshList():Observable<Project[]>{
      return this.http.get<Project[]>(this.rootURL+'/Project_Details1/'); 
  }

  refreshListByID(projectID: number):Observable<Project[]>{
    return this.http.get<Project[]>(this.rootURL+'/Project_Details1/'+projectID +'/'); 
}
  

}
