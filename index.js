let headerButton = document.getElementsByClassName("menu-toggler");

let menu = document.querySelectorAll("ul");
console.log(menu);

const displayMenu = () => {
  for (let i = 0; i < 3; i++) {
    menu[i].style.display = "contents";
  }
};

for (let i = 0; i < headerButton.length; i++) {
  headerButton[i].addEventListener("click", displayMenu);
}
