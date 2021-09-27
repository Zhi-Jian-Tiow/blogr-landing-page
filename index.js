let headerButton = document.getElementsByClassName("menu-toggler");
let dropdownMenu = document.getElementsByClassName("menu");
let mobileMenu = document.getElementById("mobile-menu");

// Handle navbar for desktop design during hover state
for (let i = 0; i < headerButton.length; i++) {
  $(headerButton[i]).on("click", function () {
    let menu = this.nextElementSibling;
    if ($(menu).css("display") === "block") {
      $(menu).css("display", "none");
    } else {
      $(menu).css("display", "block");
    }
  });
}

// for (let i = 0; i < headerButton.length; i++) {
//   headerButton[i].addEventListener("mouseleave", function () {
//     let menu = this.nextElementSibling;

//     if (menu.style.display === "block") {
//       menu.style.display = "none";
//     }
//   });

//   $(headerButton[i]).on("click mouseleave", function () {
//     let menu = this.nextElementSibling;
//     if (menu.style.display === "block") {
//       menu.style.display = "none";
//     }
//   });
// }

// for (let i = 0; i < dropdownMenu.length; i++) {
//   dropdownMenu[i].addEventListener("mouseover", function () {
//     let menu = this;
//     menu.style.display = "block";
//   });
// }

// for (let i = 0; i < dropdownMenu.length; i++) {
//   dropdownMenu[i].addEventListener("mouseleave", function () {
//     let menu = this;
//     if (menu.style.display === "block") {
//       menu.style.display = "none";
//     }
//   });
// }

// Handle mobile menu
mobileMenu.addEventListener("click", () => {
  if (
    $(".dropdown").css("display") === "block" &&
    $(".login").css("display") === "flex"
  ) {
    $(".dropdown").css("display", "none");
    $(".login").css("display", "none");
    $("#mobile-menu").attr("src", "./images/icon-hamburger.svg");
  } else {
    $(".dropdown").css("display", "block");
    $(".login").css("display", "flex");
    $("#mobile-menu").attr("src", "./images/icon-close.svg");
  }
});

//handle arrow rotation
for (let i = 0; i < headerButton.length; i++) {
  $(headerButton[i]).on("click", function () {
    let currentArrow = this.children[1];
    currentArrow.classList.toggle("rotate");
  });
}
