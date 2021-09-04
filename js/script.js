
var smail = document.getElementById("semail");
var pass1 = document.getElementById("password1");
var pass2 = document.getElementById("password2");
var phone = document.getElementById("phone");



function svalidate()
{ 
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    

    if(res.test(smail.value)!="1")
    { 
        
      window.alert("Email Is Invalid");
	  document.getElementById('semail').innerHTML="*Please enter a username*";
        return false;
    }
	
	
    else if(phoneno.test(phone.value)!="1")
    {  
        window.alert("Please enter a valid phone number :");
        return false;
    }
    else if(psr.test(pass1.value)!="1")
    {
        window.alert("Password Is Invalid");
        window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
        window.alert("try again");
        return false;
    }
    else  if(pass1.value!=pass2.value)
    {
        window.alert("Passwords Doesnt Match, Please Re-enter :");
        return false;
    }
    else
    { 
        window.alert("validation Success");
        return true;
    }
    
};   


var mail = document.getElementById("email");
var pswd = document.getElementById("password");
function lvalidate()
{ 
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    

    if(res.test(mail.value)!="1")
    {
        window.alert("Email Is Invalid");
        return false;
    }
    else if(psr.test(pswd.value)!="1")
    {
        window.alert("Password Is Invalid, try again");
        window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");

        return false;
    }
    else
    {
        window.alert("validation Success");
        return true;
    }
    
};



