export function hideNav () {

  document.querySelector(".burger__nav-list").addEventListener("click", (evt) => {
    if (evt.target.tagName === "A") {
      document.querySelector(".burger__label").click();
    }
  });
}
hideNav();