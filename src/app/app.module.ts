import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' ;


import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule,MatNativeDateModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FilterProjectsComponent } from './filter-projects/filter-projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectDocumentsComponent } from './project-documents/project-documents.component';
import { from } from 'rxjs';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectFlowchartComponent } from './project-flowchart/project-flowchart.component';
import { ProjectFlowchart1Component } from './project-flowchart1/project-flowchart1.component';
import { ProjectFlowchartPopupComponent } from './project-flowchart-popup/project-flowchart-popup.component';
import { MatSidenavModule} from '@angular/material';
import { ProjectService } from './services/project.service';
import { RouterModule, Routes } from '@angular/router';
import {DataService} from './services/data.service';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import { ExpansionStepsExampleComponent } from './expansion-steps-example/expansion-steps-example.component';
import { MessageboxComponent } from './messagebox/messagebox.component';


/*const appRoutes: Routes = [
  {
    path: 'projects/projectsflowchart',
    component: ProjectFlowchart1Component,

  },
  {
    path: 'projects',
    component:HomeComponent ,

  },
  {
    path: 'projects/create',
    component: CreateProjectPopupComponent,

  },
];*/


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    HeaderComponent,
    FilterProjectsComponent,
    ProjectDetailsComponent,
    ProjectDocumentsComponent,
    CreateProjectComponent,
    ProjectFlowchartComponent,
    ProjectFlowchart1Component,
    ProjectFlowchartPopupComponent,
    ProjectsListComponent,
    ExpansionStepsExampleComponent,
    MessageboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatStepperModule,
    MatExpansionModule,
    MatChipsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    HttpClientModule,
   
    AppRoutingModule
   // RouterModule.forRoot(appRoutes)

  ],
  entryComponents: [
    CreateProjectComponent,
    MessageboxComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
