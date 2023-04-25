var close_time;//시간 정보
var close_time2=10;

clearTimeout(close_time); //재호출 정지
close_time=setTimeout("close_window()", 10000);
show_time();

function show_time(){
	let divClock = document.getElementById('Time');
	divClock.innerText=close_time2;
	close_time2--;
	setTimeout(show_time, 1000);
}
function close_window(){
	window.close();
}
