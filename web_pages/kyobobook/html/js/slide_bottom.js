$(document).ready(function () {
  $.ajax({
    url: "json/slide_bottom.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          var url = data[i].url;
          if(i < 3){
            $(".slide_bottom1 > .itembox").append('<div class="imgbox"><a href="#"><img src="img/' + url + '" ' + 'alt="banner' + i + '"></a></div>');
          } else {
            $(".slide_bottom2 > .itembox").append('<div class="imgbox"><a href="#"><img src="img/' + url + '" ' + 'alt="banner' + i + '"></a></div>');
          }
        }
      }
    }
  });
});  /* end */



