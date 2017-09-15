import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output, Renderer2} from '@angular/core';

@Directive({
  selector: 'appPagination',
})
/**
 * 元数据中selector值为自定义的基于attribute的css选择器，用于通过元素的attribute来选择元素。
 * 通过注入ElementRef可以获取到当前元素的引用，可以使用nativeElement。
 * 通过注入Renderer2 可以使用统一的接口对当前元素进行访问和操作。由于Angular提倡的是一套框架，多种平台，所以建议使用统一的接口访问。
 * 实现生命周期中的AfterViewInit函数，可以是我们在指令初始化完成后完成一些操作。
 */
export class PaginationDirective implements AfterViewInit{
  /** 总页数 */
  @Input("totalPage") totalPage: number;
  /** 当前页 */
  @Input("currentPage") currentPage: number;
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private el: ElementRef,
    private render: Renderer2){}

  ngAfterViewInit(): void {
    let pageSizeHtml = "";
    if(this.totalPage <= 10){
      for(var i = 1; i < this.totalPage + 1; i++){
        if(this.currentPage == i){
          pageSizeHtml += '<li class="active"><a href="javascript:;" (click)="searchData(' + i + ')">' + i + '</a></li>';
        }else{
          pageSizeHtml += '<li><a href="javascript:;" (click)="searchData(' + i + ')">' + i + '</a></li>';
        }
      }
    }else{
      if(this.totalPage > 6){
        var firstPageHtmlIndex = this.totalPage - 5;
        if((this.totalPage + 4) > this.totalPage){
          firstPageHtmlIndex = this.totalPage - 9;
        }
        for(var i = firstPageHtmlIndex; i < firstPageHtmlIndex + 10; i++){
          if(this.totalPage == i){
            pageSizeHtml += '<li class="active"><a href="javascript:;" (click)="searchData(' + i + ')">' + i + '</a></li>';
          }else{
            pageSizeHtml += '<li><a href="javascript:;" page="'+i+'" (click)="searchData(' + i + ')">' + i + '</a></li>';
          }
        }
      }else{
        for(var i = 1; i < 11; i++){
          if(this.totalPage == i){
            pageSizeHtml += '<li class="active"><a href="javascript:;" (click)="searchData(' + i + ')">' + i + '</a></li>';
          }else{
            pageSizeHtml += '<li><a href="javascript:;"  (click)="searchData(' + i + ')">' + i + '</a></li>';
          }
        }
      }
    }
    //disabled上一页
    let firstLi = "<li class='pagination-previous'><a href='javascript:;' aria-label='Previous' (click)='searchData(" + (this.currentPage - 1) + ")'><span aria-hidden='true'>&laquo;</span> </a></li>";
    if(this.currentPage == 1){
      firstLi = "<li class='pagination-previous disabled'><a href='javascript:;' aria-label='Previous'><span aria-hidden='true'>&laquo;</span> </a></li>";
    }
    //disabled下一页
    let lastLi = "<li class='pagination-next'><a href='javascript:;' aria-label='Next' (click)='searchData("+ (this.currentPage + 1) +")'><span aria-hidden='true'>&raquo;</span> </a></li>";
    if(this.currentPage == this.totalPage){
      lastLi = "<li class='pagination-next disabled'><a href='javascript:;' aria-label='Next'><span aria-hidden='true'>&raquo;</span> </a></li>";
    }
    let pageHtml = firstLi + pageSizeHtml + lastLi;
    this.render.setProperty(this.el.nativeElement, "innerHTML", "<nav class='pagination-nav'><ul class='pagination employee-page'>" + pageHtml + "</ul></nav>");
  }

  public searchData(num: number): void{
    console.log(num);
  }


}
