//Listen for Dom content loaded event on the window
window.addEventListener("DOMContentLoaded", init);

let reason; //reason for the budget
let amount; //expense amount for the budget
let listOfExpenses; //list of expenses
let netTotal; //total sum of all the expenses
let total = 0; //total to set 
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
  //validate the fields
  if (
    budgetReason.trim().length <= 0 ||
    budgetExpenseAmount <= 0 ||
    budgetExpenseAmount.trim().length <= 0
  ) {
    return;
  }
  //Add the valid budget to the list of the expenses
  const expenseItem = document.createElement("ion-item");
  //set the text content for the expense item
  expenseItem.textContent = `${budgetReason} : $ ${budgetExpenseAmount}`;
  //append to the listOfExpenses
  listOfExpenses.appendChild(expenseItem);
  //calculate total
  calculateNetBudget(budgetExpenseAmount);
  //reset the values
  clearFields();
}

// Method to calculate the net budget

function calculateNetBudget(someAmount) {
    //compute the total 
   total += parseFloat(someAmount);
   //set to the html 
   netTotal.textContent = total;
}

//Method to cancel the budget
function clearFields() {
  //   console.log("inside the cancel budget");
  reason.value = "";
  amount.value = 0;
}

//set all the references here
function setReferences() {
  reason = document.getElementById("reason");
  amount = document.getElementById("amount");
  //set the initial value for the amount to begin with
  amount.value = 0;
  listOfExpenses = document.getElementById("expense-list");
  netTotal = document.getElementById("net");
  //set the initial value for the netTotal to begin with 
}

//all the binding of the events goes here
function bindEvents() {
  // console.log('budget app events');

  document.getElementById("confirm").addEventListener("click", confirmBudget);
  document.getElementById("cancel").addEventListener("click", clearFields);
}
