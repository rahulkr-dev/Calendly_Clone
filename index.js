let database=JSON.parse(localStorage.getItem("database"))||[];

class user{
    constructor(name)
    {
        this.name=name;
        // this.status="false";
    }
    signup(email,password)
    {
        let valid= false;
        valid=this.Validemail(email)&&this.validpassword(password);
        if(valid)
        {
            this.email=email;
            this.password=password;
            database.push(this);
            localStorage.setItem("database",JSON.stringify(database));
            alert(`${this.name}, Your Signup is successful!`)
        }
        else{
            // alert("follow rule of email and password");
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
        let filter=database.filter((ele)=>{
            return ele.email==email;
        })
        if(filter.length==0)
        {
            return true;
        }
        else{
          alert("this email is linked to another account")
        return false
        }
    }
   validpassword(password)
    {
      password=password.split("");
      if(password.length>=8){
        return true;
      }else
    return false;
    }

}
function addData(){
    let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
// let status="false";
// let data={name,email,password,status};
// database.push(data);
// localStorage.setItem("database",JSON.stringify(database));
let person=new user(name);
person=new signup(email,password);



}



