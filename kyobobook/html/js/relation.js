$(document).ready(function () {
  // 이 책을 구매하신 분들이 함께 구매하신 상품입니다.
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"베르나르 베르베르", size:20},
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {
    var box = $("#relation > ul > li")

    for(var i=0; i < box.length; i++){

      box.eq(i).append(
        '<a href="#"><img src="' + msg.documents[i].thumbnail + '"></a>' +
        '<h5><a href="#">' + msg.documents[i].title + '</a></h5>' + 
        '<h6>' + msg.documents[i].authors + '</h6>' +
        '<span>정가 : '+msg.documents[i].price+'원</span><span>판매가 : '+msg.documents[i].sale_price+'원</span>'
        );

    }
  });


  // 처음 6개의 리스트를 제외하고 나머지 숨김
  $('#relation > ul > li').filter(':gt(5)').hide();
  
  // 이전, 다음 버튼
  $('#relation > ul > .prev').click(function(){
    // 가장 뒤의 6개를 잘라서 앞으로 붙임
		$('#relation > ul > li').slice(-6).prependTo('#relation > ul');
		$('#relation > ul > li').hide().filter(':lt(6)').show();
	});
	$('#relation > ul > .next').click(function(){
    // 인덱스 0번에서 5번까지 잘라서 마지막에 붙임
		$('#relation > ul > li').slice(0,6).appendTo('#relation > ul');
		$('#relation > ul > li').hide().filter(':lt(6)').show()
	});

}); // end


/*
<li>
  <a href="#">
    <img>
  </a>
  <h5><a href="#"></a></h5>
  <span></span>
  <span></span>
</li>
*/