import { setCalendar } from "/src/assets/scripts/budget/calendar"

export function switchBtnOn () {

  //forms
  const forms = document.querySelectorAll(".budget__form");

  //current date
  const now = new Date();
  const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  


  //required form elements array 
  let elReqArr = [];
  const getElReqArr = (form) => {
    for (let element of form.elements) {
      if (element.required) {
        elReqArr.push(element);
      }
    }

  };
          
  //check required fields
  const checkAllRequiredFields = () => {
    for (let item of elReqArr) {
      if (item.style.border !== "2px solid rgb(161, 187, 88)") {
        return false; 
      }
    }
    return true; 
  };

  //update btn state
  const updateButtonState = (form) => {
    form.elements.btn.disabled = !checkAllRequiredFields(); 
  };

  //set state style
  const setDefault = (el, requiredIcon) => {
    el.style.border = "2px solid rgb(62, 146, 192)";
    if (requiredIcon) {
      requiredIcon.classList.remove("budget__required-icon_valid");
    }
  };

  const setValid = (el, requiredIcon) => {
    el.style.border = "2px solid rgb(161, 187, 88)";
    if (requiredIcon) {
      requiredIcon.classList.add("budget__required-icon_valid");
    }
  };

  const setInvalid = (el, requiredIcon) => {
    el.style.border = "2px solid rgb(192, 98, 62)";
    if (requiredIcon) {
      requiredIcon.classList.remove("budget__required-icon_valid");
    }
  };

  //form elements on focus
  const focusElement = (el, form) => {
    el.addEventListener("focus", () => {
      if (el.tagName !== "BUTTON") {
        el.style.outline = "none";
        setDefault(el);
        if (el.matches("input.budget__date-input")){
          form.querySelector(".budget__calendar-wrap").style.display = "none";
          form.querySelector(".budget__date-input-wrap").style.border = "none";
          el.setAttribute("type", "date");
          setCalendar();
        } 
      }
    });
  };

  //form elements on change
  const changeElementValue = (el, form) => {
    
    el.addEventListener("change", () => {
      
      if (el.tagName === "SELECT") {
        if (!el.required){
          el.style.border = "2px solid rgb(161, 187, 88)";
        } else {
          const requiredIcon = el.nextElementSibling.querySelector(".budget__required-icon");
          getElReqArr(form);
          if (el.value == "") {
            setInvalid(el,requiredIcon);
            updateButtonState(form);
          } else {
            setValid(el, requiredIcon);
            updateButtonState(form);
          }
        }
      }
    });
  }

  //form elements on input
  const inputElementValue = (el, form) => {
    el.addEventListener("input", () => {

      getElReqArr(form);

      if (el.tagName === "INPUT" && !el.matches("input.budget__checkbox")) {
        const requiredIcon = el.parentElement.nextElementSibling.querySelector(".budget__required-icon");
        if (el.value == "") {
          setDefault(el, requiredIcon);
          updateButtonState(form);
        } else {
          if (!el.required){
              el.style.border = "2px solid rgb(161, 187, 88)";
          } else {
            if (!el.matches("input.budget__date-input")) {
              if (isNaN(el.value) || +(el.value) === 0) {
                setInvalid(el, requiredIcon);
                updateButtonState(form);
              } else  if (+(el.value[0]) === 0 && el.value[1] && el.value[1] !== ".") {
                setInvalid(el, requiredIcon);
                updateButtonState(form);
              } else {
                setValid(el, requiredIcon);
                updateButtonState(form);
              }
            } else {
              const inputDate = new Date(el.value.substring(0,4),el.value.substring(5, 7) - 1, el.value.substring(8, 10));
              if (el.value == ""){
                setDefault(el, requiredIcon);
                updateButtonState(form);
                form.querySelector(".budget__calendar-wrap").style.display = "flex";
              } else if (inputDate < currentDate){
                setInvalid(el, requiredIcon);
                updateButtonState(form);
              } else {
                setValid(el, requiredIcon);
                updateButtonState(form);
              }
            }
          }
        }
      }
    });
  }

  // form elements on blur
  const blurElement = (el, form) => {
    el.addEventListener("blur", () => {
      if (el.tagName !== "BUTTON") {
        
        if (!el.required){
          el.style.border = "2px solid rgb(161, 187, 88)";
        } else {
          getElReqArr(form);
          if (!el.matches("input.budget__date-input")){
            if (el.value == "") {
              el.style.border = "2px solid rgb(192, 98, 62)";
              updateButtonState(form); 
            }
          } else {
            if (el.value == ""){
              el.style.border = "none";
              el.parentElement.style.border = "2px solid rgb(192, 98, 62)";
              el.setAttribute("type", "text");
              form.querySelector(".budget__calendar-wrap").style.display = "flex";
              updateButtonState(form); 
            }
          }
        }
      }
    });
  }; 
  
  const clickCalendar = (form) => {
    const calendars = form.querySelectorAll(".budget__calendar-icon");
    calendars.forEach(i => i.addEventListener("click", () => {
      form.elements.date.focus();
    }));
  };

  for (let form of forms) {
    clickCalendar(form);
    for (let item of form.elements) {
      focusElement(item, form);
      changeElementValue(item, form);
      inputElementValue(item, form);
      blurElement(item, form);
    }
  }
}
switchBtnOn();
