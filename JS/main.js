const mobile_err_msg = document.getElementById("mobile_error");
var pass_err_msg = document.getElementById("pass_error");
const chAgree = document.getElementById("chAgree");
var email_err_msg = document.getElementById("email_error");
function validateEmail(email) {
    console.log(email_err_msg.style)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
    if(re.test(String(email).toLowerCase())){
        email_err_msg.style.display="none";
    }else email_err_msg.style.display="block ";

}
function validateCH(ch){
    if(ch.checked){
        document.getElementById('agree').style.display='none'
    }else
    document.getElementById('agree').style.display='block'
    
  
}
function validatePhone(mobile) {
    try {
        if (mobile.startsWith("077")) {
            if (mobile.length == 10) {
                mobile_err_msg.textContent="";
                return true;
            } else throw "valid mobile phone";
        } else throw "orange number plz";
    } catch (ex) {
        mobile_err_msg.textContent="";
        mobile_err_msg.textContent+=ex;
      
        return false;
    }
}
function validatePass(pass) {
    pass_err_msg.style.display="block ";
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,8}$/
    if(passw.test(String(pass)))
    pass_err_msg.style.display=" none";
 
   
   
}
let in_email = document.getElementById('email');
let btn_submit = document.getElementById('submit');
let in_mobile = document.getElementById('mobile');
let in_password = document.getElementById('password');
let ch_email = false;
let ch_mobile = false;
let ch_pass = false;
btn_submit.addEventListener('click', () => {
    validateEmail(in_email.value);
    validatePhone(in_mobile.value);
    validatePass(in_password.value);
    validateCH(chAgree);
})
function showPass() {
  
    if (in_password.type === "password") {
        in_password.type = "text";
    } else {
        in_password.type = "password";
    }
  }