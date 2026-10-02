const storedUser = { username: "ada", password:"zihntech123"};
let attempts = 0;

const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#loginUsername");
const passwordInput = document.querySelector("#loginPassword");
const loginMsg = document.querySelector("#loginMsg")


function showMessage (message,color) {
  loginMsg.textContent = message;
  loginMsg.style.color = color;
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault()

  if (attempts >= 3) {
    showMessage("Too many attempts. Try again later", "red");
    return;
  }
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value;


  if (username !== storedUser.username) {
    showMessage("Username not found", "red")
    attempts++;
  }else if (password !== storedUser.password) {
    showMessage("Incorrect password", "red")
    attempts++;
  }else {
    showMessage("Login successful! Welcome back.", "green")
    attempts = 0;
  }
})