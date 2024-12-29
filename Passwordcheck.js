function passwordcheck() {
    const name=document.getElementById("name").value;
    const email=document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const repassword=document.getElementById("cnfpassword").value;
    if(name.includes(' ')){
        document.getElementById("error1").innerHTML="Name Don't contain space"
        return false;
    }
    document.getElementById("error1").innerHTML = "";
    if(email.includes(' ')||(!email.endsWith('@gmail.com'))){
        document.getElementById("error2").innerHTML="Email should be in this format (abc@gmail.com)";
        return false;
    }
    document.getElementById("error2").innerHTML = "";

    if (password.length < 8) {
        document.getElementById("error3").innerHTML="Password should be minimum 8 characters long";
        return false;
    }
    document.getElementById("error3").innerHTML = "";
    if(!password===repassword){
        document.getElementById("error4").innerHTML="Password and Confirm Password should be same";
        return false;
    }
    document.getElementById("error4").innerHTML = "";

    return true;

}