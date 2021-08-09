$(document).ready(function () {

  $("#purchase > .path_bar > ul > .box").mouseover(function(){
    $(this).children("ul").stop().show();
    
  }).mouseout(function(){
    $(this).children("ul").stop().hide();
  });


});