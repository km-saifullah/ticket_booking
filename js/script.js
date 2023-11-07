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
let chooseBtn = document.querySelector(".choose_booking");
let bookingError = document.querySelector(".booking_error");
let chooseTrain = document.querySelector(".choose_train");

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

// train details object
let trainDetails = [
  {
    trainId: Math.floor(Math.random() * 100) + 1,
    trainName: "Chattala Express",
    city: "Chottogram",
    AC_B: 1179,
    AC_S: 1000,
    SINGDHA: 656,
    F_BERTH: 788,
    F_SEAT: 529,
    F_CHAIR: 850,
    S_CHAIR: 345,
    SHOVAN: 285,
    SHULOV: 250,
  },
  {
    trainId: Math.floor(Math.random() * 100) + 1,
    trainName: "Mohanagar Express",
    city: "Chottogram",
    AC_B: 1100,
    AC_S: 900,
    SINGDHA: 656,
    F_BERTH: 788,
    F_SEAT: 520,
    F_CHAIR: 820,
    S_CHAIR: 345,
    SHOVAN: 270,
    SHULOV: 220,
  },
  {
    trainId: Math.floor(Math.random() * 100) + 1,
    trainName: "Turna Express",
    city: "Chottogram",
    AC_B: 1200,
    AC_S: 1100,
    SINGDHA: 680,
    F_BERTH: 800,
    F_SEAT: 560,
    F_CHAIR: 850,
    S_CHAIR: 350,
    SHOVAN: 300,
    SHULOV: 250,
  },
];

// hide elements form UI
displayElements(loginError, "none");
displayElements(ticketBooking, "none");
displayElements(bookingError, "none");
displayElements(chooseTrain, "none");

// username and password for login
let username = "s";
let password = "1";

showHeading(`Train Booking Center`);

// login button activities
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showHeading(`Train Booking Center`);
  if (!usernameValue.value && !passwordValue.value) {
    displayElements(loginError, "block");
    loginError.innerHTML = "❓ Enter Username and Password";
  } else if (usernameValue.value == "s" && passwordValue.value == "1") {
    showHeading(`Ticket Booking Preference`);
    console.log("Login authorized!");
    displayElements(loginError, "none");
    displayElements(mainLogin, "none");
    displayElements(ticketBooking, "block");
    chooseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showHeading(`Choose Train`);
      displayElements(ticketBooking, "none");
      displayElements(chooseTrain, "block");
      console.log("From", fromStation.value);
      console.log("To", toStation.value);
      console.log("Date", date.value);
      console.log("quantity", ticketQuantity.value);
    });
  } else {
    displayElements(loginError, "block");
    loginError.innerHTML = "❌ Wrong Username and Password!";
  }
  usernameValue.value = "";
  passwordValue.value = "";
});
