function validateName(){
    let username=document.getElementById('username')
    let name_error=document.getElementById('name-error')

    console.log(username.value)

    if(username.value.trim()==''){
        name_error.innerHTML="Username can not be blank"
        return false
    }

    else if(username.value.length<3){
        name_error.innerHTML="Username should not be less than 3 characters"
        return false
    }

    else if(username.value.length>20){
        name_error.innerHTML="Username should not be more than 20 characters"
        return false
    }

    else{
        name_error.innerHTML="<span>Validated !!</span>"
        return true
    }
}

function validatePassword(){
    let password=document.getElementById('password')
    let password_error=document.getElementById('password-error')

    if(password.value.trim()==''){
        password_error.innerHTML="Password can not be blank"
        return false
    }

    else if(password.value.length<3){
        password_error.innerHTML="Password should not be less than 3 characters"
        return false
    }

    else if(password.value.length>20){
        password_error.innerHTML="Password should not be more than 20 characters"
        return false
    }

    else{
        password_error.innerHTML="<span>Validated !!</span>"
        return true
    }
}

function validateEmail(){
    let regExEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let email=document.getElementById('email')
    let email_error=document.getElementById('email-error')

    if(email.value.trim()==''){
        email_error.innerHTML="Email can not be blank"
        return false
    }
    else if(!email.value.match(regExEmail)){
        email_error.innerHTML="Invalid Email ID"
        return false
    }
    else{
        email_error.innerHTML="<span>Validated !!</span>"
        return true
    }
}

function validateForm(){
    if(validateName() && validatePassword() && validateEmail()){
    //  || !validatePhone() ){
        return true
    }else{
        return false
    }
}