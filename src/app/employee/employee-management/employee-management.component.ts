import { Component, OnInit } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  constructor(public router: Router, public http: Http) { }

  public employeeList : Array<any> = [];
  /*当前页码*/
  public currentPage: number;

  public subject: Subject<any> = new Subject<any>();

  public editEmployee: object;

  ngOnInit() {
    this.search(1);
    this.employeeList = [{
      'employeeName': '张三',
      'employeePhone': '18801912222',
      'employeeEmail': 'xx@qq.com',
      'employeePosition': '教师',
      'employeeBirthday': '1991-10-10',
      'employeeDegree': '硕士',
      'employeeEduSchool': '清华大学'
    },{
      'employeeName': '李四',
      'employeePhone': '18801912333',
      'employeeEmail': 'xx@163.com',
      'employeePosition': '教授',
      'employeeBirthday': '1968-10-10',
      'employeeDegree': '博士',
      'employeeEduSchool': '清华大学'
    }];
  }

  public search(currentPage:number): void{
    this.http.post("http://localhost:8080/queryEmployee", JSON.stringify(this.employeeList), new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(response => {
        let data = response.json();
        if(data.status == "200"){
          this.subject.next(Object.assign({},this.employeeList));
          this.currentPage = currentPage;
          loadPage(this.employeeList.length, currentPage);
        }else{
          //this.errMsg = data.message;
        }
      }).subscribe();
  }

  public editEmployees(object:object): void{
    this.editEmployee = object;
  }


  public previousPage(): void{
    this.search(this.currentPage - 1);
  }

  public nextPage(): void{
    this.search(this.currentPage + 1);
  }

}
/*调用js*/
declare function loadPage(records:number, currentPage:number);
