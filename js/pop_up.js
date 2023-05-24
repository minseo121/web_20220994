function addJavascript(jsname){
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('/js/cookie.js');

function pop_up(){
	var cookieCheck = getCookie("popupYN");
	if (cookieCheck != "N"){
		window.open("pop_up.html", "팝업 테스트", "width=400, height=300 top=10, left = 10");}
} //윈도우.오픈() 함수는 창을 열거나 닫는(.close)전용 함수이다.

function closePopup() {
	if (document.getElementById('check_popup').value) {
		setCookie("popupYN", "N", 1);
		console.log("쿠키를 설정합니다.");
		self.close();
	}
}


function show_clock(){
	let currentDate = new Date(); //날짜 객체 생성
	let divClock = document.getElementById('divClock');
	let msg = "현재 시간: ";
	if(currentDate.getHours()>12){ //12시보다 크면 오후
		msg += "오후";
		msg += currentDate.getHours()-12+"시";
	}else{
		msg += "오전";
		msg += currentDate.getHours()+"시";
	}
	
	msg += currentDate.getMinutes()+"분";
	msg += currentDate.getSeconds()+"초";
	divClock.innerText = msg;
	
	if(currentDate.getMinutes()>58){ //정각 1분 전 빨강색 출력
		divClock.style.color="red";
	}
	setTimeout(show_clock, 1000); //1초마다 갱신
}