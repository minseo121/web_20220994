document.getElementById("search_btn").addEventListener('click', search_message);

var search_array=[];

function search_message(){
	let search_str = document.querySelector("#search_txt"); // 변수에 저장
	if(search_str.value.length===0){
		alert("검색어가 비었습니다. 입력해주세요.");
	}
	else{
		if(no_str(search_str.value)){ // 검색어가 적절한지 확인합니다.
			alert("검색을 수행합니다.");
			search_array.push(search_str.value);
			if (search_array.length > 10) {
                search_array.shift(); // 배열의 맨 앞의 값을 삭제합니다.
            }
			let text=document.getElementById("search_message").innerHTML = search_array.toString(); // 태그에 값 추가
			document.querySelector("#form_main").submit();
		} else {
			alert(search_str.value + "는 검색어로 적절하지 않습니다.");
		}
	}
}

function no_str(search_str){
	const banned_words = ['욕설1', '욕설2', '욕설3']; // 필터링할 비속어를 배열에 저장합니다.
	for(let i=0; i<banned_words.length; i++){
		if(search_str.includes(banned_words[i])){
			return false;
		}
	}
	return true;
}