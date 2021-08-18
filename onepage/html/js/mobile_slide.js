$(document).ready(function () {
  var box_1 = $(".mobile_01 > div");
  var box_2 = $(".mobile_02 > div");        
  var box_1_height = box_1.height();      // 460px
  var box_2_height = box_2.height();      // 460px
  var margin_plus1 = 0;
  var margin_plus2 = 0;

  function mobile_slide() {

    // exhibiz 이미지 길이 3564px  나머지 344
    if (box_1.children("img").height() % box_1_height < box_1_height) {
      margin_plus1 += box_1.children("img").height() % box_1_height;
    } else {
      margin_plus1 += box_1_height;
    };

    // piquant 이미지 길이 2769px  나머지 9
    // if (box_2.children("img").height() % box_2_height < box_2_height) {
    //   margin_plus2 += box_2.children("img").height() % box_2_height;
    // } else {
    //   margin_plus2 += box_2_height;
    // };

    // 속도 조절을 위해 margin_plus2는 460px로 고정값 줌
    margin_plus2 += 460;

    // 3564px - 460px = 3104px
    if (margin_plus1 >= box_1.children("img").height() - box_1_height) {
        margin_plus1 = 0;
    }

    // 2769 - 460px = 2309px
    if (margin_plus2 >= box_2.children("img").height() - box_2_height) {
        margin_plus2 = 0;
    }

    box_1.children("img").stop().animate({marginTop: -margin_plus1}, 700);
    box_2.children("img").stop().animate({marginTop: -margin_plus2}, 700);
  }

  setInterval(mobile_slide, 3000);

});