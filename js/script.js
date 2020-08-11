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
         

         alert("Please Enter Valid Name")
         return true;
     }

     /*if(gender != "Male" || gender != "Female" || gender != "Transgender" || gender != "Both" ){
        text = "Please Enter Valid Gender : Male , Female , Transgender or Both";
        error_message.innerHTML = text;
        return false; 
     }*/

     if(isNaN(phone_number) || phone_number.length != 10){
        
        alert("Please Enter Valid Phone Number")
        return true;
    }

    if(email.indexOf("@") == -1 || email.length<6){
        
        alert("Please Enter Your Email")
        return true;
    }

    if(message.length <1){
        alert("Please Enter Your Message")
        return true;
    }

    alert("Form Submitted Successfully!")
    return true;
 }