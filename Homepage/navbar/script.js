const navmenu = document.getElementById("nav-menu");
const togglemenu = document.getElementById("toggle-menu");
const closemenu = document.getElementById("close-menu");
const rightmenu = document.getElementById("right-nav");

togglemenu.addEventListener('click', ()=>{
    navmenu.classList.toggle('show_menu')
    rightmenu.style.display = "none";

});
closemenu.addEventListener('click', ()=>{
    navmenu.classList.remove('show_menu')
    rightmenu.style.display = "flex";
})
