$(document).ready(function(){
  $.ajax({
    url: "json/mdRight.json",
    dataType: "json",
    success : function(data){
      if(data.length > 0){
        for(var i in data){
          var title = data[i].title;
          var price = data[i].price;
          var url = data[i].url;

          $(".mdright").append( '<div class="right_box"><a href="#"><img src="img/'+data[i].url+'" '+ 'alt="'+ data[i].title+ '"><div class="imgtext"><span>' + data[i].title +'<br>'+ data[i].price + '</span></div></a></div>'); 


        }
      }
    }
  });
});