$(document).ready(function(){
  $.ajax({
    url: "json/review_list.json",
    dataType: "json",
    success : function(data){
      if(data.length > 0){
        for(var i in data){
          // tit   user_id   date    recommend    star    content
          $("#review > .book_log > .review_list").append(
            '<li><div class="tit">' +
            '<span><a href="#">' + data[i].tit + '</a></span>' +
            '<span><a href="#">' + data[i].user_id + '</a></span>' +
            '<span>|</span>' +
            '<span>' + data[i].date + '</span>' +
            '<span>|</span>' +
            '<span>추천 : ' + data[i].recommend +'</span>' +
            '<span>|</span>' +
            '<span>' + data[i].star + '</span>' +
            '</div><div><p>' + data[i].content + '</p></div></li>'
          );

        }
      }
    }
  });

});

//   <li>
//   <div class="tit">
//     <span><a href="#">문명</a></span>
//     <span><a href="#">pa**yj01</a></span>
//     <span>|</span>
//     <span>2021-07-12</span>
//     <span>|</span>
//     <span>추천: 0 </span>
//     <span>|</span>
//     <span>★★★★★</span>
//   </div>
//   <div>
//     <p>
//       전염병과 테러, 전쟁이 인간에게 미치는 영향력이 얼마만큼일까?   인류문명이 이런 많은 상황들 속에서 얼마만큼 이기고, 버티고, 싸워서 이길 수 있을까 생각해보게 한다.   인류 문명이 벼랑 끝에 다다른 세상을 무대로 고양이 바스테트가 모험을 펼치는 스토리인데   다소 난해하다고 생각했던 처음과는 달리, 읽으면 읽을수록 몰입했다.   고양이들이 일차 목표로 가지는 기하급수적으로 증가하는 쥐 떼의 공격을 물리치고 살아남으려는 것. 
//     </p>
//   </div>
// </li>