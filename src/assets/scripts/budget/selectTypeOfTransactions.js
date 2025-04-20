import { setBtnDisabled } from "/src/assets/scripts/budget/btnDisabled"

export function selectTypeOfTransactions () {
  const incomeRadio = document.getElementById("incomes-switch");
  const expenseRadio = document.getElementById("expenses-switch");

  const formIncomes = document.getElementById("form-incomes");
  const formExpenses = document.getElementById("form-expenses");
  const indicatorWrap = document.querySelector(".budget__switch-indicator-wrap");

  formExpenses.style.display = "none";

  const selectIncomesForm = () => {
    formIncomes.style.display = "flex";
    formExpenses.style.display = "none";
    indicatorWrap.style.justifyContent = "start";
  };
  const selectExpensesForm = () => {
    formIncomes.style.display = "none";
    formExpenses.style.display = "flex";
    indicatorWrap.style.justifyContent = "end";
  };
  document.querySelector(".budget__switch").addEventListener("click", (evt) => {
    if (evt.target === incomeRadio) {
      selectIncomesForm(); 
      setBtnDisabled();
    }
    if (evt.target === expenseRadio) {
      selectExpensesForm();
      setBtnDisabled();
    }
    if (evt.target === indicatorWrap) {
      if (formIncomes.style.display === "none") {
        console.log("cat")
        selectIncomesForm();
        setBtnDisabled();
      }
      else {
        console.log("dog")
        selectExpensesForm();
        setBtnDisabled();
      }
    }  
  });
}
selectTypeOfTransactions();