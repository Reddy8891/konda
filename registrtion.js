
function matchPassword() {
    var names=document.myform.user.value;
    var pw1 = document.getElementById("psw1");

    var pw2 = document.getElementById("psw2");
    if(names.length>6){
        alert("name is ok")
    }else if(names.length!=6){
        alert("please give atkeast 6 characters")

    }
    else if(pw1 != pw2)
    {	
        alert("Passwords did not match");
    } else {
        alert("Password created successfully");
    }
  }
