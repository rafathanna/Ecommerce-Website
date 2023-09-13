let bar = document.getElementById("bar");
let nav = document.getElementById("navbar");
let close = document.getElementById("close");
let main=document.querySelector('.main')

// nav bar js
bar.addEventListener("click", () => {
  nav.classList.add("active");
});


close.addEventListener("click", () => {
  nav.classList.remove("active");
});



// prodetails page :

function change(source){
main.src=source;
}