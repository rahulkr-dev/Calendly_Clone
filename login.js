let users=JSON.parse(localStorage.getItem("users"))||[];

document.getElementById('submit1').addEventListener('click',checkData);
function checkData()
{ 
    // ev.preventDefault();
     let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
    
    let filter=users.filter((ele)=>{
    return ele.email==email&&ele.password==password;

});
console.log(filter[0]);
if(filter.length>0)
{
    localStorage.setItem("logperson",JSON.stringify(filter));
    alert(`${filter[0].name},your log in  is sucessfull`);
    console.log('this is working')
    location.href = "./home section/indexAnkur.html"
}else{
    alert("Wrong password or email");
}



}
function googlePage()
{
    window.location.href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3DOGB%26tab%3Dkk%26utm_medium%3Dapp&ec=GAlAwAE&flowName=GlifWebSignIn&flowEntry=AddSession";

}
function microsoftPage()
{
    window.location.href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1658305880&rver=7.0.6738.0&wp=MBI_SSL&wreply=https:%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signin%3Fru%3Dhttps%253A%252F%252Faccount.microsoft.com%252F%253Frefp%253Dsignedout-index%2526refd%253Dwww.google.com&lc=2057&id=292666&lw=1&fl=easi2";
}