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

  $('.search > .top_searched > ul:last').stop().hide();
  $('.search > .prev').click(function(){
		$('.search > .top_searched > ul').slice(1).prependTo('.search > .top_searched');
		$('.search > .top_searched > ul').hide().filter(':lt(1)').show();
	});
	$('.search > .next').click(function(){
		$('.search > .top_searched > ul').slice(0,1).appendTo('.search > .top_searched');
		$('.search > .top_searched > ul').hide().filter(':lt(1)').show()
	});



  // 헤더 광고
  $(".search_ad > .prev").click(function(){
    $(".search_ad > ul > li:last").prependTo(".search_ad > ul");
    $(".search_ad > ul").css({marginLeft:-220});
    $(".search_ad > ul").stop().animate({ marginLeft: 0 });

    var i = $(".search_ad > ul > li > a > img").attr("alt");
    $(this).siblings(".count").text(i + " / " + Number($(".search_ad > ul > li:last").index() + 1));
  });

  $(".search_ad > .next").click(function(){
    $(".search_ad > ul").stop().animate({marginLeft:-220},function(){
      $(".search_ad > ul > li:first").appendTo(".search_ad > ul");
      $(".search_ad > ul").css({ marginLeft: 0 });
      
      var i = $(".search_ad > ul > li > a > img").attr("alt");
      $(this).siblings(".count").text(i + " / " + Number($(".search_ad > ul > li:last").index() + 1));
    });
  });


  // 네비게이션 바
  $(".nav_main > li").mouseover(function(){
    $(this).children("ul").stop().show();
  }).mouseout(function(){
    $(this).children("ul").stop().hide();
  });

});