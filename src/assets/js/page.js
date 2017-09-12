/**
 * 分页
 * @param records 总记录数
 * @param currentPage 当前页码
 */
function loadPage(records, currentPage) {
  loadPage(records, currentPage, 10);
}

/**
 * 分页
 * @param records 总记录数
 * @param currentPage 当前页码
 * @param eachPageCount 分页
 */
function loadPage(records, currentPage, eachPageCount){
  if(records < 1){
    $(".pagination-nav").hide();
    return ;
  }
  if(eachPageCount == null || eachPageCount == '') eachPageCount = 10;
  //计算总页数
  var totalPageSize = Math.ceil(records/eachPageCount);
  //最多显示10个页码
  var pageSizeHtml = "";
  if(totalPageSize <= 10){
    for(var i = 1; i < totalPageSize + 1; i++){
      if(currentPage == i){
        pageSizeHtml += '<li class="active"><a href="javascript:;" onclick="search(' + i + ')">' + i + '</a></li>';
      }else{
        pageSizeHtml += '<li><a href="javascript:;" onclick="search(' + i + ')">' + i + '</a></li>';
      }
    }
  }else{
    if(currentPage > 6){
      var firstPageHtmlIndex = currentPage - 5;
      if((currentPage + 4) > totalPageSize){
        firstPageHtmlIndex = totalPageSize - 9;
      }
      for(var i = firstPageHtmlIndex; i < firstPageHtmlIndex + 10; i++){
        if(currentPage == i){
          pageSizeHtml += '<li class="active"><a href="javascript:;" onclick="search(' + i + ')">' + i + '</a></li>';
        }else{
          pageSizeHtml += '<li><a href="javascript:;" page="'+i+'" onclick="search(' + i + ')">' + i + '</a></li>';
        }
      }
    }else{
      for(var i = 1; i < 11; i++){
        if(currentPage == i){
          pageSizeHtml += '<li class="active"><a href="javascript:;" onclick="search(' + i + ')">' + i + '</a></li>';
        }else{
          pageSizeHtml += '<li><a href="javascript:;"  onclick="search(' + i + ')">' + i + '</a></li>';
        }
      }
    }
  }
  //disabled上一页
  var firstLi = "<li class='pagination-previous'><a href='javascript:;' aria-label='Previous' onclick='search(" + (currentPage - 1) + ")'><span aria-hidden='true'>&laquo;</span> </a></li>";
  if(currentPage == 1){
    firstLi = "<li class='pagination-previous disabled'><a href='javascript:;' aria-label='Previous'><span aria-hidden='true'>&laquo;</span> </a></li>";
  }
  //disabled下一页
  var lastLi = "<li class='pagination-next'><a href='javascript:;' aria-label='Next' onclick='search("+ (currentPage + 1) +")'><span aria-hidden='true'>&raquo;</span> </a></li>";
  if(currentPage == totalPageSize){
    lastLi = "<li class='pagination-next disabled'><a href='javascript:;' aria-label='Next'><span aria-hidden='true'>&raquo;</span> </a></li>";
  }
  var pageHtml = firstLi + pageSizeHtml + lastLi;
  $(".pagination").empty().append(pageHtml);
}
//调用ts方法
var searchTs = new AppModule.EmployeeModule.EmployeeManagementComponent();
function search(currentPage) {
  searchTs.search(currentPage);
}
