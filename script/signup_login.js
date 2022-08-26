let login = async () => {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById('pw').value;

    let obj = {
        username,
        password
    }


    //Authentication function required here:
    // localStorage.setItem("login",JSON.stringify(obj));

    try{
        let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type':'application/json',
            }
        });
    
        let data = await res.json();


        let {username} = obj;
        let {token} = data;
        getProfile(username, token);
        console.log(data);
        
    }
    catch (err){
        alert('Invalid Credentials')
        console.log(err);
    }
}



function refer() {
    event.preventDefault();
    window.location.href = "./post_signup.html"
}

let sign_up = async () => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('pw').value;
    let name = "sample";
    let mobile = String(Math.floor(100000000 + Math.random() * 900000000));
    let description = "TestCase"
    let obj = {name,email,password,username,mobile,description};


    console.log(obj);
    // localStorage.setItem("signup",JSON.stringify(obj));

    try {
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {

            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type':'application/json',
            }
        });
    
        // alert("Registration Success >> Redirecting")
        // window.location.href = "./login.html.html"
        let data = await res.json();
        console.log('data',data);
    }
    catch (err) {
        // alert("User already Exists")
        // window.location.href = "./login.html"
        console.log(err);
    }
}





// Fetching the profile from the Server ------>

let getProfile = async (username,token) => {
    console.log(username,token);
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
        headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        },
    });

    let data = await res.json();
    console.log(data);
}