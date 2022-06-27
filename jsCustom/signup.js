window.onload = function() {

    document.getElementById('signup-form').onsubmit = function() {
        var name = document.getElementById('name');
		
		if(name.value == "") {
			alert("성명을 입력하세요");
			name.focus();
			
			return false; // 다음 페이지로 이동하지 않게
		}

        if(name.value.length < 2) {
            alert("이름은 2자 이상이어야 합니다");
            name.focus();
            name.value="";

            return false;
        }

        var password2 = document.getElementById('password2');
		var passwordCheck = document.getElementById('passwordCheck');

        

        if(password2.value == "") {
			alert("비밀번호를 입력하세요");
			password2.focus();
			
			return false; 
		}

        if(password2.value.length < 10) {
            alert("비밀번호는 10자 이상이어야 합니다");
            password2.focus();
            password2.value="";
			
			return false;
        }

        if(password2.value != passwordCheck.value) {
			alert("비밀번호 확인이 일치하지 않습니다");
			passwordCheck.value = ""; 
			passwordCheck.focus();
			
			return false; 
		}

        var check1 = document.getElementById('check1');
        var check2 = document.getElementById('check2');
        var check3 = document.getElementById('check3');

        if(check1.checked == false || check2.checked == false || check3.checked == false) {
			alert("이용 약관 항목을 모두 동의해야 합니다");
			
			return false;
		}


    };

};