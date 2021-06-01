window.onload = function () {
  $(function(){
    $(".sc-btn1").click(function(){
      $(".tab1").show();
      $(".tab2").hide();
      $(".tab3").hide();
      $(".tab4").hide();
      $(".tab5").hide();
    });

    $(".sc-btn2").click(function(){
      $(".tab2").show();
      $(".tab1").hide();
      $(".tab3").hide();
      $(".tab4").hide();
      $(".tab5").hide();
    });

    $(".sc-btn3").click(function(){
      $(".tab3").show();
      $(".tab1").hide();
      $(".tab2").hide();
      $(".tab4").hide();
      $(".tab5").hide();
    });

    $(".sc-btn4").click(function(){
      $(".tab4").show();
      $(".tab1").hide();
      $(".tab2").hide();
      $(".tab3").hide();
      $(".tab5").hide();
    });

    $(".sc-btn5").click(function(){
      $(".tab5").show();
      $(".tab1").hide();
      $(".tab2").hide();
      $(".tab3").hide();
      $(".tab4").hide();
    });

  });
}