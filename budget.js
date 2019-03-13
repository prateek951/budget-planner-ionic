//Listen for Dom content loaded event on the window
window.addEventListener("DOMContentLoaded", init);

let reason; //reason for the budget
let amount; //expense amount for the budget
let listOfExpenses; //list of expenses 

function init() {
  // console.log('budget app kickstarts');
  setReferences();
  bindEvents();
}
//Method to confirm the budget
function confirmBudget() {
  //   console.log("inside the confirm budget");
  //Tap the field values
  let budgetReason = reason.value;
  let budgetExpenseAmount = amount.value;
  //If the entered amount is less than 0 simply return 
  if (budgetReason.trim().length <= 0 || budgetExpenseAmount <= 0 || budgetExpenseAmount.trim().length <= 0) {
    return;
  }
  //validate the fields
  if (budgetReason && budgetReason.trim()) {
    console.log(budgetReason);
  }
  if (budgetExpenseAmount && budgetExpenseAmount.trim()) {
    console.log(budgetExpenseAmount);
  }
  //Add the valid budget to the list of the expenses 
  const expenseItem = document.createElement('ion-item');
  //set the text content for the expense item
  expenseItem.textContent = `${budgetReason} : $ ${budgetExpenseAmount}`;
  //append to the listOfExpenses
  listOfExpenses.appendChild(expenseItem);

  //reset the values 
  reason.value = '';
  amount.value = 0;
}
//Method to cancel the budget
function cancelBudget() {
  console.log("inside the cancel budget");
}

//set all the references here
function setReferences() {
  reason = document.getElementById("reason");
  amount = document.getElementById("amount");
  //set the initial value for the amount to begin with 
  amount.value = 0;
  listOfExpenses = document.getElementById('expense-list');
}

//all the binding of the events goes here
function bindEvents() {
  // console.log('budget app events');

  document.getElementById("confirm").addEventListener("click", confirmBudget);
  document.getElementById("cancel").addEventListener("click", cancelBudget);
}
