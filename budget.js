//Listen for Dom content loaded event on the window
window.addEventListener("DOMContentLoaded", init);

let reason; //reason for the budget
let amount; //expense amount for the budget

function init() {
  // console.log('budget app kickstarts');
  setReferences();
  bindEvents();
}
//Method to confirm the budget
function confirmBudget() {
  //   console.log("inside the confirm budget");
  //Tap the field values
  const budgetReason = reason.value;
  const budgetExpenseAmount = amount.value;
    //validate the fields 
  if (budgetReason && budgetReason.trim()) {
    console.log(budgetReason);
  }
  if (budgetExpenseAmount && budgetExpenseAmount.trim()) {
    console.log(budgetExpenseAmount);
  }
}
//Method to cancel the budget
function cancelBudget() {
  console.log("inside the cancel budget");
}

//set all the references here
function setReferences() {
  reason = document.getElementById("reason");
  amount = document.getElementById("amount");
}

//all the binding of the events goes here
function bindEvents() {
  // console.log('budget app events');

  document.getElementById("confirm").addEventListener("click", confirmBudget);
  document.getElementById("cancel").addEventListener("click", cancelBudget);
}
