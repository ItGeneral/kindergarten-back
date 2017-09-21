import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  /** 总页数 父组件传值给当前组件*/
  @Input("totalPage") totalPage: number;
  /** 当前页 父组件传值给当前组件*/
  @Input("currentPage") currentPage: number;
  /** 子组件广播值给父组件 */
  @Output()
  changePage: EventEmitter<number> = new EventEmitter<number>();

  public pageList: Array<number> = new Array<number>();

  constructor() { }

  ngOnInit() {
    this.loadPage();
  }

  public loadPage():void{
    if(this.totalPage <= 10) {
      for (let i = 1; i < this.totalPage + 1; i++) {
        this.pageList.push(i);
      }
    }else{
      if(this.totalPage > 6){
        let firstPageHtmlIndex = this.currentPage - 5;
        if((this.currentPage + 4) > this.totalPage){
          firstPageHtmlIndex = this.totalPage - 9;
        }
        for(let i = firstPageHtmlIndex; i < firstPageHtmlIndex + 10; i++){
          this.pageList.push(i);
        }
      }else{
        for(let i = 1; i < 11; i++){
          this.pageList.push(i);
        }
      }
    }
  }

  public changePageFunc(pageNo: number):void {
    if (pageNo != this.currentPage) {
      this.changePage.emit(pageNo);
      this.currentPage = pageNo;
      this.pageList = [];
      this.loadPage();
    }
  }
}
