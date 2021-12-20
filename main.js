function showDiv(div) {
  const divItems = document.querySelectorAll('.div-item');

for(var x = 0; x<divItems.length; x++){
  if(divItems[x].id != div){
    divItems[x].classList.add('display-none');
  }else{
    divItems[x].classList.remove('display-none');
  }
}
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

  calculateSubTotals();
}


function calculateSubTotals() {
  const categories = ["hardware", "software", "periperals", "network", "accessories"];

  for (var x = 0; x < categories.length; x++) {
    var subtotal = 0;
    var categoryArr = document.querySelectorAll('.expense-input.' + categories[x]);
    for (var i = 0; i < categoryArr.length; i++) {
      if (parseFloat(categoryArr[i].value) > 0) {
        subtotal += (parseFloat(categoryArr[i].value));
      }
    }
    document.getElementById(categories[x] + '-subtotal').innerText = subtotal.toFixed(2);
  }
}

// Calculate the average cost of all expenses
function calculateAverage(total, totalItems) {

  let avg = total / totalItems;
  avg = avg || 0;
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