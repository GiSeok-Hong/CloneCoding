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
    $(".today_book > .itembox > .left > ul > li > ul").mouseover(function () {
      $(".today_book > .itembox > .left > ul > li > ul > div").show();
    }).mouseout(function () {
      $(".today_book > .itembox > .left > ul > li > ul > div").hide();
    });
  
  
    var i = 0;
    // 슬라이드 이전
    function prev() {
      i--;
      if(i < 0 ){
        i = 0
      }
      $(".today_book > .itembox > .left > ul > li > ul > li").eq(i+1).stop().hide();
      $(".today_book > .itembox > .left > ul > li > ul > li").eq(i).stop().show();
  
    }
  
    // 슬라이드 다음
    function next(){
      i++;
      if(i > $(".today_book > .itembox > .left > ul > li > ul > li:last").index()){
        i = $(".today_book > .itembox > .left > ul > li > ul > li:last").index();
      }
      $(".today_book > .itembox > .left > ul > li > ul > li").eq(i).stop().show();
      $(".today_book > .itembox > .left > ul > li > ul > li").eq(i - 1).stop().hide();
  
    }
  
    $('.today_book > .itembox > .left > ul > li > ul > .prev').click(function(){
      prev();
    });
    
    
    $('.today_book > .itembox > .left > ul > li > ul > .next').click(function(){
      next();
    });
  
  }); // end