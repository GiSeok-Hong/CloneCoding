$(document).ready(function () {
  // 교보문고종합
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"인기" },
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

    var box = $(".best > .itembox > .item > .left > .total > li")

    for(var i=0; i < box.length; i++){

      // 순위
      box.eq(i).append('<div>' + (i+1) + '</div>');
      
      // 이미지 + 책 제목
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"><h5>' + msg.documents[i].title + '</h5></a>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
    }
  });
  


  // 인터넷일간
  $.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data:{ query:"인터넷" },
  headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

  var box = $(".best > .itembox > .item > .left > .internet > li")

  for(var i=0; i < box.length; i++){

      // 순위
      box.eq(i).append('<div>' + (i+1) + '</div>');
      
      // 이미지 + 책 제목
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"><h5>' + msg.documents[i].title + '</h5></a>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
  }
  });
  
    

  // 외국도서
  $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data:{ query:"foreign" },
      headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

      var box = $(".best > .itembox > .item > .left > .foreign > li")

      for(var i=0; i < box.length; i++){

      // 순위
      box.eq(i).append('<div>' + (i+1) + '</div>');
      
      // 이미지 + 책 제목
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"><h5>' + msg.documents[i].title + '</h5></a>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
      }
  });




  // eBook
  $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data:{ query:"전자책" },
      headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

      var box = $(".best > .itembox > .item > .left > .eBook > li")

      for(var i=0; i < box.length; i++){

      // 순위
      box.eq(i).append('<div>' + (i+1) + '</div>');
      
      // 이미지 + 책 제목
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"><h5>' + msg.documents[i].title + '</h5></a>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
      }
  });

    


  // 오디오북
  $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data:{ query:"오디오북" },
      headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

      var box = $(".best > .itembox > .item > .left > .audio > li")

      for(var i=0; i < box.length; i++){

      // 순위
      box.eq(i).append('<div>' + (i+1) + '</div>');
      
      // 이미지 + 책 제목
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"><h5>' + msg.documents[i].title + '</h5></a>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
      }
  });
    
    



  // sam
  $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data:{ query:"삶" },
      headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

      var box = $(".best > .itembox > .item > .left > .sam > li")

      for(var i=0; i < box.length; i++){

      // 순위
      box.eq(i).append('<div>' + (i+1) + '</div>');
      
      // 이미지 + 책 제목
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"><h5>' + msg.documents[i].title + '</h5></a>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
      }
  });
    
    


  // 기프트
  $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data:{ query:"gift" },
      headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

      var box = $(".best > .itembox > .item > .left > .gift > li")

      for(var i=0; i < box.length; i++){

      // 순위
      box.eq(i).append('<div>' + (i+1) + '</div>');
      
      // 이미지 + 책 제목
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"><h5>' + msg.documents[i].title + '</h5></a>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
      }
  });
    
    
  // 처음 목록만 보이기
  $('.best > .itembox > .item > .left > ul:not(:first)').stop().hide();


  // best 네비게이션
  $('.best > .itembox > .sub_tit > ul > li').mouseover(function () {
    i = $(this).index();
	  $('.best > .itembox > .item > .left > ul').stop().hide();
    $('.best > .itembox > .item > .left > ul').eq(i).stop().show();
    $('.best > .itembox > .sub_tit > ul > li').removeClass('current');
	  $(this).addClass('current');
  });










  // 오른쪽 북튜버의 책방
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"유튜브" },
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

    var box = $(".best > .itembox > .item > .right > ul > li")

    for(var i = 0; i < 2; i++){
    
    // 이미지 + 책 제목 + 작가
    box.eq(i).append('<div><a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"><h5>' + msg.documents[i].title + '</h5></a>'
                     + '<h6>' + msg.documents[i].authors + '</h6></div>');
    
    
    box.eq(i).append('<div><a href="#">' + '<img src="' + msg.documents[i+2].thumbnail + '"><h5>' + msg.documents[i+2].title + '</h5></a>'
                      + '<h6>' + msg.documents[i+2].authors + '</h6></div>');
    
    }
  });


  // 처음 목록만 보이기
  $('.best > .itembox > .item > .right > ul > li:not(:first)').stop().hide();


  // best 네비게이션
  $('.best > .itembox > .item > .right > .top > div').mouseover(function () {
    i = $(this).index();
    $('.best > .itembox > .item > .right > ul > li').stop().hide();
    $('.best > .itembox > .item > .right > ul > li').eq(i).stop().show();
    $('.best > .itembox > .item > .right > .top > div').removeClass('current');
    $(this).addClass('current');
  });

}); // end