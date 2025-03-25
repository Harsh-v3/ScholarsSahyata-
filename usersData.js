"use strict";

const btnLogin = document.querySelector(".btn--login");
const inputLoginUsername = document.querySelector(".login--input--user");
const inputLoginPin = document.querySelector(".login--input--pin");

const account1 = {
  username: "Harsh",
  pin: "1234",
  presentationLink:
    "https://www.mediafire.com/folder/n73wsmzhtkngx/Presentation",
};

btnLogin.addEventListener("click", function () {
  if (
    inputLoginUsername.value == account1.username &&
    inputLoginPin.value === account1.pin
  ) {
    alert("hi");
    console.log(account1.presentationLink);
  }
});
