import { Component, OnInit } from '@angular/core';
import {Student} from '../../util/model/student-model';
import {RequestOptions, Headers, Http} from '@angular/http';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  constructor(public http: Http) { }

  /** 当前页码 */
  private currentPage: number = 1;
  /** 总页数 */
  private totalPage: number = 2;
  /** 数据列表 */
  public studentList: Array<Student>;
  /** 编辑Employee对象 */
  private editStudent: Student = new Student();
  /** 查询对象 */
  private searchStudent: Student = new Student();

  private subject: Subject<any> = new Subject<any>();

  ngOnInit() {
    this.studentList = [
      { id: "1",
        studentNo: 28120121, //学号
        studentName: "王五", //姓名
        studentAge: 5, //年龄
        studentGender: "男", //性别
        studentBirthday: "2012-10-02", //生日
        studentClass: "一年级", //班级
        studentGrade: "一班", //年级
        studentJoinTime: "2017-09-01", //入学时间
        createTime: "2017-09-01", //创建时间
        remark: "", //备注
        studentTuition: 3200, //学费
        studentEmail: "123@163.com", //邮箱
        studentPhone: "18800001111"
     }
    ]
  }

  public search(currentPage:number): void{

  }

  public addStudentFunc(): void{
    this.editStudent = new Student();
  }

  public editStudentFunc(object:Student): void{
    this.editStudent = object;
  }

  /** 保存信息*/
  public saveStudent():void {
    this.http.post('http://localhost:8080/saveStudent', JSON.stringify(this.editStudent), new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(response => {
        let data = response.json();
        if(data.status == '200'){
          this.subject.next(Object.assign({},this.studentList));
        }else{

        }
      }).subscribe();
  }
}
