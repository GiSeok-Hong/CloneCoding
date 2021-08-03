$(document).ready(function () {
  $.ajax({
    url: "json/slide.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          var url = data[i].url;

          $(".slide_show > .slide_1").append('<div><a href="#"><img src="img/' + data[i].url + '" ' + 'alt="1_' + (i + 1) + '"><h4>' + data[i].tit + '</h4><p>' + data[i].short + '</p></a></div>');

        }
      }
    }
  });



  var i = 0;    
  function next(){
    i++;
    if(i > $(".slide_show > li:last").index()){
      i = 0;
    }
    $(".slide_show > li").eq(i).stop().show();
    $(".slide_show > li").eq(i-1).stop().hide();
  }
  
  setInterval(next,2000);


});  /* end */






// $('.slide_nav > li').mouseover(function () {
//   var finder = $(this).attr('class');
//   $('.slide_show > li').hasClass(finder).show();
  
  
// });