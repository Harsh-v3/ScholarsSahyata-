const linksContainer = document.querySelector(".popup__content");
const popupBtns = document.getElementsByClassName("access");
console.log(linksContainer, popupBtns);

const popupBody = function (i) {
  linksContainer.innerHTML = ``;

  let heading;
  if (i === 0) {
    heading = `BOOKS & NOTES`;
  } else if (i === 1) {
    heading = "QUESTION PAPERS";
  } else if (i == 2) {
    // heading = "ASSIGNMENT";
    return problemBody();
  } else {
    // heading = "RESULT";
    return problemBody();
  }
  html = `
    <div class="popup__right">
            <div class="popup__close">
              <a href="#features" class="popup__close--btn">&times;</a>
            </div>
            <h2 class="heading-secondary u-margin-bottom-small">${heading}</h2>
            <h3 class="heading-tertiary u-margin-bottom-small">
              BCA 6th Semester ${
                i === 1 ? `, Last 5 Years Question Papers !` : ``
              }
            </h3>
            <div class="popup__text u-margin-bottom-medium">
              <div class="popup__links">
              <a href="#" class="btn btn--green">BCA - 361</a>
                <a href="#" class="btn btn--green">BCA - 362</a>
                <a href="#" class="btn btn--green">BCA - 363</a>
                <a href="#" class="btn btn--green">BCA - 364</a>
                <a href="#" class="btn btn--green">BCA - 365</a>
                <a href="#" class="btn btn--green">BCA - 366</a></div>
            </div>
          </div>
    `;
  return html;
};

const problemBody = function () {
  linksContainer.innerHTML = ``;
  html = `<div class="popup__right">
            <div class="popup__close">
              <a href="#features" class="popup__close--btn">&times;</a>
            </div>
            <h2 class="heading-secondary u-margin-bottom-small">Login Required !</h2>
          </div>`;

  return html;
};

popupBtns[0].addEventListener("click", function () {
  linksContainer.insertAdjacentHTML("beforeend", popupBody(0));
});
popupBtns[1].addEventListener("click", function () {
  linksContainer.insertAdjacentHTML("beforeend", popupBody(1));
});
popupBtns[2].addEventListener("click", function () {
  linksContainer.insertAdjacentHTML("beforeend", popupBody(2));
});
popupBtns[3].addEventListener("click", function () {
  linksContainer.insertAdjacentHTML("beforeend", popupBody(3));
});
