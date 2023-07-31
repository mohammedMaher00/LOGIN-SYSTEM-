var loginEmail=document.getElementById('loginEmail');
var loginPassword=document.getElementById('loginPassword')
var signUpName=document.getElementById('signUpName')
var signUpEmail=document.getElementById('signUpEmail')
var signUpPass=document.getElementById('signUpPass')
var btnSignup=document.getElementById('btnSignup')
var btnLogin=document.getElementById('btnLogin')
var logOutBtn=document.getElementById('logOutBtn')
/******************/ 
var nameCheck=document.querySelector('.nameCheck')
var emailCheck=document.querySelector('.emailCheck')
var emailCheckDublicate=document.querySelector('.emailCheckDublicate')
var passCheck=document.querySelector('.passCheck')
var logEmailCheck=document.querySelector('.logEmailCheck')
var logPassCheck=document.querySelector('.logPassCheck')
var tmp;
var sayHi=document.getElementById('sayHi')
// sayHi.innerHTML=allusers[tmp].userName
// sayHi.innerHTML='gg'

var allusers=[];

/******************/ 

if(localStorage.getItem("users") != null){
    allusers=JSON.parse(localStorage.getItem("users"))
    
}
/******************/ 

function adduser(){
  
    
if(validateusername()==true){
   
    if(validateDublicateEmail()==false){
        
        
        if(validateEmail()==true){

if(validatepass()==true){

    var  user={
        userName:signUpName.value,
        userEmail:signUpEmail.value,
        userPass:signUpPass.value,
    }
    allusers.push(user)
    localStorage.setItem("users", JSON.stringify(allusers))
    window.location.href ='./index.html';
    
}
 }
}
}
}

/******************/ 

function validateusername(){
    var regxName=/\w{3,}/
   if(regxName.test(signUpName.value)){
    nameCheck.classList.replace("d-block","d-none")
    signUpName.classList.replace('is-invalid','is-valid')

    return true
   }else{
    signUpName.classList.add('is-invalid')
    nameCheck.classList.replace("d-none","d-block")
    return false
   }

}
/******************/ 
function validateEmail(){

    var regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if(regexEmail.test(signUpEmail.value)){
        emailCheck.classList.replace('d-block','d-none')
        signUpEmail.classList.replace('is-invalid','is-valid')

        return true

    }else{

        signUpEmail.classList.add('is-invalid')
        emailCheck.classList.replace('d-none','d-block')
        return false
    }

}
/******************/ 

function validateDublicateEmail(){
    
    for(i=0;i<allusers.length;i++){
        if(allusers[i].userEmail.toLowerCase()==signUpEmail.value.toLowerCase()){
            emailCheckDublicate.classList.replace('d-none','d-block')
            signUpEmail.classList.add('is-invalid')
       
            return true;
            
        }
       
    }
    emailCheckDublicate.classList.replace('d-block','d-none')
    return false;
}

/******************/ 
function validatepass(){
    regexpas= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(regexpas.test(signUpPass.value)){
        passCheck.classList.replace('d-block', 'd-none')
        signUpPass.classList.replace('is-invalid','is-valid')

        return true
    }else {

        passCheck.classList.replace('d-none', 'd-block')
        signUpPass.classList.add('is-invalid')
        return false
    }
}
// btnSignup.addEventListener('click',adduser)
// signUpName.addEventListener('input',validateusername)
// signUpEmail.addEventListener('input',validateEmail)
// signUpEmail.addEventListener('input',validateDublicateEmail)
// signUpPass.addEventListener('input',validatepass)
/******************/ 


function validateLogEmail(){
    for(var i=0 ; i<allusers.length;i++){

        if(allusers[i].userEmail.toLowerCase()==loginEmail.value.toLowerCase()){
            logEmailCheck.classList.replace('d-block','d-none')
            loginEmail.classList.replace('is-invalid','is-valid')
            
            tmp=i;
          
            // sayHi.innerHTML=allusers[tmp].userName
            
            
return true

        }
    }

loginEmail.classList.add('is-invalid')
logEmailCheck.classList.replace('d-none','d-block')

    return false
}


// loginEmail.addEventListener('input',validateLogEmail)

function vaildLogPass(){
    
    if(allusers[tmp].userPass.toLowerCase()==loginPassword.value.toLowerCase()){
        logPassCheck.classList.replace('d-block','d-none')
        loginPassword.classList.replace('is-invalid','is-valid')
        
        return true

    }else{
        loginPassword.classList.add('is-invalid')
        logPassCheck.classList.replace('d-none','d-block')
        return false
    }
}
// loginPassword.addEventListener('input',vaildLogPass)

function goTOUserPage(){
    console.log(tmp);
    if( validateLogEmail()==true){
       
        if(vaildLogPass()==true){
            localStorage.setItem('username',JSON.stringify(allusers[tmp].userName))
            window.location.href ='./userpage.html';
           
           
            
        }
    }
}
// btnLogin.addEventListener('click',goTOUserPage)
sayHi.innerHTML=`Hi ${JSON.parse(localStorage.getItem("username"))}`

function logOut(){
    window.location.href ='./index.html';

}
