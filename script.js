//events blah blah

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/
 // Source - https://stackoverflow.com/a/68464106
// Posted by Kinglish
// Retrieved 2026-04-26, License - CC BY-SA 4.0

//trying smth new

window.addEventListener('load', function() {
  // wait until the page loads before working with HTML elements
  document.addEventListener('click', function(event) {
    //click listener on the document
    document.querySelectorAll('.dropdown-content').forEach(function(el) {
      if (el !== event.target) el.classList.remove('show')
      // close any showing dropdown that isn't the one just clicked
    });
    if (event.target.matches('.dropbtn')) {
      event.target.closest('.dropdown').querySelector('.dropdown-content').classList.toggle('show')
    }
    // if this is a dropdown button being clicked, toggle the show class
  })
})