/**
 * @Author SongJiuHua
 * Created on 2017/1/23
 * @Description 路由配置
 */

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";

//loadChildren实现懒加载
//canActive 路由守卫， 如下所示，添加canActivate后，HomeComponent就被设置了访问权限
const appRoutes: Routes = [
  {path: '', redirectTo:'app', pathMatch:'full'},
  {path: 'app', component: AppComponent},
  {path: 'employee', loadChildren: './employee/employee.module#EmployeeModule'},
  {path: 'student', loadChildren: './student/student.module#StudentModule'}
];

export const appRouting:ModuleWithProviders  = RouterModule.forRoot(appRoutes);
