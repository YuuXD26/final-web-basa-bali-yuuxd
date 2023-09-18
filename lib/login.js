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



let state = false; 


function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("eye").style.color = "#7a797e";
        state = false;
    } else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("eye").style.color = "#1e88bf";
        state = true;
    }
}

// const accounts = [
//   { email: 'yuuxdrestapi@gmail.com', password: 'Angkul123' },
//   { email: 'zavelous345@gmail.com', password: 'Angkul123' },
// ];

// function checkCredentials(email, password) {
//   for (const account of accounts) {
//     if (account.email === email && account.password === password) {
//       return true;
//     }
//   }
//   return false;
// }

// const loginForm = document.querySelector('form');

// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const emailInput = document.querySelector('input[name="email"]');
//   const passwordInput = document.querySelector('input[name="pass"]');
//   const email = emailInput.value;
//   const password = passwordInput.value;

//   if (checkCredentials(email, password)) {
  
//     const successPopup = document.querySelector('.sukses');
//     successPopup.style.display = 'block';

   
//     const successButton = successPopup.querySelector('button');
//     successButton.addEventListener('click', () => {
    
//       window.location.href = './home.html';
//     });
//   } else {
   
//     const invalidPopup = document.querySelector('.invalid');
//     invalidPopup.style.display = 'block';

  
//     emailInput.value = '';
//     passwordInput.value = '';

//     const invalidButton = invalidPopup.querySelector('button');
//     invalidButton.addEventListener('click', () => {
    
//       invalidPopup.style.display = 'none';
//     });
//   }
// });

function login() {
  let email, password;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_records.some((v)=>{
    return v.email == email && v.password == password
  })){
    let current_user = user_records.filter((v)=>{
      return v.email == email && v.password == password
    })[0]

    localStorage.setItem("name", current_user.name);
    localStorage.setItem("email", current_user.email);
    const successPopup = document.querySelector('.sukses');
    successPopup.style.display = 'block';

   
   const successButton = successPopup.querySelector('button');
   successButton.addEventListener('click', () => {
    
     window.location.href = '../index.html';
   });

  }
  else{
   const invalidPopup = document.querySelector('.invalid');
        invalidPopup.style.display = 'block';
   
  }
}


function closeInvalidPopup() {
   const invalidPopup = document.querySelector('.invalid');
   invalidPopup.style.display = 'none';
   
   const email = document.getElementById("email");
   const password = document.getElementById("password");
   email.value = '';
   password.value = '';
 }
 