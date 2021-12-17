// document.querySelector(".start").addEventListener("click", function() {
//     console.log("Clicked");
//   });

// Navigation functionality for menu - When a menu item is clicked, this function will get the id of the menu item that 
// triggered the event, it will then loop through all divs with the class name of 'div-item'. All divs that do not
// have an id matching the event will have their class names appended with 'display-none' which will hide them from view.
// Once a matching id is found, the corresponding class name of the div will have 'display-none' removed 
// and the div will be shown.
// With help from https://stackoverflow.com/questions/55603456/a-simple-way-to-show-one-div-and-hide-all-others
window.onload = function () {
  const menuItems = document.querySelectorAll('.menu-item');
  const divItems = document.querySelectorAll('.div-item');

  const setDisplay = function (event) {
    divItems.forEach(function (div) {
      if (event.target.getAttribute('id') != div.getAttribute('id')) div.classList.add('display-none');
      else div.classList.remove('display-none');
    });
  }

  menuItems.forEach(function (div) {
    div.onclick = setDisplay;
  });
}

function calculate() {
  // Get all expense fields that were presented to the user
  var expensesArr = document.querySelectorAll('.expense-input');
  // Get the original balance inputted by the user
  var balance = document.querySelector('.balance-input').value;

  var total = 0;
  var totalItems = 0;

  // Iterate over all the expense input fields
  for (var x = 0; x < expensesArr.length; x++) {
    // If a field has a value greater than 0, add the value to 'total'
    // and increment 'totalItems' by 1
    if (parseFloat(expensesArr[x].value) > 0) {
      total += (parseFloat(expensesArr[x].value));
      totalItems++;
    }
  }

  // Used to avoid diisplaying NaN to user
  balance = balance || 0;
  // Display total cost of all items and orignal balance to user
  document.getElementById('total').innerText = total.toFixed(2);
  document.getElementById('balance').innerText = parseFloat(balance).toFixed(2);

  netResult(balance, total);

  calculateAverage(total, totalItems);
}

// Calculate the average cost of all expenses
function calculateAverage(total, totalItems) {

  let avg = total / totalItems;
  document.getElementById('avg-cost').innerText = avg.toFixed(2);
}

// Calculate the net result of all expanses against the original balance
function netResult(balance, total) {

  // Calculate the net result
  let finalCal = balance - total;

  // Display the net result to user
  document.getElementById('net-result').innerText = (finalCal).toFixed(2);

  // If the net result is minus funds - display the result in red,
  // otherwise display the result in green
  if (finalCal < 0) {
    document.getElementById('net-result').style.color = "red";
  } else {
    document.getElementById('net-result').style.color = "green";
  }

}