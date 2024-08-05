function ShowError(errorElment, errorMassage){

    document.querySelector("."+errorElement).classList.add("display-error")
    document.querySelector("."+errorElement).innerHTML="errorMassage"
}

function clearError(){
    let error=documnet.querySelectorAll(".error");
    for(let error of erorrs){
        error.classList.remove("display-error");
    }
}


let form = document.forms['sign-up-form'];
form.onsubmit =function(event){

    clearError();

    if(form.email.value===""){

        ShowError("email-error","You have enter your email");
        return false;
    }

    event.preventDefault();
}