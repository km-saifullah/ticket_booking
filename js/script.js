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
let trainClass = document.querySelector("#trainClass");
let chooseBtn = document.querySelector(".choose_booking");
let bookingError = document.querySelector(".booking_error");
let chooseTrain = document.querySelector(".choose_train");
let trainWrapper = document.querySelector(".choose_train-wrapper");

// main heading
let showHeading = (heading) => {
  mainHeading.innerHTML = heading;
};

// show and hide elements
let displayElements = (element, display) => {
  element.style.display = `${display}`;
};

// train details object
let trainDetails = [
  {
    trainId: 1,
    trainName: "Chattala Express",
    city: "Chottogram",
    price: {
      AC_B: 1179,
      AC_S: 1000,
      SNIGDHA: 656,
      F_BERTH: 788,
      F_SEAT: 529,
      F_CHAIR: 850,
      S_CHAIR: 345,
      SHOVAN: 285,
      SHULOV: 250,
    },
    availability: 12,
  },
  {
    trainId: 2,
    trainName: "Mohanagar Express",
    city: "Chottogram",
    price: {
      AC_B: 1100,
      AC_S: 900,
      SNIGDHA: 656,
      F_BERTH: 788,
      F_SEAT: 520,
      F_CHAIR: 820,
      S_CHAIR: 345,
      SHOVAN: 270,
      SHULOV: 220,
    },
    availability: 0,
  },
  {
    trainId: 3,
    trainName: "Turna Express",
    city: "Chottogram",
    price: {
      AC_B: 1200,
      AC_S: 1100,
      SNIGDHA: 680,
      F_BERTH: 800,
      F_SEAT: 560,
      F_CHAIR: 850,
      S_CHAIR: 350,
      SHOVAN: 300,
      SHULOV: 250,
    },
    availability: 22,
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

let bookingArray = [];

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
    displayElements(loginError, "none");
    displayElements(mainLogin, "none");
    displayElements(ticketBooking, "block");
    chooseBtn.addEventListener("click", (e) => {
      // Ticket Booking Information Form
      e.preventDefault();
      if (
        (!fromStation.value,
        !toStation.value,
        !date.value,
        !trainClass.value,
        !ticketQuantity.value)
      ) {
        displayElements(bookingError, "block");
        bookingError.innerHTML = "🔴 Please Enter All Details";
      } else {
        bookingArray = [
          fromStation.value,
          toStation.value,
          date.value,
          trainClass.value,
          ticketQuantity.value,
        ];
        if (
          toStation.value == "ctg"
          // toStation.value == "Chottogram" ||
          // toStation.value == "chittagong" ||
          // toStation.value == "Chittagong"
        ) {
          showHeading(`Choose Train`);
          displayElements(bookingError, "none");
          displayElements(ticketBooking, "none");
          displayElements(chooseTrain, "block");
          chooseTrainDetail();
        } else {
          displayElements(bookingError, "block");
          bookingError.innerHTML = "🚊 Train is not Available for This City";
        }
      }
    });
  } else {
    displayElements(loginError, "block");
    loginError.innerHTML = "❌ Wrong Username and Password!";
  }
  usernameValue.value = "";
  passwordValue.value = "";
});

// choose train display content
let chooseTrainDetail = () => {
  trainDetails.map(({ trainName, city, price, availability }) => {
    let priceKeys = Object.keys(price);
    let priceValues = Object.values(price);
    let trainClassValue = String(trainClass.value);
    let keyIndex = priceKeys.indexOf(trainClassValue);

    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let ticketPrice = document.createElement("p");
    let ticketAvailability = document.createElement("p");

    h3.classList.add("train_name");
    h4.classList.add("city_name");
    ticketPrice.classList.add("ticket_price");
    ticketAvailability.classList.add("ticket_available");

    h3.innerHTML = `${trainName}`;
    h4.innerHTML = `${city}`;
    ticketPrice.innerHTML = `Ticket Price: <span class="price">${priceValues[keyIndex]}</span> BDT`;
    ticketAvailability.innerHTML = `Seat Available: <span class="avail_ticket">${availability}</span>`;

    if (availability == 0) {
      div.classList.add("choose_train-item");
      div.classList.add("red_bg");
      h3.classList.add("title-color");
      h4.classList.add("title-color");
    } else {
      div.classList.add("choose_train-item");
    }
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(ticketPrice);
    div.appendChild(ticketAvailability);
    trainWrapper.appendChild(div);

    // Choose Train
    let selectTrain = document.querySelectorAll(".choose_train-item");
    let selectTrainArr = Array.from(selectTrain);
    selectTrainArr.map((train) => {
      train.addEventListener("click", () => {
        let trainName = h3.innerHTML;
        let cityName = h4.innerHTML;
        console.log(trainName, cityName);
        console.log(train);
      });
    });
  });
};
