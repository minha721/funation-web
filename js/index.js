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

//main
// $(document).ready(function(){
//   $(".main-text1").hide();
//   $(".main-text1").fadeIn(3000);
//   $(".main-text2").hide();
//   $(".main-text2").fadeIn(3000);
//   $(".button-border").hide();
//   $(".button-border").slideDown(2000);
// })

// $(".main-text1").show(function(){
//   $(".button").hide();
//   $(".button").slideDown(2000);
// })

//first, second, third scroll
var isVisible = false;

$(window).on('scroll',function() {
    if (checkVisible($('#main'))&&!isVisible) {
      $("#dot1").attr("src", "../images/dot.png");
      $("#dot2").attr("src", "../images/dot2.png");
      $("#dot3").attr("src", "../images/dot2.png");
      $("#dot4").attr("src", "../images/dot2.png");
    }
    else if (checkVisible($('#first'))&&!isVisible) {
      $("#dot1").attr("src", "../images/dot2.png");
      $("#dot2").attr("src", "../images/dot.png");
      $("#dot3").attr("src", "../images/dot2.png");
      $("#dot4").attr("src", "../images/dot2.png");
    }
    else if (checkVisible($('#second'))&&!isVisible) {
      $("#dot1").attr("src", "../images/dot2.png");
      $("#dot2").attr("src", "../images/dot2.png");
      $("#dot3").attr("src", "../images/dot.png");
      $("#dot4").attr("src", "../images/dot2.png");
    }
    else {
      $("#dot1").attr("src", "../images/dot2.png");
      $("#dot2").attr("src", "../images/dot2.png");
      $("#dot3").attr("src", "../images/dot2.png");
      $("#dot4").attr("src", "../images/dot.png");
    }
});

function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}
