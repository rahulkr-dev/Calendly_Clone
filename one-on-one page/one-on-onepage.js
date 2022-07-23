function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// this code is for changing event color

let selectcolor=document.getElementById("selectcolor")
    let red=document.getElementById("red")
    let pink=document.getElementById("pink")
    let magenta=document.getElementById("magenta")
    let violet=document.getElementById("violet")
    let blue=document.getElementById("blue")
    let cyan=document.getElementById("cyan")
    let green=document.getElementById("green")
    let lime=document.getElementById("lime")
    let yellow=document.getElementById("yellow")
    let orange=document.getElementById("orange")
   
    red.addEventListener("click",()=>selectcolor.style.backgroundColor="#ff4f00")
    pink.addEventListener("click",()=>selectcolor.style.backgroundColor="#ff758e")
    magenta.addEventListener("click",()=>selectcolor.style.backgroundColor="#e55cff")
    violet.addEventListener("click",()=>selectcolor.style.backgroundColor="#8247f5")
    blue.addEventListener("click",()=>selectcolor.style.backgroundColor="#0099ff")
    cyan.addEventListener("click",()=>selectcolor.style.backgroundColor="#0ae8f0")
    green.addEventListener("click",()=>selectcolor.style.backgroundColor="#17e885")
    lime.addEventListener("click",()=>selectcolor.style.backgroundColor="#ccf000")
    yellow.addEventListener("click",()=>selectcolor.style.backgroundColor="#f8e436")
    orange.addEventListener("click",()=>selectcolor.style.backgroundColor="#ffa600")

// adding data into local storage
let userArr=JSON.parse(localStorage.getItem("formdata"))||[];
// let userArr=[];
    function formData(event){
       event.preventDefault();

       let userdata={
        eventName:document.getElementById("eventname").value,
        location:document.getElementById("Location").value,
        description:document.getElementById("textarea").value,
        duration:document.getElementById("duration").value,
        link:document.getElementById("link").value,
       };
       userArr.push(userdata)
       
       localStorage.setItem("formdata",JSON.stringify(userArr))

    }