export function initializeModal() {

  const modal = document.getElementById("logIn-modal");

  const openModalBtn = document.querySelector(".header__account-icon");

  const closeModalBtn = document.getElementById("close-modal");

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  // window.addEventListener("click", (event) => {
  //   if (event.target === modal) {
  //     modal.style.display = "none";
  //   }
  // });
}
initializeModal();
