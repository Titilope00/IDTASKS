function login(event) {
    event.preventDefault();

    var username= document.getElementById('username').value;

    var password= document.getElementById('password');

    //perform login validation here

    if(username === "admin" && password ==="password"){
        alert("Login sucessful!");
    
        //redirect to another page to perform other actions
    }
        else{
            alert("invalid username or password.please try again.");
        }
    }


