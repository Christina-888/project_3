export function hideNav () {

  const checkbox = document.querySelector(".burger__label"); 

  //close burger
  document.querySelector(".burger__nav-list").addEventListener("click", (evt) => {
    if (evt.target.tagName === "A") {
      checkbox.click();
    }
  });
  const accountIcon = document.querySelector(".burger__account-icon");

  //close burger + open modal
  accountIcon.addEventListener("click", () => {
    checkbox.click();
    const modal = document.getElementById("logIn-modal");
    modal.style.display = "flex";
  });
}
hideNav();