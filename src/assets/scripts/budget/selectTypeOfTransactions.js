export function selectTypeOfTransactions () {
  const incomeRadio = document.getElementById("incomes-switch");
  const expenseRadio = document.getElementById("expenses-switch");

  const formIncomes = document.getElementById("form-incomes");
  const formExpenses = document.getElementById("form-expenses");
  const indicatorWrap = document.querySelector(".budget__switch-indicator-wrap");

  formExpenses.style.display = "none";

  document.querySelector(".budget__switch").addEventListener("click", (evt) => {
    if (evt.target === incomeRadio) {
      formIncomes.style.display = "flex";
      formExpenses.style.display = "none";
      indicatorWrap.style.justifyContent = "start";
    }
    if (evt.target === expenseRadio) {
      formIncomes.style.display = "none";
      formExpenses.style.display = "flex";
      indicatorWrap.style.justifyContent = "end";
    }
    if (evt.target === indicatorWrap) {
      if (formIncomes.style.display === "none") {
        console.log("cat")
        formIncomes.style.display = "flex";
        formExpenses.style.display = "none";
        indicatorWrap.style.justifyContent = "start";
      }
      else {
        console.log("dog")
        formIncomes.style.display = "none";
        formExpenses.style.display = "flex";
        indicatorWrap.style.justifyContent = "end";
      }
    }
  });

}
selectTypeOfTransactions();