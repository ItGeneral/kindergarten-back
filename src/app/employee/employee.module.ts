import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import {employeeRoute} from './employee.routing';
import {EmployeeLoginComponent} from './employee-login/employee-login.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    employeeRoute,
    FormsModule
  ],
  declarations: [
    EmployeeLoginComponent,
    EmployeeRegisterComponent,
    EmployeeManagementComponent
  ]
})
export class EmployeeModule { }
