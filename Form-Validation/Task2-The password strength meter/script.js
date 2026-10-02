const passwordInput = document.querySelector("#password")
const strength = document.querySelector("#strength")


function showMessage (message,color) {
  strength.textContent = message;
  strength.style.color = color;
}

passwordInput.addEventListener("input", function ()  {
  const value = passwordInput.value;
  let hasNumber = false;
  let hasUpper = false;
  
  for (let i = 0; i < value.length; i++) {
    if ("0123456789".includes(value[i])) {
      hasNumber = true;
    }
    if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(value[i])) {
        hasUpper = true;
    }
  }


  if (value.length < 6) {
    showMessage ("Weak", "red");
  }else if (value.length < 10) {
    showMessage ("Medium", "orange");
  }else if (value.length >= 10 && hasNumber && hasUpper) {
    showMessage ("Strong", "green")
  } else {
    showMessage ("Medium","orange")
  }





})
  