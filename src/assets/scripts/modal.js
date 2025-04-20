export function initializeModal() {
  const modal = document.getElementById("logIn-modal");

  const openModalBtn = document.querySelector(".header__account-icon");

  const closeModalBtn = document.getElementById("close-modal");

  const loginForm = document.querySelector(".modal__form-login");
  const signupForm = document.querySelector(".modal__form-signup");

  const loginTitle = document.querySelector(".modal__title-login");
  const signupTitle = document.querySelector(".modal__title-signup");

  const switchToSignup = document.getElementById("switch-to-signup");
  const switchToLogin = document.getElementById("switch-to-login");

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    loginTitle.style.display = "block";
    signupTitle.style.display = "none";
  });
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  switchToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    loginTitle.style.display = "none";
    signupTitle.style.display = "block";
  });
  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    loginTitle.style.display = "block";
    signupTitle.style.display = "none";
  });
  const burgerSignupBtn = document.getElementById("burger-signup");
  if (burgerSignupBtn) {
    burgerSignupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      loginForm.style.display = "none";
      signupForm.style.display = "block";
      document.querySelector(".modal__title-login").style.display = "none";
      document.querySelector(".modal__title-signup").style.display = "block";
      document.getElementById("burger-menu").checked = false;
    });
  }
}

initializeModal();
