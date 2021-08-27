$(document).ready(function () {
  $.ajax({
    url: "json/slide.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          var url = data[i].url;

          $(".slide_show > .slide_1").append('<div><a href="#"><img src="img/' + url + '" ' + 'alt="1_' + i + '"><h4>' + data[i].tit + '</h4><p>' + data[i].short + '</p></a></div>');

        }
      }
    }
  });


  var bg_color=["rgb(230, 233, 246)", "rgb(168, 218, 255)", "rgb(226, 242, 211)", "rgb(218, 236, 240)", "rgb(248, 244, 216)", "rgb(222, 243, 228)", "rgb(251, 234, 239)"];
  var i = 0;
  
  // 슬라이드 이전
  function prev() {
    $(".slide_show > li").eq(i).stop().hide();
    i--;
    if(i < 0 ){
      i = $(".slide_show > li:last").index();
    }
    $(".slide_show > li").eq(i).stop().show();
    $('#slider').css("background-color",bg_color[i]);
    $('.slide_nav > li').removeClass('current');
		$('.slide_nav > li').eq(i).addClass('current');
  }

  // 슬라이드 다음
  function next(){
    i++;
    if(i > $(".slide_show > li:last").index()){
      i = 0;
    }
    $(".slide_show > li").eq(i).stop().show();
    $('#slider').css("background-color",bg_color[i]);
    $(".slide_show > li").eq(i - 1).stop().hide();
    $('.slide_nav > li').removeClass('current');
		$('.slide_nav > li').eq(i).addClass('current');
  }


  // 슬라이드 버튼 show / hide
  $(".slider_left").mouseover(function () {
    $(".slider_left > div").show();
  }).mouseout(function () {
    $(".slider_left > div").hide();
  });


  $('.slider_left > .prev').click(function(){
    prev();
	});
  $('.slider_left > .next').click(function(){
    next();
	});

  // 슬라이드 3초마다 다음 페이지
  setInterval(next,3000);


  // 슬라이드 네비게이션
  $('.slide_nav > li').mouseover(function () {
    i = $(this).index();
		$('#slider').css("background-color",bg_color[i]);
		$('.slide_show > li').stop().hide();
    $('.slide_show > li').eq(i).stop().show();
    $('.slide_nav > li').removeClass('current');
		$(this).addClass('current');
	});

  
  // book_news
  $(".book_news > .close").click(function(){
    $(".book_news").stop().hide();
  });

  // slider_ad
  $(".slider_ad > .close").click(function(){
    $(".slider_ad").stop().hide();
  });

});  /* end */