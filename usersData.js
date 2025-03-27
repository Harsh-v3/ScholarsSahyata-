"use strict";

let chooseWindow = false;

function pptWindow() {
  console.log("hi");
  container.innerHTML = ``;
  let chooseWindow = `
        <h2 class="heading-secondary u-center-text u-margin-bottom-small">Presentation</h2>

        <!-- Ask  -->
        <div class="ask ">
          <h3 class="heading-tertiary u-margin-bottom-small">Did You Already Uploaded PDF ?</h3>
          <a href="#" class="btn-text ask--y">Yes !</a>
          <a href="#" class="btn-text ask--n">No !</a>
          <a href="#" class="btn-text ask--n">Yes , But i forgot USER / PIN !</a>
        </div>
        <!-- if Ask Yes -->
        <div class="ask-yes hidden">
        <!-- ask Sem  -->
          <h3 class="heading-tertiary u-margin-bottom-small">
            1. Choose Your Semester
          </h3>
          <label class="select " for="slct">
            <select id="slct" class="u-margin-bottom-small login--input--sem" required="required">
              <option value="" disabled="disabled" selected="selected">
                Select option
              </option>
              <option value="1" disabled>One</option>
              <option value="2">Two</option>
              <option value="3" disabled>Three</option>
              <option value="4">Four</option>
              <option value="5" disabled>Five</option>
              <option value="6">Six</option>
            </select>
            <svg>
              <use xlink:href="#select-arrow-down"></use>
            </svg>
          </label>
          <!-- SVG Sprites-->
          <svg class="sprites">
            <symbol id="select-arrow-down" viewbox="0 0 10 6">
              <polyline points="1 1 5 5 9 1"></polyline>
            </symbol>
          </svg>

  <!-- ask user name and pin -->
          <div class="ask-details disable">
            <h3 class="heading-tertiary u-margin-bottom-small">
              2. Enter Your Name & PIN :
            </h3>
            <form action="#" class="login u-margin-bottom-small">
              <input type="text" placeholder="USER" class="login--input login--input--user" />
              <input type="password" placeholder="PIN" maxlength="4" class="login--input login--input--pin" />
              <button class="btn--login">&rarr;</button>
            </form>
          </div>

<!-- provide download option -->
          <div class="downloadOption disable">
            <h3 class="heading-tertiary u-margin-bottom-small">
              3. Download Your PDF :
            </h3>
            <a href="#" class="btn-text downloadBtn" target="_blank" >Download !</a>
          </div>
        </div>

        <!-- if Ask No -->
        <div class="ask-no hidden">

          <h3 class="heading-tertiary u-margin-bottom-small">Set Your Data :</h3>
  <form action="https://getform.io/f/aqokwkka" method="POST" class="modal-form sign--input--form ">
          <!-- ask for Sem -->
          <label class="select" for="slct">
            <select id="slct" class="u-margin-bottom-small sign--input--sem" required="required" type="select" name="semester">
              <option value="" disabled="disabled" selected="selected">
                Select Your Semester !
              </option>
              <option value="1" disabled>One</option>
              <option value="2">Two</option>
              <option value="3" disabled>Three</option>
              <option value="4">Four</option>
              <option value="5" disabled>Five</option>
              <option value="6">Six</option>
            </select>
            <svg>
              <use xlink:href="#select-arrow-down"></use>
            </svg>
          </label>
          <!-- SVG Sprites-->
          <svg class="sprites">
            <symbol id="select-arrow-down" viewbox="0 0 10 6">
              <polyline points="1 1 5 5 9 1"></polyline>
            </symbol>
          </svg>
          <br>
            <label for="user--name"> User Name </label>
            <input type="text" name="name" id="user--name" class="user--name sign--input--name" required />
            <label for="pin"> PIN </label>
            <input type="number" name="pin" id="pin" maxlength="4" class="PIN sign--input--pin" required />
            <h3 class="heading-tertiary u-margin-bottom-small ">Upload Your PDF / PPT :</h3>
            <h2 class="u-margin-bottom-small u-center-text"> PDF / PPT : Send Your Pdf to : <a href="https://wa.me/9518816505?text=Hello!"> Whatsapp </a> or <a href="mailto:harshwebdev015@gmail.com"> Gmail .</a></h2>
            <button class="btn-text btn sign--input--btn " type="submit" >Send Data </button>
          </form>
        </div>
      `;

  container.insertAdjacentHTML("beforeend", chooseWindow);
  chooseWindow = true;

  const account1 = {
    sem: 6,
    username: "Naman",
    pin: "2046",
    presentationLink:
      "https://www.mediafire.com/folder/n73wsmzhtkngx/Presentation",
  };

  if (chooseWindow) {
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

    const selectElement = inputLoginSem;
    selectElement.addEventListener("change", function () {
      askDetails.classList.remove("disable");
      console.log(askDetails);
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
  }
}
