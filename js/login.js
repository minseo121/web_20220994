function addJavascript(jsname){
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('/js/security.js');
addJavascript('/js/session.js');
addJavascript('/js/cookie.js');

function login_count() {
    let count = getCookie("login_cnt");
    if (count) {
        count = parseInt(count) + 1;
    } else {
        count + 1;
    }
    setCookie("login_cnt", count, 1); // 1일 저장
    console.log("로그인 횟수: " + count);
}

function logout_count() {
    let count = getCookie("logout_cnt");
    if (count) {
        count = parseInt(count) + 1;
    } else {
        count + 1;
    }
    setCookie("logout_cnt", count, 1); // 1일 저장
    console.log("로그아웃 횟수: " + count);
}

function login(){
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");
    
    
    form.action = "../index_login.html";
    form.method = "get"
	login_count();
    
	if(check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.");
            setCookie("id", id.value, 1); // 1일 저장
            alert("쿠키 값 :" + id.value);
        } 
    else { // 아이디 체크 x
            setCookie("id", id.value, 0); //날짜를 0 - 쿠키 삭제
    }

	
    if(id.value.length === 0 || password.value.length === 0){
        alert("아이디와 비밀번호를 모두 입력해주세요.");
    }else{
		login_check();
    }
}

function login_check() {
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");

    // 이메일 형식 검사
    let emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!emailRegex.test(id.value)) {
        alert("올바르게 이메일을 입력해주세요.");
        return;
    }

    // 패스워드 형식 검사
    let passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    if (!passwordRegex.test(password.value)) {
        alert("8자 이상, 16자 이내에 알파벳에 해당하는 비밀번호를 입력해주세요.");
        return;
    }

    session_set(); // 세션 생성
    document.querySelector("#form_main").submit();
}

function get_id(){
	if(true){
        decrypt_text();
    }
    else{
		var getParameters = function(paramName){ // 변수 = 함수(이름)
		var returnValue; // 리턴값을 위한 변수 선언
		var url = location.href; // 현재 접속 중인 주소 정보 저장
		var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
			for(var i = 0; i < parameters.length; i++) { 
			  var varName = parameters[i].split('=')[0];

				if (varName.toUpperCase() == paramName.toUpperCase()) {
					returnValue = parameters[i].split('=')[1];
					return decodeURIComponent(returnValue);
            // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
          }
       } // 2중 for문 끝
	}; // 함수 끝
		alert(getParameters('id') + '님 반갑습니다!'); // 메시지 창 출력
	}
}

function logout(){
	session_del(); // 세션 삭제
	logout_count();
	location.href="index.html";
}
function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
   let id = document.querySelector("#floatingInput");
   let check = document.querySelector("#idSaveCheck");
   let get_id = getCookie("id");
    
   if(get_id) { 
      id.value = get_id; 
      check.checked = true; 
   }
	session_check();
}
