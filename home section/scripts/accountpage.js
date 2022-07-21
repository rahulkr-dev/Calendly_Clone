import navbar23 from"../components/navbar.js";

document.getElementById("navbar23").innerHTML=navbar23();


let bttbn = document.getElementById("lobbn");
bttbn.addEventListener('click', ()=>{
  logout();
});
function logout() {
    alert("Your Successfully logout from Calendly");
  }
  let btbn = document.getElementById("foot-btn");
  btbn.addEventListener('click', ()=>{
    saved();
  });
  
  function saved() {
    console.log("hello");
    var Name = document.getElementById("name1");
    var message = document.getElementById("msg1");
    var language = document.getElementById("sel-lang");
    var Date = document.getElementById("data-id");
    var datefor = document.getElementById("data-id");
    var count = document.getElementById("country");
    var time = document.getElementById("timezone");
    localStorage.setItem("name1", Name.value);
    localStorage.setItem("msg1", message.value);
    localStorage.setItem("sel-lang", language.value);
    localStorage.setItem("data-id", Date.value);
    localStorage.setItem("data-id", datefor.value);
    localStorage.setItem("country", count.value);
    localStorage.setItem("timezone", time.value);
    alert("Your Changes has been successfully changed");
    window.location.href = "./index.html";
  }


  
  function deleteAcc() {
    localStorage.clear();
    alert("You successfull deleted your account");
  }
  var profile = document.getElementById("Profile");
    var branding = document.getElementById("Branding");
  
  function profile1() {
    document.getElementById("Profile").hidden = false;
    document.getElementById("Branding").hidden = true;
    // console.log(branding);
    // branding.hidden = true;
    // profile.style.display = 'block';
    // Branding.style.display = 'none';
  }
  
  function Brandling() {
    document.getElementById("Profile").hidden = true;
    document.getElementById("Branding").hidden = false;
    
    // console.log(branding);
    // profile.style.display = 'none';
    // Branding.style.display = 'block';
  }