// input fields and buttons
let mainLogin = document.querySelector(".main_booking");
let ticketBooking = document.querySelector(".ticket_booking");
let mainHeading = document.querySelector(".main_heading");
let usernameValue = document.querySelector(".username");
let passwordValue = document.querySelector(".password");
let loginBtn = document.querySelector(".loginBtn");
let loginError = document.querySelector(".login_error");
let fromStation = document.querySelector(".fromStation");
let toStation = document.querySelector(".toStation");
let date = document.querySelector(".date");
let ticketQuantity = document.querySelector(".quantity");
let buyBtn = document.querySelector(".buyBtn");
let bookingError = document.querySelector(".booking_error");

// main heading
let showHeading = (heading) => {
  mainHeading.innerHTML = heading;
};

// show and hide elements
let displayElements = (element, display) => {
  element.style.display = `${display}`;
};

// buy ticket functionality
let buyTicket = () => {
  console.log("From", fromStation.value);
  console.log("To", toStation.value);
  console.log("Date", date.value);
  console.log("quantity", ticketQuantity.value);
};

// ticket price object
let priceList = {};

// hide elements form UI
displayElements(loginError, "none");
displayElements(ticketBooking, "none");
displayElements(bookingError, "none");

// username and password for login
let username = "saifullah";
let password = "123456";

showHeading(`Train Booking Center`);

// login button activities
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showHeading(`Train Booking Center`);
  if (!usernameValue.value && !passwordValue.value) {
    displayElements(loginError, "block");
    loginError.innerHTML = "❓ Enter Username and Password";
  } else if (usernameValue.value == "saifullah" && passwordValue.value == "123456") {
    showHeading(`Ticket Booking Preference`);
    console.log("Login authorized!");
    displayElements(loginError, "none");
    displayElements(mainLogin, "none");
    displayElements(ticketBooking, "block");
    buyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      buyTicket();
    });
  } else {
    displayElements(loginError, "block");
    loginError.innerHTML = "❌ Wrong Username and Password!";
  }
  usernameValue.value = "";
  passwordValue.value = "";
});
