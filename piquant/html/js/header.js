window.onload = function () {
  $(document).ready(function(){
    $(".icon").click(function(){
      $(".gnb").slideToggle();
    });
    $(window).resize(function(){
      if(window.innerWidth >= 1100) {
        $(".gnb").show();
      }
    });
    $(window).resize(function(){
      if(window.innerWidth <= 1099) {
        $(".gnb").hide();
      }
    });
  });
}