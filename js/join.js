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

class SignUp {
  constructor(firstName, lastName, birthdayDate, gender, emailAddress, phoneNumber, classNumber, random) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdayDate = birthdayDate;
    this.gender = gender;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.classNumber = classNumber;
    this.random = random;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get contactInfo() {
    return `${this.emailAddress} ${this.phoneNumber} ${this.random}`;
  }

  set contactInfo(contactInfo) {
    const [emailAddress, phoneNumber, random] = contactInfo.split(" ");
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
    this.random = random;
      
  }
}

let emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
let passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;

function validateEmail(email) {
    return emailRegex.test(email);
}

function validatePassword(password) {
    return passwordRegex.test(password);
}

function join(){ // 회원가입
    let form = document.querySelector("#form_main");
    let f_name = document.querySelector("#firstName");
    let l_name = document.querySelector("#lastName");
    let b_day = document.querySelector("#birthdayDate");
    let gender = document.querySelector("#inlineRadioOptions");
    let email = document.querySelector("#emailAddress");
    let p_number = document.querySelector("#phoneNumber");
    let class_check = document.querySelector(".select form-control-lg");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    
    form.action = "../index_join.html";
    form.method = "get";
    
    if(f_name.value.length === 0 || l_name.value.length === 0 || b_day.value.length === 0 || email.value.length === 0 || p_number.value.length === 0 || id.value.length ===0 || password.value.length===0) {
        alert("회원가입 폼에 모든 정보를 입력해주세요.(성별, 분반 제외)");
    }else if (!validateEmail(id.value)) {
        alert("유효한 아이디를 입력해주세요.");
    } else if (!validatePassword(password.value)) {
        alert("유효한 패스워드를 입력해주세요. (8~16자리, 숫자와 영문자 조합)");
    } else{
        setCookie("id", id.value);
        setCookie("password", password.value);
        session_join_set();
        form.submit();
    }
}