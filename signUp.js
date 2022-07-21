
let users=JSON.parse(localStorage.getItem("users"))||[];
class user{
    constructor(name)
    {
        this.name=name;
        this.status="false";
    }
    signup(email,password)
    {
        let valid= false;
        valid=this.Validemail(email)&&this.validpassword(password);
        if(valid)
        {
            this.email=email;
            this.password=password;
            users.push(this);
            localStorage.setItem("users",JSON.stringify(users));
            alert(`${this.name}, Your booking is successful!`)
            
        }
        else{
            if(this.Validemail(email)==false)
            {
                alert("this email is linked to another account")
            }
            else if(this.validpassword(password)==false)
            {
                alert("password should be more than 8 charectors or numbers")
            }
        }

    }
    Validemail(email)
    {
        let filter=users.filter((ele)=>{
            return ele.email==email;
        })
        if(filter.length==0)
        {
            return true;
        }
        else{
            return false;
        }
    }
   validpassword(password)
   {
    password=password.split("");
    console.log(password);
    if(password.length<8){
      return false;
    }else
  return true;
   }

}
let addData=()=>{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let s=new user(name);
    s. signup(email,password);
    
}