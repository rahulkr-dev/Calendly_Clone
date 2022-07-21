// ------- Import ------ hed and top section
import { header, top } from "./components/help.js";
document.querySelector('.head').innerHTML += header();
document.querySelector('.top').innerHTML += top();

async function main() {
    let url = `https://restcountries.com/v3.1/all`
    let res = await fetch(url);
    res = await res.json();
    // console.log(res);
    addCountries(res)
}
// main();
let cArr = [];

let addCountries = (data) => {
    let box = document.getElementById('addCountries');
    data.map(({ name: { common }, timezones }) => {
        // console.log(common,timezones[0])
        let div = document.createElement('div');
        let p1 = document.createElement('p');
        p1.innerText = common;
        let p2 = document.createElement('p');
        p2.innerText = timezones[0];
        div.append(p1, p2);
        div.addEventListener('mouseenter', (e) => {
            div.style.backgroundColor = "lightgray"
        });
        div.addEventListener('mouseleave', () => {
            div.style.backgroundColor = "white"

        });
        div.addEventListener('click', () => {
            localStorage.setItem('c-name', common);
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
let count = 0;
countryBtn.addEventListener('click', () => {
    count++;
    // console.log('hi')
    let mainDiv = document.getElementById('addCountries');
    if (count % 2 == 1) {
        mainDiv.style.display = "block";
        main();
    } else {
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

// ------- adding input fields by using loop -------
let inputFieldSet = () => {
    let inputArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    for (let i = 0; i < inputArr.length; i++) {
        let inp = document.querySelector('.addInputTimes');
        inp.innerHTML += `      <div class="input_time">
        <div class="input_time_first">
            <input type="checkbox" name="" id="">
            <span>${inputArr[i]}</span>
            <input type="text" name="" id="" value="9:00">
            <span> - </span>
            <input type="text" name="" id="" value="5:00">
            <span><i class="fa-regular fa-trash-can"></i></span>
        </div>
        <div class="input_time_second">
            <span>+</span>
            <span><i class="fa-regular fa-copy"></i></span>
        </div>
    </div>`
    }
}
inputFieldSet();
