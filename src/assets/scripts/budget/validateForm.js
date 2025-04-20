export function validateForm () {

  const forms = document.forms;

  for (let form of forms) {

    if (form.style.display !== "none")
    {
      const selectType = form.elements.type;
      console.log(selectType);
      if (selectType) {
      
        if (selectType.value === "") {
          console.log("Please select a type");
          const errorWrap = document.createElement("div.budget__error-wrap");
          const errorText = document.createElement("p.budget__error-text");
          errorText.innerText = "Please select a type";
          errorWrap.append(errorText);
          // form.elements.btnAdd.before(errorWrap);
          console.log(form.elements.btnAdd)

        }
      }

    }


    
  }
  

  //   if (budgetForm.elements.type.value == ""){
  //     console.log("bad")
  //   }
  // })
    //   const typeValue = item.elements.type;
  //   console.log(typeValue);

   // const incomesForm = document.forms.formIncomes;
  // console.log(incomesForm);

  // const typeValue = incomesForm.elements.incomeTypes;

  // const budgetForms = document.querySelectorAll(".budget__form");

  // const budgetForms = document.forms[#form-expenses];

  // console.log(budgetForms)
  
}
