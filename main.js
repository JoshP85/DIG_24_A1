// document.querySelector(".start").addEventListener("click", function() {
//     console.log("Clicked");
//   });


    // When a navigation property in the menu is clicked, this function gets the id of the menu item that triggered the event 
    // and loops through all divs with the class name 'div-item' to find a matching id name, once found,
    // it removes the 'display-none' from the class name which shows the div on screen to the user,
    // while also hiding all other divs with the class name 'div-item' by adding 'display-none' to their class name.
window.onload = function(){
    const menuItems = document.querySelectorAll('.menu-item');
    const divs = document.querySelectorAll('.div-item');
  
    const hide = function(evt){
      divs.forEach(function(d){
         if(evt.target.getAttribute('id') != d.getAttribute('id')) d.classList.add('display-none');
         else d.classList.remove('display-none');
      });
    }
  
    menuItems.forEach(function(d){ d.onclick = hide; })
  }