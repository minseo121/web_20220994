var iSecond; // 초단위로 환산
var timerchecker = null;

window.onload = function() {
    fncClearTime();
    initTimer();
}

function fncClearTime() {
    iSecond = 300; // 5분에 해당하는 초 수
}

Lpad = function(str, len) {
    str = str + "";
    while (str.length < len) {
        str = "0" + str;
    }
    return str;
}

initTimer = function() {
    var timer = document.getElementById("timer");
    rMinute = parseInt(iSecond / 60) % 5;
    rSecond = iSecond % 60;

    if (iSecond > 0) {
        timer.innerHTML = "&nbsp;" + "자동 로그아웃까지 " + Lpad(rMinute, 2) + "분 " + Lpad(rSecond, 2) + "초 ";
        iSecond--;
        timerchecker = setTimeout(initTimer, 1000); // 1초 간격으로 체크
    } else {
        logoutUser();
    }
}

function logoutUser() {
	alert("5분이 지나 자동 로그아웃됩니다.");
    session_del(); // 세션 삭제
    location.href = "index.html";
}
