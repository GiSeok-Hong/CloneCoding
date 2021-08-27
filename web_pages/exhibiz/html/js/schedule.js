$(function () {

  $("#section-schedule > .container > .itembox > ul > li").stop().mouseover(function () {
    i = $(this).index();
    $(this).eq();
    $('#section-schedule > .container > .itembox > .tabs > .tab').stop().hide();
    $('#section-schedule > .container > .itembox > .tabs > .tab').eq(i).stop().show();
    $('#section-schedule > .container > .itembox > ul > li').removeClass('current');
		$(this).addClass('current');
  });

});
