let login = () => {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById('pw').value;

    let obj = {
        email,
        password
    }


    //Authentication function required here:
    localStorage.setItem("login",JSON.stringify(obj));
}



function refer() {
    event.preventDefault();
    window.location.href = "./post_signup.html"
}

let sign_up = () => {
    let email = document.getElementById("email").value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('pw').value;
    let obj = {email,username,password};

    localStorage.setItem("signup",JSON.stringify(obj));
}