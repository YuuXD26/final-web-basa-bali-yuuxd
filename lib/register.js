let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}



let stateRegister = false;
let stateBottom = false;

function toggleregister() {


  if (stateRegister) {
    document.getElementById("password1").setAttribute("type", "password");
    document.getElementById("eye1").style.color = "#7a797e";
    stateRegister = false;
  } else {
    document.getElementById("password1").setAttribute("type", "text");
    document.getElementById("eye1").style.color = "#1e88bf";
    stateRegister = true;
  }
}

function togglebottom() {


  if (stateBottom) {
    document.getElementById("password2").setAttribute("type", "password");
    document.getElementById("eye2").style.color = "#7a797e";
    stateBottom = false;
  } else {
    document.getElementById("password2").setAttribute("type", "text");
    document.getElementById("eye2").style.color = "#1e88bf";
    stateBottom = true;
  }
}


function saveRegistrationData() {
  let name, email, password;

  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password1").value;

  let user_records = JSON.parse(localStorage.getItem("users")) || [];

  if (user_records.some((user) => user.email === email)) {
    alert("Email sudah digunakan");
  } else {
    user_records.push({
      name: name,
      email: email,
      password: password,
    });
    localStorage.setItem("users", JSON.stringify(user_records));

    window.location.href = "otp.html";
  }
}