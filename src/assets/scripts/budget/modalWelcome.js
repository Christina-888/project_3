export function modalWelcome () {

  const modal = document.getElementById("modalWelcome");

  window.onload = () => { setTimeout( () => {
    modal.style.display = "flex"}, 1500);  
  }

  const select = modal.querySelector("select");

  const btn = modal.querySelector(".budget__modal-btn");
  
  btn.disabled = true;  

  select.addEventListener("focus", () => {
    select.style.outline = "none";
    select.style.border = "2px solid rgb(62, 146, 192)";
  })
  
  select.addEventListener("change", () => {
    if (select.value !== "") {
      select.style.border = "2px solid rgb(161, 187, 88)";
      select.classList.add("budget__text_green");
      btn.disabled = false;
    } else {
      select.style.border = "2px solid rgb(62, 146, 192)";
      select.classList.remove("budget__text_green");
      btn.disabled = true;  
    }
  });

  select.addEventListener("blur", () => {
    if (select.value == "") {
      select.style.border = "2px solid rgb(62, 146, 192)";
    }
  });

  btn.addEventListener("click", () => {
    let primaryCurrency = "";
    primaryCurrency = select.value;
    console.log(primaryCurrency);
    modal.style.display = "none";  
  });

}

modalWelcome();