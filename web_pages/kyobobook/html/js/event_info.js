$(document).ready(function(){
  $.ajax({
    url: "json/event_info.json",
    dataType: "json",
    success : function(data){
      if(data.length > 0){
        for(var i in data){
          //  data[i].url;     data[i].tit     data[i].period
          $("#event_info > .box").append(
            '<li><div><a href="#"><img src="img/' + data[i].url + '"></a></div>' +
            '<div><p>' + data[i].tit + '</p><span>' + data[i].period + '</span></div></li>'
          );

        }
      }
    }
  });
});




/*
<li>
  <div>
    <a href="#">
      <img>
    </a>
  </div>
  <div>
    <p>
      내용
    </p>
    <span>
      내용
    </span>
  </div>
</li>
*/