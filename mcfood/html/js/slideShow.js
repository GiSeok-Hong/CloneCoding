window.onload = function(){
  var slideIndex = 0;
  SlideShow();

  function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("slidebox");

    // 모든 슬라이드 이미지들을 display none으로 지정
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(SlideShow, 2000); // 2초 마다 자기 자신을 호출
  }
}