
// fetch('https://gist.githubusercontent.com/quarbby/5692cbd3e510df5ecd7cb7c093520dfc/raw/ebe47e8a31d9fa578a8011435cfcb69b5887695c/countries.json').then(res=>{
//     res = res.json()
//     console.log(res);
//     return res
//     // return res.json()
// }).then(result=>{
    // console.log(result)
// })
async function main(){
    let url = `https://restcountries.com/v3.1/all`
    let res = await fetch(url);
    res = await res.json();
    // console.log(res);
    addCountries(res)
}
// main();
let cArr = [];

let addCountries = (data)=>{
    let box = document.getElementById('addCountries');
    data.map(({name:{common},timezones})=>{
        // console.log(common,timezones[0])
        let div = document.createElement('div');
        let p1 = document.createElement('p');
            p1.innerText = common;
        let p2 = document.createElement('p');
            p2.innerText = timezones[0];
        div.append(p1,p2);
        div.addEventListener('mouseenter',(e)=>{
            div.style.backgroundColor = "lightgray"
        });
        div.addEventListener('mouseleave',()=>{
            div.style.backgroundColor = "white"

        });
        div.addEventListener('click',()=>{
            localStorage.setItem('c-name',common);
            document.getElementById('displayCountry').innerText = common;
            count--;
            document.getElementById('addCountries').style.display = "none";

        })
        // div.setAttribute('class','cdiv')
        box.append(div);;
        cArr.push(common);


    })
    subArr();
}


// let coun = document.getElementById('addCountries');
// coun.addEventListener('click',()=>{
//     // main();

//     coun.classList.toggle("mystyle");
// })
let data = localStorage.getItem('c-name') || "india";
document.getElementById('displayCountry').innerText = data;


let countryBtn = document.getElementById('displayCountry');
let count =0;
countryBtn.addEventListener('click',()=>{
    count++;
    // console.log('hi')
    let mainDiv = document.getElementById('addCountries');
    if(count%2==1){
        mainDiv.style.display = "block";
        main();
    }else{
        mainDiv.style.display = "none";
    }

})

// ------search funcalites-------------
// let subArr = ()=>{
//     let count =0
//     let subArr =[];
//     console.log(cArr.length)
// for(let i=0;i<cArr.length;i++){
//   let x = cArr[i];
//   console.log(count++)
//   for(let j=i;j<x.length;j++){
//     let y = x.slice(i,j+1);
//     subArr.push(y);
//   }
// }
// console.log(subArr)
// }
