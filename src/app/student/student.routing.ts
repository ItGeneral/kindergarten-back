
import {RouterModule, Routes} from '@angular/router';
import {StudentInfoComponent} from './student-info/student-info.component';
import {ModuleWithProviders} from '@angular/core';

const studentRoutes: Routes = [
  {path: '', redirectTo:'student-info', pathMatch:'full'},
  {path: 'student-info', component: StudentInfoComponent}
];

export const studentRoute:ModuleWithProviders = RouterModule.forRoot(studentRoutes);
