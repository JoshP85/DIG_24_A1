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
