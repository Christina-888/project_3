export function setBtnDisabled () {

  const btnCollection = document.querySelectorAll(".budget__btn");
  console.log(btnCollection);

  btnCollection.forEach(i => i.disabled = true);

  const forms = document.forms;

  const formIncomes = forms.formIncomes;

  const formExpenses = forms.formExpenses;

  const selectIncomeType = document.querySelectorAll("select");
  console.log(selectIncomeType);

  const btnAddIncome = formIncomes.elements.btn;



  if (selectIncomeType) {

    
    if (selectIncomeType.value !== "") {
      btnAddIncome.disabled = false;
    } else {
      btnAddIncome.disabled = true;
    }

  }



        
      

  
}
setBtnDisabled();

const forms = document.querySelector(".budget").querySelectorAll("form");

  // console.log(forms);

  // let selects = [];
  // let requiredSelects = [];
  // forms.forEach(form => {
  //   selects = form.querySelectorAll("select");
  //   console.log(selects);

  // });

  // for (let select of selects) {

  //   if (select.required == true) {
  //     console.log(select);

  //     requiredSelects.push(select);

  //   }
  // }
  // console.log(requiredSelects);
    
    // const requiredSelects = selects.forEach(i => {if(i.hasAttribute("required")){
    //  
    // }});
    // console.log(requiredSelects);
