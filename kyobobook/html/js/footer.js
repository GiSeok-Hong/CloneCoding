$(document).ready(function () {
  
  // family_site 
  $(".family_site").mouseover(function(){
    $(this).children("ul").stop().show();
  }).mouseout(function(){
    $(this).children("ul").stop().hide();
  });


});