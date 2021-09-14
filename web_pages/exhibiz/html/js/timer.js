$(document).ready(function () {
  
  // 전시회 개최일    ex) 1640012400000
  var countDownDate = new Date("December 20, 2021 24:00:00").getTime();

  // var countDownDate = new Date("September 24, 2021 24:00:00").getTime();

  function countDown() {

    // 현재 날짜     ex) 1629425134158
    var now = new Date().getTime();

    // 개최일까지 남은 기간  ex) 10587251826
    var distance = countDownDate - now;

    // 남은 기간을 일로 변환     Math.floor() 함수는 소숫점을 버린후 정수로 반환    ex) 122
    var days1 = Math.floor(distance / (24 * 60 * 60 * 1000));

    // 남은 일수를 문자열로 만든 후 각 문자를 ""로 나누어 반환   ex) ["1", "2", "2"]
    var days2 = days1.toString().split("")

    // 일수를 계산하고 남은 시간을 구함  ex ) 12
    var hours1 = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

    // 남은 시간을 문자열로 만든 후 각 문자를 ""로 나누어 반환 ex) ["1", "2"]
    var hours2 = hours1.toString().split("")

    // 남은 분을 구함
    var minutes1 = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));

    // 구한 분을 문자열로 만든 후 반환  ex) ["5", "4"]
    var minutes2 = minutes1.toString().split("")

    // 남은 초를 구함
    var seconds1 = Math.floor((distance % (60 * 1000)) / 1000);

    // 구한 초를 문자열로 만든 후 반환 ex) ["1", "1"]
    var seconds2 = seconds1.toString().split("")


    // 남은 일 표시
    if (days1 < 100 && days1 >= 10) {
      // days2 = "0" + days2; // -> 09, 이런식으로 출력이 됨   
      days1 = "0" + days1;
      days2 = days1.toString().split("")
    } else if (days1 < 10) {
      days2 = "00" + days2;
    };
    $("#section-countdown > .container > .itembox").eq(0).children(".countdown").html("<span>" + days2[0] + "</span><span>" + days2[1] + "</span><span>" + days2[2] + "</span>");

    // 남은 시간 표시
    if (hours1 < 10) {
      hours2 = "0" + hours2;
    };
    $("#section-countdown > .container > .itembox").eq(1).children(".countdown").html("<span>" + hours2[0] + "</span><span>" + hours2[1] + "</span>");

    // 남은 분 표시
    if (minutes1 < 10) {
      minutes2 = "0" + minutes2;
    };
    $("#section-countdown > .container > .itembox").eq(2).children(".countdown").html("<span>" + minutes2[0] + "</span><span>" + minutes2[1] + "</span>");

    // 남은 초 표시
    if (seconds1 < 10) {
      seconds2 = "0" + seconds2;
    };
    $("#section-countdown > .container > .itembox").eq(3).children(".countdown").html("<span>" + seconds2[0] + "</span><span>" + seconds2[1] + "</span>");

    // 개최일이 되면 중지
    if (distance < 0) {
      clearInterval(countDown);
    }
  }

  setInterval(countDown, 1000)
});