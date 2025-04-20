import '/src/style.scss'

import { setOffsetHeight } from '/src/assets/scripts/setOffsetHeight'

import { initializeModal } from "/src/assets/scripts/modal";

document.addEventListener("DOMContentLoaded", () => {
  initializeModal();
});

import { hideNav } from '/src/assets/scripts/main page/burger'

console.log("budget");


import { selectTypeOfTransactions } from "/src/assets/scripts/budget/selectTypeOfTransactions";

import { setBtnDisabled } from "/src/assets/scripts/budget/btnDisabled";


import { addTransactions} from "/src/assets/scripts/budget/addTransaction";

import { validateForm } from "/src/assets/scripts/budget/validateForm"

const btnCollection = document.querySelectorAll(".budget__btn");
btnCollection.forEach(i => i.addEventListener("click", () => {validateForm()}));

