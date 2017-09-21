import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import {employeeRoute} from './employee.routing';
import {EmployeeLoginComponent} from './employee-login/employee-login.component';
import { FormsModule } from "@angular/forms";
import {PaginationModule} from '../util/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    employeeRoute,
    FormsModule,
    PaginationModule
  ],
  declarations: [
    EmployeeLoginComponent,
    EmployeeRegisterComponent,
    EmployeeManagementComponent,
  ],
  providers:[]
})
export class EmployeeModule { }

