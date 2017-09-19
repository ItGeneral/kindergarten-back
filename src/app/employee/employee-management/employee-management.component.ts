import { Component, OnInit} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Employee} from '../../util/model/employee-model';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css'],
  providers: [NgModel]
})
export class EmployeeManagementComponent implements OnInit {

  constructor(private router: Router, private http: Http) { }

  private employeeList : Array<Employee>;
  /** 当前页码 */
  private currentPage: number = 1;
  private subject: Subject<any> = new Subject<any>();
  /** 编辑Employee对象 */
  private editEmployee: Employee = new Employee();
  /** 查询对象 */
  private searchEmployee: Employee = new Employee();

  private totalPage: number = 0;

  ngOnInit() {
    this.employeeList = [{
      'id':1,
      'employeeName': '张三',
      'employeeStatus': '在职',
      'employeePhone': '18801912222',
      'employeeEmail': 'xx@qq.com',
      'employeePosition': '教师',
      'employeeBirthday': '1991-10-10',
      'employeeDegree': '硕士',
      'employeeEduSchool': '清华大学',
      'employeeJoinDate': '2017-08-02'
    },{
      'id':2,
      'employeeName': '李四',
      'employeeStatus': '在职',
      'employeePhone': '18801912333',
      'employeeEmail': 'xx@163.com',
      'employeePosition': '教授',
      'employeeBirthday': '1968-10-10',
      'employeeDegree': '博士',
      'employeeEduSchool': '清华大学',
      'employeeJoinDate': '2017-08-03'
    }];
    this.search(1);
  }

  public search(currentPage:number): void{
    const param = {
      'pagination': {
        'page': currentPage,
        'rows': 10
      },
      'employee': {
        'employeeName': this.searchEmployee.employeeName,
        'employeePhone': this.searchEmployee.employeePhone,
        'employeePosition': this.searchEmployee.employeePosition
      }
    };
    this.http.post('http://localhost:8080/queryEmployee', JSON.stringify(param), new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(response => {
        let data = response.json();
        if(data.status == '200'){
          this.subject.next(Object.assign({},this.employeeList));
          this.currentPage = currentPage;
          this.totalPage = this.employeeList.length/10;
        }else{
          //this.errMsg = data.message;
        }
      }).subscribe();
  }

  public editEmployees(object:Employee): void{
    this.editEmployee = object;
  }


  /** 保存信息*/
  public saveEmployee():void {
    this.http.post('http://localhost:8080/saveEmployee', JSON.stringify(this.editEmployee), new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(response => {
        let data = response.json();
        if(data.status == '200'){
          this.subject.next(Object.assign({},this.employeeList));
        }else{
          //this.errMsg = data.message;
        }
      }).subscribe();
  }

}


