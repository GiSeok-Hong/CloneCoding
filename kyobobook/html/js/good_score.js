$(document).ready(function () {
  // 1. 오늘의발견
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"내 아이의 부자수업" },
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

    var box = $(".good_score > .itembox > .item > .sample")

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

      // 아이콘
      box.eq(i).append('<div class="icon"></div>');
    }
  });



  // 2. 평점 높은 상품
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"요리" },
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {

    var box = $(".good_score > .itembox > .item > .list > ul > li")

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
      box.eq(i).append('<span>정가 : ' + msg.documents[i].price + '원</span><span>판매가 : ' + msg.documents[i].sale_price + '원</span>');
      
      // 아이콘
      box.eq(i).append('<div class="icon"></div>');

    }
  });



}); // end
