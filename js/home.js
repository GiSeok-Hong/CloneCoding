$(document).ready(function(){
  function ajax_move() {
    $("#ajax_img").stop().animate({ marginTop: "40px" }, 700, function () {
      $("#ajax_img").stop().animate({ marginTop: "0" }, 700);
    });
  }
  setInterval(ajax_move, 1400);
  
  function x_move() {
    $("#x_img").stop().animate({ marginBottom: "15px" }, 800, function () {
      $("#x_img").stop().animate({ marginBottom: "0" }, 800);
    });
  }
  setInterval(x_move, 1600);

  function js_move(){
    $("#js_img").stop().animate({ marginBottom: "40px" }, 1000, function () {
      $("#js_img").stop().animate({ marginBottom: "0" }, 1000);
    });
  }
  setInterval(js_move, 2000);

  function api_move() {
    $("#api_img").stop().animate({ marginBottom: "25px" }, 500, function () {
      $("#api_img").stop().animate({ marginBottom: "0" }, 500);
    });
  }
  setInterval(api_move, 1000);

  function json_move() {
    $("#json_img").stop().animate({ marginTop: "40px" }, 500, function () {
      $("#json_img").stop().animate({ marginTop: "0" }, 500);
    });
  }
  setInterval(json_move, 1000);

  function media_move() {
    $("#media_img").stop().animate({ marginBottom: "50px" }, 500, function () {
      $("#media_img").stop().animate({ marginBottom: "0" }, 500);
    });
  }
  setInterval(media_move, 1000);

  function setting_move() {
    $("#setting_img").stop().animate({ marginTop: "35px" }, 1000, function () {
      $("#setting_img").stop().animate({ marginTop: "0" }, 1000);
    });
  }
  setInterval(setting_move, 2000);
  
});