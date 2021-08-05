$(document).ready(function(){
  $.ajax({
    url: "json/emotion.json",
    dataType: "json",
    success : function(data){
      if(data.length > 0){
        for(var i in data){

          $(".emotion > .itembox > ul").append(
            '<li><a href="#" target="_self">' + '<img src="img/' + data[i].url + '" ' + 'alt="emotion' + i + '">' +
            '<div>' + data[i].tit + '</div>' +
            '<p><span>' + data[i].tag + '</span>' + data[i].short + '</p></a></li>'
          );
        }
      }
    }
  });
});


