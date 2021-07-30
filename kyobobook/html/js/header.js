$(document).ready(function () {
  
  // 최상단 배너
  $(".header_banner .close").click(function(){
    $(".header_banner").stop().slideUp();
  });


  // 바로콘 
  $(".barocon").mouseover(function(){
    $(".barocon_none").stop().show();
  }).mouseout(function(){
    $(".barocon_none").stop().hide();
  });


  // 매장 안내 및 회원혜택
  $(".guide > li").mouseover(function(){
    $(this).children("ul").stop().show();
  }).mouseout(function(){
    $(this).children("ul").stop().hide();
  });


  // 인기검색어



  // 헤더 광고
  $(".search_ad > .prev").click(function(){
    $(".search_ad > ul > li:last").prependTo(".search_ad > ul");
    $(".search_ad > ul").css({marginLeft:-220});
    $(".search_ad > ul").stop().animate({ marginLeft: 0 });
    
  });
  
  $(".search_ad > .next").click(function(){
    $(".search_ad > ul").stop().animate({marginLeft:-220},function(){
      $(".search_ad > ul > li:first").appendTo(".search_ad > ul");
      $(".search_ad > ul").css({marginLeft:0});
    });
  });


  // 네비게이션 바
  $(".nav_main > li").mouseover(function(){
    $(this).children("ul").stop().show();
  }).mouseout(function(){
    $(this).children("ul").stop().hide();
  });

});