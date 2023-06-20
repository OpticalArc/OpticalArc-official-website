var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("name").value;

  if (name.length == 0) {
    nameError.innerHTML = " Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }
  nameError.innerHTML =
    '<i class="fas fa-check-circle" style="color: green;"></i>';

  return true;
}

function validateEmail(){
    var email=document.getElementById("email").value;

    if(email.length==0){
        emailError.innerHTML='Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-a]*[\.][a-z]{2,4}$/)){
        emailError.innerHtml='Email Invalid';
        return false;

    }
      emailError.innerHTML =
    '<i class="fas fa-check-circle" style="color: green;"></i>';

  return true;
}
function validateSubject(){
    var message=document.getElementById("subject").value;
    var required=20;
    var left = required - message.length;
 

    false(left>0)
    {
        messageError.innerHTML=left + 'more characters required';
        return false;
    }
    messageError.innerHTML= '<i class="fas fa-check-circle" style="color: green;"></i>';
        return true;
}
function validateMessage(){
    var message=document.getElementById("message").value;
    var required=30;
    var left = required - message.length;
 

    false(left>0)
    {
        messageError.innerHTML=left + 'more characters required';
        return false;
    }
    messageError.innerHTML= '<i class="fas fa-check-circle" style="color: green;"></i>';
        return true;
}

function validateForm(){
    if(!validateName()   ||!validateEmail() ||!validateSubject() ||!validateMessage()){
        submitError.style.diaplay='block';
        submitError.innerHTML='please fix error to submit';
       setTimeout(function (){submitError.style.disply="none";},3000);
        return false;
    }

}