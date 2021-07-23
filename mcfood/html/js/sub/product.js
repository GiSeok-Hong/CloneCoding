// sub 페이지에서 이미지 클릭 시 교체되는 함수
// window.onload 이부분이 없으면 실행되지 않음.
window.onload = function () {
  var bigPic = document.querySelector("#bigimg"); 
  var smallPics = document.querySelectorAll(".smallimg"); 

  for(var i = 0; i < smallPics.length; i++) {
    smallPics[i].addEventListener("click", chagePic);  
  }

  function chagePic() {
    var newPic = this.src; 
    bigPic.setAttribute("src", newPic);  
  } 

}
