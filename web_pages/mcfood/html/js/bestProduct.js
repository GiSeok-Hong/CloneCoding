$(document).ready(function(){
  $.ajax({
    url: "json/bestProduct.json",
    dataType: "json",
    success : function(data){
      if(data.length > 0){
        for(var i in data){
          var title = data[i].title;
          var subtitle = data[i].subtitle;
          var price = data[i].price;
          var url = data[i].url;
          
          //review random count
          var count = Math.floor(Math.random() * 1000);

          $(".best_con").append(
            '<div class="item_cont"><div class="item_img"><a href="sub.html" target="_self">' + "<img src='img/" + data[i].url + "' " + 'alt="' + data[i].title + '"></a><div class="best_icon">BEST</div><div class="item_link"><button class="icon_btn"><img src="img/basket.png" alt="장바구니"></button></div></div>'
          + '<div class="item_info"><a href="sub.html" target="_self"><strong>'+data[i].title+'</strong><span class="item_explain">'+data[i].subtitle+'</span></a>'      
          + '<span class="price">'+data[i].price+"</span>"
          + '<span class="t">' + "리뷰 " + count + "</span></div></div>"
          );

        }
      }
    }
  });
});