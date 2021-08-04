$(document).ready(function(){
  $.ajax({
    url: "json/story.json",
    dataType: "json",
    success : function(data){
      if(data.length > 0){
        for(var i in data){
          var url = data[i].url;
          var category = data[i].category;
          var tit = data[i].tit;
          var short = data[i].short;

          $(".story > .itembox > ul").append('<li><div class="item"><a href="#"><div><img src="img/' + url + '" alt="' + i + '">' +
            '<div class="ribon">' + category + '</div></div>' +
            '<h5>' + tit + '</h5>' +
            '<span>' + short + '</span></a></div></li>'
          );

        }
      }
    }
  });

});