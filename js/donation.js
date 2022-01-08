//헤더 색깔 변화
$(function(){
  var header = $('.navbar');
  var page = $('#main');
  var pageOffsetTop = page.offset().top;
  $(window).resize(function(){
    pageOffsetTop = page.offset().top;
  });

  $(window).on('scroll', function(){
    if($(window).scrollTop() > pageOffsetTop) {
      header.addClass('down');
    } else {
      header.removeClass('down');
    }
  });
});
