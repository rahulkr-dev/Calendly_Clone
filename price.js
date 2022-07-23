
    let logperson=JSON.parse(localStorage.getItem("logperson"))||[];

window.checkoffer=function()
{
    if(logperson.length>0){
        alert("Prime membershif is active")
    }else{
        alert("please log in your account");
    }
   
}