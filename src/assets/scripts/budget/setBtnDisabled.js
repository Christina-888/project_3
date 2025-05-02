export function setBtnDisabled () {
//switch off btns
const btnCollection = document.querySelectorAll(".budget__btn");
btnCollection.forEach(i => i.disabled = true);
}
setBtnDisabled();