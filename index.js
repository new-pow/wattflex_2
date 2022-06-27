
function login_dropdown(){
    var login_form = document.getElementById("login-div");
    if (login_form.style.display == 'none'){
        login_form.style.display='flex';
    }else{
        login_form.style.display='none';
    }
}
