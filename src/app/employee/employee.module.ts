import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import {employeeRoute} from './employee.routing';
import {EmployeeLoginComponent} from './employee-login/employee-login.component';
import { FormsModule } from "@angular/forms";
import {DataTableModule} from 'angular2-datatable';
import {PaginationComponent} from '../util/pagination/pagination.component';


@NgModule({
  imports: [
    CommonModule,
    employeeRoute,
    FormsModule,
    DataTableModule
  ],
  declarations: [
    EmployeeLoginComponent,
    EmployeeRegisterComponent,
    EmployeeManagementComponent,
    PaginationComponent
  ],
  providers:[]
})
export class EmployeeModule { }

