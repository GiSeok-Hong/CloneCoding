$(document).ready(function () {
   
  // // 기프트
  // $.ajax({
  //     method: "GET",
  //     url: "https://dapi.kakao.com/v3/search/book?target=title",
  //     data:{ query:"gift" },
  //     headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  // })
  // .done(function( msg ) {
  
  //     var box = $(".best > .itembox > .item > .left > .gift > li")
  
  //     for(var i=0; i < box.length; i++){
  
  //     // 순위
  //     box.eq(i).append('<div>' + (i+1) + '</div>');
      
  //     // 이미지 + 책 제목
  //     box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"><h5>' + msg.documents[i].title + '</h5></a>');
      
  //     // 작가
  //     box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
  //     }
  // });
      
      
    // 처음 목록만 보이기
    $('.today_book > .itembox > .left > ul > li:not(:first)').stop().hide();
  
  
    // 오늘의 책 네비게이션
    $('.today_book > .itembox > .sub_tit > ul > li').mouseover(function () {
        i = $(this).index();
        $('.today_book > .itembox > .left > ul > li').stop().hide();
        $('.today_book > .itembox > .left > ul > li').eq(i).stop().show();
        $('.today_book > .itembox > .sub_tit > ul > li').removeClass('current');
        $(this).addClass('current');
    });
  
  
    // 버튼 show / hide
    $(".today_book > .itembox > .left > ul > li").mouseover(function () {
      $(".today_book > .itembox > .left > ul > li > .btn").show();
    }).mouseout(function () {
      $(".today_book > .itembox > .left > ul > li > .btn").hide();
    });
  
  
  // 슬라이드 이전
  $('.today_book > .itembox > .left > ul > li > .prev').click(function () {
    var i = $(this).siblings("ul").children("li:visible").index();
    i--;
    if(i < 0 ){
      i = 0
    }
    $(this).siblings("ul").children("li").stop().hide();
    $(this).siblings("ul").children("li").eq(i).stop().show();
    // 아래 쪽 수 카운트
    $(this).siblings(".textbox").find(".count").text(Number(i + 1) + " / " + Number($(this).siblings("ul").children("li:last").index() + 1));
  });
    
  
  // 슬라이드 다음
  $('.today_book > .itembox > .left > ul > li > .next').click(function () {
    var i = $(this).siblings("ul").children("li:visible").index();
    i++;
    if(i > $(this).siblings("ul").children("li:last").index()){
      i = $(this).siblings("ul").children("li:last").index();
    }
    $(this).siblings("ul").children("li").stop().hide();
    $(this).siblings("ul").children("li").eq(i).stop().show();
    // 아래 쪽 수 카운트
    $(this).siblings(".textbox").find(".count").text(Number(i + 1) + " / " + Number($(this).siblings("ul").children("li:last").index() + 1));
  });
  
}); // end