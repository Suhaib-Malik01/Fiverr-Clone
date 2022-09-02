let globalusername = JSON.parse(localStorage.getItem("curr_user")) || [];

showusername()


function showusername() {
  let user = JSON.parse(localStorage.getItem("curr_user")) || [];
  setTimeout(function () {
    if (user.username) {
      document.getElementById("userid").innerText = user.username;
      document.getElementById("signup").innerText = 'Logout'
      console.log(user);

      let log_btn = document.getElementById("signup").addEventListener("click", logout);

    } else {
      document.getElementById("userid").innerText = "Sign In";
    }

  }, 100);
}



let login = () => {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("pw").value;
  
  let signup = JSON.parse(localStorage.getItem("signup_data")) || [];

  if (signup.username == username && signup.password == password) {
    alert("Login in Successfull");
    // window.location.reload();

    let curr_user = { username };
    localStorage.setItem("curr_user", JSON.stringify(curr_user));

    showusername();
    window.location.href = './Homepage-after-login.html'
  } else {
    alert("Please check your credentials");
    window.location.reload();
  }

//_____________________________IGNORE THIS PART______________________________
  //Authentication function required here:

  // try{
  //     let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
  //         method: 'POST',
  //         body: JSON.stringify(obj),
  //         headers: {
  //             'Content-Type':'application/json',
  //         }
  //     });

  //     let data = await res.json();

  //     let {username} = obj;
  //     let {token} = data;
  //     getProfile(username, token);
  //     console.log(data);

  // }
  // catch (err){
  //     alert('Invalid Credentials')
  //     console.log(err);
  // }
//_____________________________IGNORE THIS PART______________________________
};

async function defaults() {
  let logged = (await JSON.parse(localStorage.getItem("curr_user"))) || [];
  document.getElementById("userid").innerText = logged.username;
}

function refer() {
  event.preventDefault();
  window.location.href = "./post_signup.html";
}

let sign_up = () => {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("pw").value;
  if (password.length<8){
    alert("Please Enter Valid Password")
    window.location.reload()
    return
  }

//_____________________________IGNORE THIS PART______________________________
  // let name = "sample";
  // let mobile = String(Math.floor(100000000 + Math.random() * 900000000));
  // let description = "TestCase"
  // let obj = {name,email,password,username,mobile,description};
//_____________________________IGNORE THIS PART______________________________


  let obj = { email, username, password };
  console.log(obj);

  localStorage.setItem("signup_data", JSON.stringify(obj));
  window.location.href = "./login.html";


//__________________IGNORE THIS PART (facing heroku error)___________________
  // try {
  //     let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {

  //         method: 'POST',
  //         body: JSON.stringify(obj),
  //         headers: {
  //             'Content-Type':'application/json',
  //         }
  //     });

  // alert("Registration Success >> Redirecting")
  // window.location.href = "./login.html.html"
  //     let data = await res.json();
  //     console.log('data',data);
  // }
  // catch (err) {
  //     // alert("User already Exists")
  //     // window.location.href = "./login.html"
  //     console.log(err);
  // }

//_____________________________IGNORE THIS PART______________________________
};

// Fetching the profile from the Server ------>

// let getProfile = async (username,token) => {
//     console.log(username,token);
//     let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
//         headers: {
//             'Content-Type':'application/json',
//             Authorization: `Bearer ${token}`
//         },
//     });

//     let data = await res.json();
//     console.log(data);
// }

//_____________________________IGNORE THIS PART______________________________


var logout = () => {
  window.location.reload();
  window.localStorage.removeItem('curr_user');
}
