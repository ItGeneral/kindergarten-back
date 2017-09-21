import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {studentRoute} from './student.routing';
import {StudentInfoComponent} from './student-info/student-info.component';
import {PaginationModule} from '../util/pagination/pagination.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    studentRoute,
    PaginationModule
  ],
  declarations: [
    StudentInfoComponent,
  ],
  providers:[]
})
export class StudentModule { }

