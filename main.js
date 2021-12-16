// document.querySelector(".start").addEventListener("click", function() {
//     console.log("Clicked");
//   });

// Navigation functionality for menu - When a menu item is clicked, this function will get the id of the menu item that 
// triggered the event, it will then loop through all divs with the class name of 'div-item'. All divs that do not
// have an id matching the event will have their class names appended with 'display-none' which will hide them from view.
// Once a matching id is found, the corresponding class name of the div will have 'display-none' removed 
// and the div will be shown.
// With help from https://stackoverflow.com/questions/55603456/a-simple-way-to-show-one-div-and-hide-all-others
window.onload = function(){
    const menuItems = document.querySelectorAll('.menu-item');
    const divItems = document.querySelectorAll('.div-item');
  
    const setDisplay = function(event){
      divItems.forEach(function(div){
         if(event.target.getAttribute('id') != div.getAttribute('id')) div.classList.add('display-none');
         else div.classList.remove('display-none');
      });
    }
  
    menuItems.forEach(function(div){ div.onclick = setDisplay; })
  }
  
function calculate(){
  var inputsArr = document.querySelectorAll('.expense-input');
  var balance = document.querySelector('.balance-input').value;
  var total = 0;
  for (var x = 0; x < inputsArr.length; x++){
    if(parseFloat(inputsArr[x].value)){
      total += (parseFloat(inputsArr[x].value))
    }
  }

  var finalCal = balance - total;

  document.getElementById('total').innerText = total.toFixed(2);
  document.getElementById('balance').innerText = parseFloat(balance).toFixed(2);
  document.getElementById('result').innerText = (finalCal).toFixed(2);

  if(finalCal < 0){
    document.getElementById('result').style.color = "red";
  }
  else{
    document.getElementById('result').style.color = "green";
  }
 
}