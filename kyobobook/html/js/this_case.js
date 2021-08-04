$(document).ready(function(){
  $.ajax({
    url: "json/this_case.json",
    dataType: "json",
    success : function(data){
      if (data.length > 0) {
        
        for(var i in data){
          var url = data[i].url;
          var category = data[i].category;
          var tag1 = data[i].tag1;
          var tag2 = data[i].tag2;
          var tit = data[i].tit;
          var li1 = data[i].li1;
          var li2 = data[i].li2;
          var li3 = data[i].li3;
          var li4 = data[i].li4;
          var bg = data[i].bg;

          $(".this_case > .itembox > .item > ul").append(
            '<li><div class="tit tit' + i + '"><h6>' + category + '</h6>' +
            '<ul><li>' + tag1 + '</li><li>' + tag2 + '</li></ul></div>' +
            '<div class="box"><a href="#"><div><img src="img/' + url + '" alt="' + i + '"></div>' +
            '<p>' + tit + '</p></a>' +
            '<ul><li><a href="#">' + li1 + '</a></li>' +
            '<li><a href="#">' + li2 + '</a></li>' +
            '<li><a href="#">' + li3 + '</a></li>' +
            '<li><a href="#">' + li4 + '</a></li>' +
            '</ul></div></li>'
          );
          
          $('.this_case .tit' + i).css("background-color",bg);
        }
      }
    }
  });


  $('.this_case .prev').click(function(){
		$('.this_case > .itembox > .item > ul > li').slice(3).prependTo('.this_case > .itembox > .item > ul');
		$('.this_case > .itembox > .item > ul > li').hide().filter(':lt(3)').show();
  });
  
	$('.this_case .next').click(function(){
		$('.this_case > .itembox > .item > ul > li').slice(0,3).appendTo('.this_case > .itembox > .item > ul');
		$('.this_case > .itembox > .item > ul > li').hide().filter(':lt(3)').show()
	});


  // 슬라이드 버튼 show / hide
  $(".this_case > .itembox > .item").mouseover(function () {
    $(".this_case > .itembox > .item > .btn").show();
  }).mouseout(function () {
    $(".this_case > .itembox > .item > .btn").hide();
  });
});


