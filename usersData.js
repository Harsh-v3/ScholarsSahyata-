"use strict";

const account1 = {
  sem: 6,
  username: "Naman",
  pin: "2046",
  presentationLink:
    "https://www.mediafire.com/folder/n73wsmzhtkngx/Presentation",
};

const askWindow = document.querySelector(".ask");
const askYesWindow = document.querySelector(".ask-yes");
const askNoWindow = document.querySelector(".ask-no");

const askYes = document.querySelector(".ask--y");
const askNo = document.querySelectorAll(".ask--n");

const inputLoginSem = document.querySelector(".login--input--sem");
const inputLoginUsername = document.querySelector(".login--input--user");
const inputLoginPin = document.querySelector(".login--input--pin");
const btnLogin = document.querySelector(".btn--login");

const askDetails = document.querySelector(".ask-details");
const downloadOption = document.querySelector(".downloadOption");
const downloadBtn = document.querySelector(".downloadBtn");

// Ask No : sign in
const signInSem = document.querySelector(".sign--input--sem");
const signInForm = document.querySelector(".sign--input--form");
const signInDetail = document.querySelector(".sign--input--details");
const signInUser = document.querySelector(".sign--input--name");
const signInPin = document.querySelector(".sign--input--pin");
const signInFile = document.querySelector(".sign--input--file");
const signInBtn = document.querySelector(".sign--input--btn");

document.addEventListener("DOMContentLoaded", function () {
  const selectElement = inputLoginSem;
  selectElement.addEventListener("change", function () {
    askDetails.classList.remove("disable");
  });
});

askYes.addEventListener("click", function () {
  askWindow.classList.add("hidden");
  askYesWindow.classList.remove("hidden");

  btnLogin.addEventListener("click", function () {
    if (
      +inputLoginSem.value === account1.sem &&
      inputLoginUsername.value === account1.username &&
      inputLoginPin.value === account1.pin
    ) {
      downloadOption.classList.remove("disable");
      downloadBtn.addEventListener("click", function () {
        downloadBtn.setAttribute("href", account1.presentationLink);
      });
    } else {
      downloadOption.classList.add("disable");
      alert("Fill Correct Information !");
    }
  });
});

for (let i = 0; i < askNo.length; i++) {
  let semEntered = false;
  askNo[i].addEventListener("click", function () {
    askWindow.classList.add("hidden");
    askNoWindow.classList.remove("hidden");

    const selectElement = signInSem;
    selectElement.addEventListener("change", function () {
      signInForm.classList.remove("disable");
      semEntered = true;
    });
  });
}
