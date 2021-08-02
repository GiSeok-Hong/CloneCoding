$(document).ready(function(){
  $.ajax({
    url: "json/hot_item.json",
    dataType: "json",
    success : function(data){
      if(data.length > 0){
        for(var i in data){
          var url = data[i].url;

          $(".hot_item ul").append( '<li><a href="#" target="_self">'+"<img src='img/"+data[i].url+ "' " + 'alt="item'+ (i+1) +'"></a></li>');

        }
      }
    }
  });


  function prev() {
		$('.hot_item li').slice(1).prependTo('.hot_item ul');
		$('.hot_item li').hide().filter(':lt(1)').show();
  }

  function next() {
    $('.hot_item li').slice(0,1).appendTo('.hot_item ul');
		$('.hot_item li').hide().filter(':lt(1)').show()
  }

  $('.hot_item .prev').click(function(){
    prev();
  });
  
  
	$('.hot_item .next').click(function(){
    next();
  });
  
  setInterval(next, 2000);

});