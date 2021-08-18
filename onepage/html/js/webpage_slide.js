$(document).ready(function () {

  // 프로젝트 01 : 교보문고
  $(".kyoboimg").mouseenter(function () {
    $(".kyoboimg > img").stop().animate({marginTop:"-2950px"},10000)
  }).mouseleave(function(){
    $(".kyoboimg > img").stop().animate({marginTop:"0px"},2000)
  });
  
  // 프로젝트 02 : exhibiz
  $(".exhibizimg").mouseenter(function(){
    $(".exhibizimg > img").stop().animate({marginTop:"-2900px"},10000)
  }).mouseleave(function(){
    $(".exhibizimg > img").stop().animate({marginTop:"0px"},2000)
  });

  // 프로젝트 03 : piquant
  $(".piquantimg").mouseenter(function(){
    $(".piquantimg > img").stop().animate({marginTop:"-2400px"},8000)
  }).mouseleave(function(){
    $(".piquantimg > img").stop().animate({marginTop:"0px"},2000)
  });

  // 프로젝트 04 : 몽촌반찬
  $(".mcfoodimg").mouseenter(function(){
    $(".mcfoodimg > img").stop().animate({marginTop:"-2300px"},7500)
  }).mouseleave(function(){
    $(".mcfoodimg > img").stop().animate({marginTop:"0px"},2000)
  });


});

