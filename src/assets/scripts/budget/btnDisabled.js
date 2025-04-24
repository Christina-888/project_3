import { setCalendar } from "/src/assets/scripts/budget/calendar"

export function setBtnDisabled () {

  //switch off btns
  const btnCollection = document.querySelectorAll(".budget__btn");
  btnCollection.forEach(i => i.disabled = true);

  //forms
  const forms = document.forms;
  const formIncomes = forms.formIncomes;
  const formExpenses = forms.formExpenses;

  const iconWraps = document.querySelectorAll(".budget__calendar-wrap");

  //form elements on focus
  const focusElement = (el) => {
    el.addEventListener("focus", (evt) => {
      if (evt.target.tagName == "SELECT" || evt.target.tagName == "INPUT" && !evt.target.matches("input.budget__date-input")){
        evt.target.style.outline = "2px solid rgb(62, 146, 192)";
      } else if (evt.target.matches("input.budget__date-input")) {
        iconWraps.forEach(i => i.style.display = "none");
        evt.target.style.outline = "2px solid rgb(62, 146, 192)";
        evt.target.setAttribute("type", "date");
        setCalendar();
      }
    });
  };

  //form elements on blur
  const blurElement = (el, form) => {
    el.addEventListener("blur", (evt) => {
      if ((evt.target.tagName == "SELECT" || evt.target.tagName == "INPUT") && !evt.target.matches("input.budget__date-input")) {
        if (!evt.target.required){
          evt.target.style.outline = "2px solid rgb(161, 187, 88)";
        } else {
          if (evt.target.value == ""){
            evt.target.style.outline = "2px solid rgb(192, 98, 62)";
          } else if (+(evt.target.value) < 0) {
            evt.target.style.outline = "2px solid rgb(192, 98, 62)";
          } else{
            console.log(typeof(evt.target.value))
            evt.target.style.outline = "2px solid rgb(161, 187, 88)";
          }
        }
      }
      
      else if (evt.target.matches("input.budget__date-input")) {
        setCalendar();

         //date
        const now = new Date();
        const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const inputDate = new Date(evt.target.value.substring(0,4),evt.target.value.substring(5, 7) - 1, evt.target.value.substring(8, 10));

        console.log(inputDate);
        console.log(currentDate);

        if (evt.target.value == ""){
          evt.target.style.outline = "2px solid rgb(192, 98, 62)";
          evt.target.setAttribute("type", "text");
          iconWraps.forEach(i => i.style.display = "flex");

        } else if (inputDate < currentDate) {
          console.log("catssssss");
          evt.target.style.outline = "2px solid rgb(192, 98, 62)";
        } else {
          evt.target.style.outline = "2px solid rgb(161, 187, 88)";

          let elReq = [];
          if (el.hasAttribute("required")) {
            elReq.push(el);
          }
      
          const checkAllRequiredFields = () => {
            for (let item of elReq) {
              if (item.style.outline !== "rgb(161, 187, 88) solid 2px") {
                return false; 
              }
            }
            return true; 
          };

          const updateButtonState = () => {
            form.elements.btn.disabled = !checkAllRequiredFields(); 
          };
          updateButtonState();
        }
      }

      
          
    });
  };  

  for (let item of formIncomes.elements) {
    focusElement(item);
    blurElement(item, formIncomes);
  }
    
  for (let item of formExpenses.elements) {
    focusElement(item);
    blurElement(item, formExpenses);
  }
}
setBtnDisabled();


      
        // else if (+(evt.target.value.length) < 10){
        //     evt.target.style.outline = "2px solid rgb(192, 98, 62)";
        //   }
        // else if (!/^[0-9.]+$/.test(evt.target.value)) {
        //   evt.target.style.outline = "2px solid rgb(192, 98, 62)";
        // }
        // else if (evt.target.value[2] !== ".") {
        //   console.log(evt.target.value[2]);
        //     evt.target.style.outline = "2px solid rgb(192, 98, 62)";
        //   } 
        // else if (evt.target.value[5] !== ".") {
        //     console.log(evt.target.value[5]);
        //       evt.target.style.outline = "2px solid rgb(192, 98, 62)";
        //     } 
        // else if (isNaN(evt.target.value[0-1]) || isNaN(evt.target.value[3-4]) || isNaN(evt.target.value[6-9])){
        //   console.log(evt.target.value[5]);
        //     evt.target.style.outline = "2px solid rgb(187, 88, 154)";
        //   } 