document.addEventListener("DOMContentLoaded", logo);
document.addEventListener("load", logo);
var spinner = document.getElementById("spinner");

function logo() {
  document.body.style.overflowY = "hidden";
  spinner.classList.add("active");
  spinner.style.cursor = "wait";
  setTimeout(() => {
    document.body.style.overflowY = "scroll";
    spinner.style.cursor = "default";
    spinner.classList.remove("active");
  }, 3500);
}

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keyup", (e) => {
  if (e.key == "PrintScreen") {
    navigator.clipboard.write(" ");
    alert("Sorry Screenshots disabled!");
  }
});

// page navigation variables
var navigationLinks = document.querySelectorAll("[data-nav-link]");
var pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

const skill = document.getElementById("skill");
const progressbar = document.querySelectorAll(".skill-progress-fill");

function showprogress() {
  progressbar.forEach((progressbar) => {
    var value = progressbar.dataset.progress;
    progressbar.style.opacity = 1;
    progressbar.style.width = `${value}%`;
  });
}

function hideprogress() {
  progressbar.forEach((progressbar) => {
    progressbar.style.opacity = 0;
    progressbar.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const skillsection = skill.getBoundingClientRect().top;
  const screenpos = window.innerHeight;

  if (skillsection < screenpos) {
    showprogress();
  } else {
    hideprogress();
  }
});

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
// modal variable
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-Date]");
const postImagesContainer = document.getElementById("post-images");


function openPost(postIndex){
var post = document.querySelectorAll(".blog-banner-box")[postIndex - 1];
var postImages = post.querySelectorAll("img");

var postdesc = document.querySelectorAll(".blog-content")[postIndex - 1];
var postdate = postdesc.querySelector("[data-testimonials-date]");
var posttitle = postdesc.querySelector("[data-testimonials-title]");
var posttext = postdesc.querySelector("[data-testimonials-text]");

postImages.forEach(function (image) {
  var img = document.createElement("img");
  img.src = image.src;
  postImagesContainer.appendChild(img);
});
    modalDate.innerHTML = postdate.innerHTML;
    modalTitle.innerHTML = posttitle.innerHTML;
    modalText.innerHTML = posttext.innerHTML;
    document.body.style.overflowY = "hidden";
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  };
  
  // modal toggle function
  const testimonialsModalFunc = function () {
    document.body.style.overflowY = "scroll";
    postImagesContainer.innerHTML = "";
    modalDate.innerHTML = "";
    modalTitle.innerHTML = "";
    modalText.innerHTML = "";
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  };
// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);





// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}
var vname = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var overlaylo = document.querySelector(".overlay-form");

formBtn.addEventListener("click", sendMail);

function sendMail() {
  var tempParms = {
    from_name: document.getElementById("email").value,
    ename: document.getElementById("name").value,
    to_name: "Khaledtr512@gmail.com",
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_rhv2wst", "template_kgosfgn", tempParms)
    .then(function (res) {
      console.log("success", res.status);
      document.body.style.cursor = "wait";
      overlaylo.classList.add("active");
      setTimeout(() => {
        email.value = "";
        vname.value = "";
        message.value = "";
        setTimeout(() => {
          document.body.style.cursor = "default";
          overlaylo.classList.remove("active");
        }, 2000);
      }, 7000);
    });
}
