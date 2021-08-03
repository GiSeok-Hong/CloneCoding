$(document).ready(function(){
  $.ajax({
    url: "json/only_kbook.json",
    dataType: "json",
    success : function(data){
      if(data.length > 0){
        for(var i in data){
          var url = data[i].url;

          $(".only_kbook ul").append( '<li><a href="#" target="_self">'+"<img src='img/"+url+ "' " + 'alt="icon'+ i +'"></a></li>');

        }
      }
    }
  });


  $('.only_kbook .prev').click(function(){
		$('.only_kbook li').slice(7).prependTo('.only_kbook ul');
		$('.only_kbook li').hide().filter(':lt(7)').show();
	});
	$('.only_kbook .next').click(function(){
		$('.only_kbook li').slice(0,7).appendTo('.only_kbook ul');
		$('.only_kbook li').hide().filter(':lt(7)').show()
	});

});