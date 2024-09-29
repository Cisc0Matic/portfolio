

const nav= document.getElementsByClassName("navbar");
window.addEventListener("DOMContentLoaded",()=>{
debugger
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 ) {
        nav.style.background = "white";
       
      } else {
       
        nav.style.background = "black";
      }
    }
    
    
})

