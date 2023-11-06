// input fields and buttons
let usernameValue = document.querySelector(".username");
let passwordValue = document.querySelector(".password");
let loginBtn = document.querySelector(".loginBtn");
let loginError = document.querySelector(".login_error");
loginError.style.display = "none";

// username and password for login
let username = "saifullah";
let password = "123456";

// login button activities
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!usernameValue.value && !passwordValue.value) {
    loginError.style.display = "block";
    loginError.style.color = "red";
    loginError.innerHTML = "❓ Enter Username and Password";
  } else if (
    usernameValue.value == "saifullah" &&
    passwordValue.value == "123456"
  ) {
    console.log("Login authorized!");
    loginError.style.display = "none";
  } else {
    loginError.style.display = "block";
    loginError.style.color = "red";
    loginError.innerHTML = "❌ Wrong Username and Password!";
  }
  usernameValue.value = "";
  passwordValue.value = "";
});
