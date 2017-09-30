/**
 * @Author SongJiuHua
 * Created on 2017/1/23
 * @Description 路由配置
 */

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {EmployeeLoginComponent} from './employee-login/employee-login.component';
import {EmployeeManagementComponent} from './employee-management/employee-management.component';

//loadChildren实现懒加载
//canActive 路由守卫， 如下所示，添加canActivate后，HomeComponent就被设置了访问权限
const employeeRoutes: Routes = [
  {path: '', redirectTo:'employee-manage', pathMatch:'full'},
  {path: 'login', component: EmployeeLoginComponent},
  {path: 'employee-manage', component: EmployeeManagementComponent}
];

export const employeeRoute:ModuleWithProviders = RouterModule.forRoot(employeeRoutes);
