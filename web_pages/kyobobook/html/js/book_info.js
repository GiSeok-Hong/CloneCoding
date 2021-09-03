$(document).ready(function () {
  // 베르나르 베르베르의 다른 작품
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=authors",
    data:{ query:"베르나르 베르베르", size:20},
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {
    var box = $("#book_info > .author > .etc > ul > li")

    for(var i=0; i < box.length; i++){

      box.eq(i).append(
        '<a href="#"><img src="' + msg.documents[i].thumbnail + '"></a>' +
        '<h5><a href="#">' + msg.documents[i].title + '</a></h5>' + 
        '<h6>' + msg.documents[i].authors + '</h6>' +
        '<span>정가 : '+msg.documents[i].price+'원</span><span>판매가 : '+msg.documents[i].sale_price+'원</span>'
        );

    }
  });


  // 처음 4개의 리스트를 제외하고 나머지 숨김
  $('#book_info > .author > .etc > ul > li').filter(':gt(3)').hide();
  
  // 이전, 다음 버튼
  $('#book_info > .author > .etc > .prev').click(function(){
    // 가장 뒤의 4개를 잘라서 앞으로 붙임
		$('#book_info > .author > .etc > ul > li').slice(-4).prependTo('#book_info > .author > .etc > ul');
		$('#book_info > .author > .etc > ul > li').hide().filter(':lt(4)').show();
	});
	$('#book_info > .author > .etc > .next').click(function(){
    // 인덱스 0번에서 3번까지 잘라서 마지막에 붙임
		$('#book_info > .author > .etc > ul > li').slice(0,4).appendTo('#book_info > .author > .etc > ul');
		$('#book_info > .author > .etc > ul > li').hide().filter(':lt(4)').show()
	});




  // 전미연의 다른 작품
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=translators",
    data:{ query:"전미연", size:20},
    headers:{Authorization: "KakaoAK bc5789bb714b0042c7805de6ae8b6934"}
  })
  .done(function( msg ) {
    var box = $("#book_info > .translator > .etc > ul > li")

    for(var i=0; i < box.length; i++){

      box.eq(i).append(
        '<a href="#"><img src="' + msg.documents[i].thumbnail + '"></a>' +
        '<h5><a href="#">' + msg.documents[i].title + '</a></h5>' + 
        '<h6>' + msg.documents[i].authors + '</h6>' +
        '<span>정가 : '+msg.documents[i].price+'원</span><span>판매가 : '+msg.documents[i].sale_price+'원</span>'
        );

    }
  });


  // 처음 4개의 리스트를 제외하고 나머지 숨김
  $('#book_info > .translator > .etc > ul > li').filter(':gt(3)').hide();
  
  // 이전, 다음 버튼
  $('#book_info > .translator > .etc > .prev').click(function(){
    // 가장 뒤의 4개를 잘라서 앞으로 붙임
    $('#book_info > .translator > .etc > ul > li').slice(-4).prependTo('#book_info > .translator > .etc > ul');
    $('#book_info > .translator > .etc > ul > li').hide().filter(':lt(4)').show();
  });
  $('#book_info > .translator > .etc > .next').click(function(){
    // 인덱스 0번에서 3번까지 잘라서 마지막에 붙임
    $('#book_info > .translator > .etc > ul > li').slice(0,4).appendTo('#book_info > .translator > .etc > ul');
    $('#book_info > .translator > .etc > ul > li').hide().filter(':lt(4)').show()
  });

  /*  형태
  <li>
    <a href="#">
      <img>
    </a>
    <h5><a href="#"></a></h5>
    <span></span>
    <span></span>
  </li>
  */




  // 북카드 json
  $.ajax({
    url: "json/bookcard.json",
    dataType: "json",
    success : function(data){
      if(data.length > 0){
        for(var i in data){
          $("#book_info > .bookcard > ul > li").eq(i).append(
            '<img src="img/' + data[i].url + '" ' + 'alt=" ' + i + '" class="smallimg">'
          );
        }
      }
    }
  });

  // 처음 4개의 리스트를 제외하고 나머지 숨김
  $('#book_info > .bookcard > ul > li').filter(':gt(3)').hide();

  // 버튼 숨기기
  $('#book_info > .bookcard > .btn').stop().hide();

  // 버튼 show
  $('#book_info > .bookcard').stop().mouseover(function () {
    $('#book_info > .bookcard > .btn').stop().show();
  }).mouseout(function () {
    $('#book_info > .bookcard > .btn').stop().hide();
  });

  // 이전, 다음 버튼
  $('#book_info > .bookcard > .prev').click(function(){
    // 가장 뒤의 4개를 잘라서 앞으로 붙임
		$('#book_info > .bookcard > ul > li').slice(-4).prependTo('#book_info > .bookcard > ul');
		$('#book_info > .bookcard > ul > li').hide().filter(':lt(4)').show();
	});
	$('#book_info > .bookcard > .next').click(function(){
    // 인덱스 0번에서 3번까지 잘라서 마지막에 붙임
		$('#book_info > .bookcard > ul > li').slice(0,4).appendTo('#book_info > .bookcard > ul');
		$('#book_info > .bookcard > ul > li').hide().filter(':lt(4)').show()
	});
  




}); // end


