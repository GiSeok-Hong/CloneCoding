$(document).ready(function () {

  // 경로상에 있는 하위 박스 show/hide
  $("#purchase > .path_bar > ul > .box").mouseover(function(){
    $(this).children("ul").stop().show();
    
  }).mouseout(function(){
    $(this).children("ul").stop().hide();
  });

  // 주요 일간지 북섹션 추천도서 하위 박스 show/hide
  $("#purchase > .itembox > .right > .top > .rank > .popup").mouseover(function(){
    $(this).children("div").stop().show();
    
  }).mouseout(function(){
    $(this).children("div").stop().hide();
  });




  // 주문수량 +, - 버튼
  var amount_value = Number(document.getElementById("result").defaultValue);
  $("#purchase > .itembox > .right > .btnbox > .amount > .plus").click(function(){
    amount_value++;
    document.getElementById("result").value = amount_value;
  });
  $("#purchase > .itembox > .right > .btnbox > .amount > .minus").click(function(){
    amount_value--;
    if(amount_value < 1){
      amount_value=1;
    }
    document.getElementById("result").value = amount_value;
  });

  
});