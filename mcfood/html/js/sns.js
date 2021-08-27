$(document).ready(function(){
  $.ajax({
    url: "json/sns.json",
    dataType: "json",
    success : function(data){
      if(data.length > 0){
        for(var i in data){
          var url = data[i].url;

          $(".insta_widget").append( '<div class="insta_item"><a href="#" target="_self">'+"<img src='img/"+data[i].url+ "' " + 'alt="sns'+ (i+1) +'"></a></div>');

        }
      }
    }
  });
});