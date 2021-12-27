// Display current div and active menu item
function showDiv(div, menuItem) {
  const divItems = document.querySelectorAll('.div-item');
  const menuItems = document.querySelectorAll('.menu-item');
  // Alters class names for menu items and divs depending on
  // selection by user
  for (var x = 0; x < divItems.length; x++) {
    if (divItems[x].id != div) {
      divItems[x].classList.add('display-none');
      for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].id != menuItem) {
          menuItems[i].classList.remove('active');
        } else {
          menuItems[i].classList.add('active');
        }
      }
    } else {
      divItems[x].classList.remove('display-none');
    }
  }
}

// Reloads the site to clear all data and start again
function startOver() {
  location.reload();
}

// <------ Functions exclusive for results page ------>

// Gets total expenses and how many item fields had costs inputted
function calculate() {
  var expensesArr = document.querySelectorAll('.expense-input');
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
  document.getElementById('total').innerText = "$" + total.toFixed(2);
  document.getElementById('balance').innerText = "$" + parseFloat(balance).toFixed(2);

  calculateSubTotals();

  calculateAverage(total, totalItems);

  netResult(balance, total);
}


// Get sub-totals of all expense categories
function calculateSubTotals() {
  const categories = ["hardware", "software", "peripherals", "network", "accessories"];

  for (var x = 0; x < categories.length; x++) {
    var subtotal = 0;
    var categoryArr = document.querySelectorAll('.expense-input.' + categories[x]);
    for (var i = 0; i < categoryArr.length; i++) {
      if (parseFloat(categoryArr[i].value) > 0) {
        subtotal += (parseFloat(categoryArr[i].value));
      }
    }
    document.getElementById(categories[x] + '-subtotal').innerText = "$" + subtotal.toFixed(2);
  }
}


// Calculate the average cost of all expenses
function calculateAverage(total, totalItems) {
  let avg = total / totalItems;
  avg = avg || 0;
  document.getElementById('avg-cost').innerText = "$" + avg.toFixed(2);
}


// Calculate the net result of all expanses against the original balance
function netResult(balance, total) {

  // Calculate the net result
  let finalCal = balance - total;

  // Display the net result to user
  document.getElementById('net-result').innerText = "$" + (finalCal).toFixed(2);

  // If the net result is minus funds - 
  // display the net result in red, display "sad" image and "bad" line of text.
  // otherwise, display the net result in green, display "happy" image and "good" line of text
  if (finalCal < 0) {
    document.getElementById('net-result').style.color = "red";
    // Image sourced from
    // https://memegenerator.net/instance/55786757/carol-beer-computer-says-no
    document.getElementById('result-img').src = "images/sad-computer.jpg";
    document.getElementById('result-desc').innerText = "Looks like your balance falls short";

  } else {
    document.getElementById('net-result').style.color = "green";
    // Image sourced from 
    // https://www.vecteezy.com/vector-art/2402452-cute-computer-pc-smile-icon-vector-illustration-design
    document.getElementById('result-img').src = "images/happy-computer.png";
    document.getElementById('result-desc').innerText = "Your balance is enough to cover the costs!";

  }
}