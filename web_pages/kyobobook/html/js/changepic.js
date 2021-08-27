// window.onload 이부분이 없으면 실행되지 않음.
window.onload = function () {
  var bigPic = document.querySelector("#bigimg"); 
  var smallPics = document.querySelectorAll(".smallimg"); 
  var count = $("#book_info > .bookcard > .big > .count");

  for (var i = 0; i < smallPics.length; i++) {
    // 클래스가 smallimg인 요소에 mouseover 이벤트가 발생하면 changePic() 함수 실행
    smallPics[i].addEventListener("mouseover", changePic);  
  }

  function changePic() {
    // 현재 선택된 smallimg 요소의 이미지 경로를 변수 newPic에 저장
    var newPic = this.src;
    var newNum = this.alt;
    // 아이디 bigimg의 src 속성을 변경
    bigPic.setAttribute("src", newPic);
    count.text(Number(newNum) + 1 + " / 12");
  } 

}
