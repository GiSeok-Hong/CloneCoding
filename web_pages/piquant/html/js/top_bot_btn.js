$(document).ready(function () {
  
  // 버튼 불러오기
  var topBtn = document.getElementById("topBtn");
  var botBtn = document.getElementById("botBtn");

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      topBtn.style.display = "block";
      botBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
      botBtn.style.display = "none";
    }
  }


  // 클릭시 최상단으로 이동
  topBtn.onclick = function topBtn() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // 클릭시 최하단으로 이동
  botBtn.onclick = function botBtn() {
    // document.body.scrollTop = $(document).height();
    document.documentElement.scrollTop = $(document).height();;
  }

});