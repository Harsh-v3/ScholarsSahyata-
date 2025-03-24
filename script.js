("use strict");

const openButton = document.querySelectorAll(".open-modal");
const closeButton = document.querySelector(".close-modal");
const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const container = document.querySelector(".cont");

let currPopup;
let isOpen;

console.log(openButton);
console.log(closeButton);
console.log(modalWindow);
console.log(overlay);
console.log(container);

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

const insertBody = function () {
  container.innerHTML = ``;
  const heading = ["Books & Notes", "Question Papers", "Assignments", "Other"];
  const about = [
    "Here is PDFs of all subjects , OS-II Notes are Provided By Mr.Rajbir Singh !",
    "Here you can get last 5 years Question Papers !",
    "For Last Two Assignments Contact Developers (+91 9518816505) !",
    "Results , TimeTable , Notices etc.",
  ];
  const links = [
    [
      "https://www.mediafire.com/file/qz8rykcqop6argm/Computer_Graphics__BCA__6th_Sem_Book.pdf/file",
      "https://www.mediafire.com/file/sbrruaq0y26e3ub/Internet_Technology_sem6_Book_.pdf/file",
      "https://www.mediafire.com/file/kidg31k4ouvy9j6/WD_in_AT__BCA__book.pdf/file",
      "https://www.mediafire.com/file/5hcsvb7n7j70tjb/Operating_Oystem_Sem6_notes.pdf/file",
      "https://www.mediafire.com/file/sonzp3rmxfy5fzy/advd_Prog_in_VB.pdf/file",
      "https://www.mediafire.com/file/ho7gk2sxeyvqo45/Java_Sem6_Book_.pdf/file",
    ],
    [
      "https://www.mediafire.com/file/2phc4u0diqr19co/CGqpSem6.zip/file",
      "https://www.mediafire.com/file/n8ab56wr4ea4e3s/ITqpSem6.zip/file",
      "https://www.mediafire.com/file/y3gc7bjmdx6473n/WD-USING-AT-qp_Sem6.zip/file",
      "https://www.mediafire.com/file/kzhqibi000okmtq/OS-II_qpSem6.zip/file",
      "https://www.mediafire.com/file/nsqes9agc34wg48/AP-WITH-VB-qpSem6.zip/file",
      "https://www.mediafire.com/file/7ankf94e8werliw/JAVA_qpSem6.zip/file",
    ],
    [
      "https://www.mediafire.com/file/xc2flirltpc9xjy/Computer_Graphics_Assignment_sem6.pdf/file",
      "https://www.mediafire.com/file/xs8w69x59j7unan/VB_6.0.pdf/file",
      "",
      "",
    ],
  ];
  const body = [
    `<div class="btns--container">
            <a href="${links[2][0]}" class="btn-text btnLink btn--1">CG (HandWritten)!</a>
            <a href="${links[2][1]}" class="btn-text btnLink btn--2">APVB (HandWritten)!</a>
            <a href="#" class="btn-text btnLink btn--3">Web Dev (PDF/Printout)!</a>
            <a href="#" class="btn-text btnLink btn--4">APVB (PDF/Printout)!</a>
            
        </div>`,
    `<div class="btns--container">
            <a href="${
              currPopup == 0 ? links[0][0] : links[1][0]
            }" target='_blank' class="btn-text btnLink btn--1">CG</a>
            <a href="${
              currPopup == 0 ? links[0][1] : links[1][1]
            }" target='_blank' class="btn-text btnLink btn--2">IT</a>
            <a href="${
              currPopup == 0 ? links[0][2] : links[1][2]
            }" target='_blank' class="btn-text btnLink btn--3">Web Dev</a>
            <a href="${
              currPopup == 0 ? links[0][3] : links[1][3]
            }" target='_blank' class="btn-text btnLink btn--4">OS-II</a>
            <a href="${
              currPopup == 0 ? links[0][4] : links[1][4]
            }" target='_blank' class="btn-text btnLink btn--5">APVB</a>
            <a href="${
              currPopup == 0 ? links[0][5] : links[1][5]
            }" target='_blank' class="btn-text btnLink btn--6">JAVA</a>
        </div>`,
    `<div class="btns--container">
            <a href="#" class="item" onclick="tt()" >Time Table</a>
            <a href="#" class="item" onclick="downloadFile('VBFrontPage')" >VB Front Page</a>
            <a href="#" class="item" onclick="downloadFile('VBAssignment')" >VB Practicle File</a>
            <a href="#" class="item" onclick="downloadFile('DateSheet')">Datesheet</a>
            <a href="#" class="item">Importent Questions</a>
            <a href="#" class="item">Sllyabus</a>
          </div>`,
  ];
  html = `
          <h3 class="u-center-text u-margin-bottom-small heading-secondary ">
            ${heading[currPopup]}
          </h3>
          <h5 class="u-center-text heading-tertiary u-margin-bottom-medium">
            ${about[currPopup]}
          </h5>
          ${
            currPopup == 2
              ? body[0]
              : !currPopup
              ? body[1]
              : currPopup === 3
              ? body[2]
              : body[1]
          }
            
  `;
  container.insertAdjacentHTML("beforeend", html);
};

const openModal = function () {
  insertBody();
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
  modalWindow.style.width = "80%";
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

function tt() {
  modalWindow.style.width = "auto";
  container.innerHTML = ``;
  let body = `<img src="Resourses/images/TimeTable.jpg" alt="Time Table image" />`;
  container.insertAdjacentHTML("beforeend", body);
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function downloadFile(fileName) {
  let userChoice = confirm(`Do you want to download ${fileName} file ?`);
  if (userChoice) {
    const link = document.createElement("a");
    link.href = `Resourses/pdfs/${fileName}.pdf`; // Replace with your PDF URL
    link.download = `${fileName}.pdf`; // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    return;
  }
}
