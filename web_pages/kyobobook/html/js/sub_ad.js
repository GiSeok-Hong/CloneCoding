$(document).ready(function () {
  // 이 책의 원서/번역서
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"Sa majeste des chats"},
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {
    var box = $("#infowrap > .ad > .original > li")

    for(var i=0; i < box.length; i++){

      box.eq(i).append(
        '<div class="imgbox"><a href="#"><img src="' + msg.documents[i].thumbnail + '"></a></div>' +
        '<div><h5><a href="#">' + msg.documents[i].title + '</a></h5>' + 
        '<h6>' + msg.documents[i].authors + '</h6>' +
        '<span>정가 : '+msg.documents[i].price+'원</span><span>판매가 : '+msg.documents[i].sale_price+'원</span></div>'
        );

    }
  });

  // 이 분야의 베스트
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"소설"},
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {
    var box = $("#infowrap > .ad > .best > li")

    for(var i=0; i < box.length; i++){

      box.eq(i).append(
        '<div class="imgbox"><a href="#"><img src="' + msg.documents[i].thumbnail + '"></a></div>' +
        '<div><h5><a href="#">' + msg.documents[i].title + '</a></h5>' + 
        '<h6>' + msg.documents[i].authors + '</h6>' +
        '<span>정가 : '+msg.documents[i].price+'원</span><span>판매가 : '+msg.documents[i].sale_price+'원</span></div>'
        );

    }
  });


  // 이 분야의 신간
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=translator",
    data:{ query:"전미연"},
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {
    var box = $("#infowrap > .ad > .new > li")

    for(var i=0; i < box.length; i++){

      box.eq(i).append(
        '<div class="imgbox"><a href="#"><img src="' + msg.documents[i].thumbnail + '"></a></div>' +
        '<div><h5><a href="#">' + msg.documents[i].title + '</a></h5>' + 
        '<h6>' + msg.documents[i].authors + '</h6>' +
        '<span>정가 : '+msg.documents[i].price+'원</span><span>판매가 : '+msg.documents[i].sale_price+'원</span></div>'
        );

    }
  });  
}); // end


/*
<div>
  <a>
    <img>
  </a>
</div>
<div>
  <h5><a href="#">   </a></h5>
  <h6>     </h6>
  <span></span>
  <span></span>
</div>
*/