import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


const routes: Routes = [
  {     
    path: 'projects',
    component: ProjectsListComponent 
  },
  {     
    path: 'projects/category/:id',
    component: ProjectsListComponent 
  },
  {     
    path: 'projects/projectID/:id', 
    component: ProjectDetailsComponent 
  },
  {     
    path: '**', 
    component: ErrorComponent 
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
