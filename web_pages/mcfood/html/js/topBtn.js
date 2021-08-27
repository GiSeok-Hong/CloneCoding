$(document).ready(function () {
  // 버튼 불러오기
  var mybutton = document.getElementById("topBtn");

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


  // 클릭시 최상단으로 이동
  mybutton.onclick = function TopBtn() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

});