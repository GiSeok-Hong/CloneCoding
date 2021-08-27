$(document).ready(function () {
  // 1. 국내 도서
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"국내" },
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

    var box = $(".new_book > .itembox > .item > .korea > li")

    for(var i=0; i < box.length; i++){
      var str=msg.documents[i].contents;
      var str2 = str.substring(0, 80);

      // 이미지
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"/><div>' + str2 +'</div></a>');
      
      // 책 제목
      box.eq(i).append('<h5><a href="#">' + msg.documents[i].title + '</a></h5>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
      // 정가, 판매가
      box.eq(i).append('<span>정가 : '+msg.documents[i].price+'원</span><span>판매가 : '+msg.documents[i].sale_price+'원</span>');

    }
  });



  // 2. 외국도서
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"외국" },
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

    var box = $(".new_book > .itembox > .item > .foreign > li")

    for(var i=0; i < box.length; i++){
      var str=msg.documents[i].contents;
      var str2 = str.substring(0, 80);

      // 이미지
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"/><div>' + str2 +'</div></a>');
      
      // 책 제목
      box.eq(i).append('<h5><a href="#">' + msg.documents[i].title + '</a></h5>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
      // 정가, 판매가
      box.eq(i).append('<span>정가 : '+msg.documents[i].price+'원</span><span>판매가 : '+msg.documents[i].sale_price+'원</span>');

    }
  });



  // 3.eBook
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"전자책" },
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

    var box = $(".new_book > .itembox > .item > .ebook > li")

    for(var i=0; i < box.length; i++){
      var str=msg.documents[i].contents;
      var str2 = str.substring(0, 80);

      // 이미지
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"/><div>' + str2 +'</div></a>');
      
      // 책 제목
      box.eq(i).append('<h5><a href="#">' + msg.documents[i].title + '</a></h5>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
      // 정가, 판매가
      box.eq(i).append('<span>정가 : '+msg.documents[i].price+'원</span><span>판매가 : '+msg.documents[i].sale_price+'원</span>');

    }
  });



  // 4. sam
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"삶" },
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

    var box = $(".new_book > .itembox > .item > .sam > li")

    for(var i=0; i < box.length; i++){
      var str=msg.documents[i].contents;
      var str2 = str.substring(0, 80);

      // 이미지
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"/><div>' + str2 +'</div></a>');
      
      // 책 제목
      box.eq(i).append('<h5><a href="#">' + msg.documents[i].title + '</a></h5>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
      // 정가, 판매가
      box.eq(i).append('<span>정가 : '+msg.documents[i].price+'원</span><span>판매가 : '+msg.documents[i].sale_price+'원</span>');

    }
  });



  // 5. 음반/기프트
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"음반" },
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

    var box = $(".new_book > .itembox > .item > .music > li")

    for(var i=0; i < box.length; i++){
      var str=msg.documents[i].contents;
      var str2 = str.substring(0, 80);

      // 이미지
      box.eq(i).append('<a href="#">' + '<img src="' + msg.documents[i].thumbnail + '"/><div>' + str2 +'</div></a>');
      
      // 책 제목
      box.eq(i).append('<h5><a href="#">' + msg.documents[i].title + '</a></h5>');
      
      // 작가
      box.eq(i).append('<h6>' + msg.documents[i].authors + '</h6>');
      
      // 정가, 판매가
      box.eq(i).append('<span>정가 : '+msg.documents[i].price+'원</span><span>판매가 : '+msg.documents[i].sale_price+'원</span>');

    }
  });


  $('.new_book > .itembox > .item > ul:not(:first)').stop().hide();

  // new_book 네비게이션
  $('.new_book > .itembox > .sub_tit > ul > li').mouseover(function () {
    i = $(this).index();
		$('.new_book > .itembox > .item > ul').stop().hide();
    $('.new_book > .itembox > .item > ul').eq(i).stop().show();
    $('.new_book > .itembox > .sub_tit > ul > li').removeClass('current');
		$(this).addClass('current');
	});



  // 버튼 show / hide
  $(".new_book > .itembox > .item ").mouseover(function () {
    $(".new_book > .itembox > .item > .btn").show();
  }).mouseout(function () {
    $(".new_book > .itembox > .item > .btn").hide();
  });

  

  var i = 0;
  //  이전
  function prev() {
    $(".new_book > .itembox > .item > ul").eq(i).stop().hide();
    i--;
    if(i < 0 ){
      i = $(".new_book > .itembox > .item > ul:last").index();
    }
    $(".new_book > .itembox > .item > ul").eq(i).stop().show();
    $('.new_book > .itembox > .sub_tit > ul > li').removeClass('current');
		$('.new_book > .itembox > .sub_tit > ul > li').eq(i).addClass('current');
  }
  // 다음
  function next(){
    i++;
    if(i > $(".new_book > .itembox > .item > ul:last").index()){
      i = 0;
    }
    $(".new_book > .itembox > .item > ul").eq(i).stop().show();
    $(".new_book > .itembox > .item > ul").eq(i - 1).stop().hide();
    $('.new_book > .itembox > .sub_tit > ul > li').removeClass('current');
		$('.new_book > .itembox > .sub_tit > ul > li').eq(i).addClass('current');
  }




  $('.new_book > .itembox > .item > .prev').click(function(){
    prev();
  });
  
  
	$('.new_book > .itembox > .item > .next').click(function(){
    next();
  });

}); // end
