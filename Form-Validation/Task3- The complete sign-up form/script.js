const signUpForm = document.querySelector("#signUpForm")
const fullNameInput = document.querySelector("#fullName")
const emailInput = document.querySelector("#email")
const ageInput = document.querySelector("#age")
const passwordInput = document.querySelector("#password")
const confirmPasswordInput = document.querySelector("#confirmPassword")
const terms = document.querySelector("#terms")
const signupMsg = document.querySelector("#signupMsg")

function showMessage (message,color) {
  signupMsg.textContent = message;
  signupMsg.style.color = color;
}


signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const age = ageInput.value.trim();
  const ageNumber = Number(age)


  if (fullName === "") {
    showMessage("Full name is required", "red")
  }else if (!email.includes("@") || !email.includes(".")) {
    showMessage("Enter a valid email", "red")
  }else if (age === "" || Number.isNaN(ageNumber) || ageNumber < 16) {
    showMessage("You must be at least 16 to sign up", "red")
  }else if (password.length < 8) {
    showMessage("Password must be at least 8 characters", "red")
  }else if (password !== confirmPassword) {
    showMessage("Password do not match", "red")
  }else if (!terms.checked) {
    showMessage("You must accept the terms to continue", "red")
  }else {
    showMessage(`Welcome ${fullName}`, "green")
    signUpForm.reset();
    
  }
});