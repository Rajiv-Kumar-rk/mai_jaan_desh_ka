 function validation(){
     var name = document.getElementById("name").value;
    /* var gender = document.getElementById("gender").value;*/
     var phone_number = document.getElementById("phone-number").value;
     var email = document.getElementById("email").value;
     var message = document.getElementById("message").value;
     var error_message = document.getElementById("error_message");
     var text;

     error_message.style.padding = "10px";

     if(name.length <5){
         text = "Please Enter Valid Name";
         error_message.innerHTML = text;
         return false;
     }

     /*if(gender != "Male" || gender != "Female" || gender != "Transgender" || gender != "Both" ){
        text = "Please Enter Valid Gender : Male , Female , Transgender or Both";
        error_message.innerHTML = text;
        return false;
     }*/

     if(isNaN(phone_number) || phone_number.length != 10){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length<6){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <=10){
        text = "Please Enter More Than 10 Characters";
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Submitted Successfully!")
    return true;
 }