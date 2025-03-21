// const linksContainer = document.querySelector(".popup__content");
// const popupBtns = document.getElementsByClassName("access");
// console.log(linksContainer, popupBtns);

// const popupBody = function (i) {
//   linksContainer.innerHTML = ``;

//   let heading;
//   if (i === 0) {
//     heading = `BOOKS & NOTES`;
//   } else if (i === 1) {
//     heading = "QUESTION PAPERS";
//   } else if (i == 2) {
//     // heading = "ASSIGNMENT";
//     return problemBody();
//   } else {
//     // heading = "RESULT";
//     return problemBody();
//   }
//   html = `
//     <div class="popup__right">
//             <div class="popup__close">
//               <a href="#features" class="popup__close--btn">&times;</a>
//             </div>
//             <h2 class="heading-secondary u-margin-bottom-small">${heading}</h2>
//             <h3 class="heading-tertiary u-margin-bottom-small">
//               BCA 6th Semester ${
//                 i === 1 ? `, Last 5 Years Question Papers !` : ``
//               }
//             </h3>
//             <div class="popup__text u-margin-bottom-medium">
//               <div class="popup__links">
//               <a href="#" class="btn btn--green">BCA - 361</a>
//                 <a href="#" class="btn btn--green">BCA - 362</a>
//                 <a href="#" class="btn btn--green">BCA - 363</a>
//                 <a href="#" class="btn btn--green">BCA - 364</a>
//                 <a href="#" class="btn btn--green">BCA - 365</a>
//                 <a href="#" class="btn btn--green">BCA - 366</a></div>
//             </div>
//           </div>
//     `;
//   return html;
// };

// const problemBody = function () {
//   linksContainer.innerHTML = ``;
//   html = `<div class="popup__right">
//             <div class="popup__close">
//               <a href="#features" class="popup__close--btn">&times;</a>
//             </div>
//             <h2 class="heading-secondary u-margin-bottom-small">Login Required !</h2>
//           </div>`;

//   return html;
// };

// popupBtns[0].addEventListener("click", function () {
//   linksContainer.insertAdjacentHTML("beforeend", popupBody(0));
// });
// popupBtns[1].addEventListener("click", function () {
//   linksContainer.insertAdjacentHTML("beforeend", popupBody(1));
// });
// popupBtns[2].addEventListener("click", function () {
//   linksContainer.insertAdjacentHTML("beforeend", popupBody(2));
// });
// popupBtns[3].addEventListener("click", function () {
//   linksContainer.insertAdjacentHTML("beforeend", popupBody(3));
// });

("use strict");

const openButton = document.querySelectorAll(".open-modal");
const closeButton = document.querySelector(".close-modal");
const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const container = document.querySelector(".cont");
let currPopup;

console.log(openButton);
console.log(closeButton);
console.log(modalWindow);
console.log(overlay);

openButton[0].addEventListener("click", function (i) {
  currPopup = 0;
});
openButton[1].addEventListener("click", function (i) {
  currPopup = 1;
});
openButton[2].addEventListener("click", function (i) {
  currPopup = 2;
});
openButton[3].addEventListener("click", function (i) {
  currPopup = 3;
});

const openModal = function () {
  insertBody();
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < openButton.length; i++) {
  openButton[i].addEventListener("click", openModal);
}

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
    closeModal();
  }
});

const insertBody = function () {
  container.innerHTML = ``;
  console.log(currPopup);
  let heading = currPopup === 1 ? `Question Papers` : `Books & Notes`;

  html = `
      <div class="popup__right">
              <div class="popup__close">
                <a href="#features" class="popup__close--btn">&times;</a>
              </div>
              <h2 class="heading-secondary u-margin-bottom-small u-center-text">${heading}</h2>
              ${
                currPopup > 1
                  ? `
                  <h3 class="heading-tertiary u-margin-bottom-small u-center-text">  Sorry This Content is Not available for everyone for now !
              </h3>
              <div >
                <div class="popup__links u-center-text">
                Contact : 9518816505
              </div>`
                  : `<h3 class="heading-tertiary u-margin-bottom-small u-center-text">
                BCA 6h Sem ${
                  currPopup === 1 ? `, Lat 5 Year Question Papers !` : ` `
                }
                
              </h3>
              <div >
                <div class="popup__links">
                <a href="#" class="btn-text ">BCA - 361</a>
                  <a href="#" class="btn-text ">BCA - 362</a>
                  <a href="#" class="btn-text ">BCA - 363</a>
                  <a href="#" class="btn-text ">BCA - 364</a>
                  <a href="#" class="btn-text ">BCA - 365</a>
                  <a href="#" class="btn-text ">BCA - 366</a></div>
              </div>`
              }
            </div>
      `;

  container.insertAdjacentHTML("beforeend", html);
};
