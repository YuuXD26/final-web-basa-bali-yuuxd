const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[index].value = "";
      if (index < codes.length - 1) {
        setTimeout(() => codes[index + 1].focus(), 10);
      }
    } else if (e.key === "Backspace") {
      if (index > 0) {
        setTimeout(() => codes[index - 1].focus(), 10);
      }
    }
  });
});

const jsonFile = './database/otp.json';

function verifyOTP() {
  const codess = document.querySelectorAll(".code");
  const enteredCode = Array.from(codess).map(code => code.value).join('');
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const storedCode = data.otp; 
      if (enteredCode === storedCode) {
         document.getElementById("success-popup").style.display = "block";

         const successPopup = document.querySelector('.sukses');
         const successButton = successPopup.querySelector('button');
          successButton.addEventListener('click', () => {
    
          window.location.href = './index.html';
    });
      } else {
         document.getElementById("error-popup").style.display = "block";
         
         const invalidPopup = document.querySelector('.invalid');
         const invalidButton = invalidPopup.querySelector('button');
          invalidButton.addEventListener('click', () => {
    
          invalidPopup.style.display = 'none';
    });
      }
    })
    .catch(error => {
      console.error('Error reading JSON:', error);
    });
}