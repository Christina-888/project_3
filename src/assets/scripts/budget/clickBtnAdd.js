export function clickBtnAdd () {


  const forms = document.querySelectorAll(".budget__form");
  const transactionsMessage = document.getElementById("transactionsMessage");

  for (let form of forms) {

    form.elements.btn.addEventListener("click", (e) => {

      e.preventDefault();
      console.log("Форма отправлена");

      transactionsMessage.style.display = "none";

      class Budget {
        constructor (name, type, comment, value, currency, date, reminder, taskList) {
          this.name = name;
          this.type = type;
          this.comment = comment;
          this.value = value;
          this.currency = currency;
          this.date = date;
          this.reminder = reminder;
          this.taskList = taskList;
        }
      }

      const data = new Budget();
      data.name = form.name;
      data.type = form.type.value;
      data.comment = form.comment.value;
      data.value = form.sum.value;
      data.currency = form.currency.value;
      data.date = form.date.value;
      data.reminder = form.reminder.value;
      if (form.taskList == undefined) {
        data.taskList = "none";
      } else { 
        data.taskList = form.taskList.checked;
      }


      console.log(data);


      const inputDate = form.elements.date.value;
      console.log(inputDate);
  
      const transactionsWrap = document.querySelector(".budget__transactions");

      const yearWrap = document.createElement("div");
      yearWrap.classList.add("budget__year-transaction-wrap");
      transactionsWrap.append(yearWrap);
      
      const year = document.createElement("h3");
      year.classList.add("budget__transaction-subtitle");
      yearWrap.append(year);
      year.textContent = inputDate.substring(0,4);
  
      const monthWrap = document.createElement("div");
      monthWrap.classList.add("budget__month-transaction-wrap");
      transactionsWrap.append(monthWrap);
  
      const dateWrap = document.createElement("div");
      dateWrap.classList.add("budget__transactions-date");
      monthWrap.append(dateWrap);

      const date = document.createElement("h3");
      date.classList.add("budget__subtitle");
      dateWrap.append(date);
      
      const monthNumber = +(inputDate.substring(5,7));
      console.log(monthNumber);

      const getMonthName = (monthNumber) => {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        return date.toLocaleString("en-US", {month: "long",});
      };

      const month = getMonthName(monthNumber);

      const day = +(inputDate.substring(8,10));

      date.textContent = `${month}, ${day}`;


      //

      const transactionWrap = document.createElement("div");
      transactionWrap.classList.add("budget__transactions-wrap");
      monthWrap.append(transactionWrap);

      const inputValue = form.elements.sum.value;

      const inputCurrency = form.elements.currency.value;
      const currency = inputCurrency.slice(-5).replace("(", "").replace(")", "");

      const inputTransactionType = form.elements.type.value;

      const transactionValue = document.createElement("p");
      transactionValue.classList.add("budget__text");

      const transactionType = document.createElement("p");
      transactionType.classList.add("budget__text");

      if (form.name.includes("Incomes")) {
        transactionValue.classList.add("budget__text_green");
        transactionValue.textContent = `+${Math.round(+(inputValue * 100)) / 100} ${currency}`;
      } else {
        transactionValue.classList.add("budget__text_red");
        transactionValue.textContent = `-${Math.round(+(inputValue * 100)) / 100} ${currency}`;
      }
      
      transactionType.textContent = inputTransactionType;
      transactionWrap.append(transactionValue, transactionType);

      const inputComment = form.elements.comment.value;
      console.log(inputComment)
      if (inputComment !== "") {
        const comment = document.createElement("p");
        comment.classList.add("budget__transaction-comment");
        comment.textContent = inputComment;
        transactionWrap.classList.add("budget__transactions-wrap_comment");
        transactionWrap.append(comment);
      }

    });
  }
  

}
clickBtnAdd();