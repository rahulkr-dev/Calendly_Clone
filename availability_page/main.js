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
    // subArr();
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
            <input type="checkbox" name="" class="time_checkbox" checked>
            <span class ="week_name">${inputArr[i]}</span>
            <div class="unavaiable">
            <input type="text" name="" id="" value="9:30 am">
            <span> - </span>
            <input type="text" name="" id="" value="5:00 pm">
            <span class="setIcon delIcon"><i class="fa-regular fa-trash-can"></i></span>
            </div>
        </div>
        <div class="input_time_second">
            <span class="plusIcon setIcon">+</span>
            <span class="setIcon"><i class="fa-regular fa-copy"></i></span>
        </div>
    </div>`
    }
}
inputFieldSet();

// --------- checkbox or delete icon funclaties----------

// let remove = (e)=>{
//     // let element = document.querySelector('.unavaiable');
//     // element.innerHTML = "Unavailable"
//     console.log('hi')
// }
// remove();

let data1 = document.querySelectorAll('.time_checkbox');
// ==>  add event listner to checkbox because onclick is not working,  I don't know why
data1.forEach((ele) => {
    ele.addEventListener('click', () => {
        console.log(ele);
        if (ele.checked == true) {
            ele.parentNode.lastElementChild.innerHTML = ` <input type="text" name="" id="" value="9:30 am">
            <span> - </span>
            <input type="text" name="" id="" value="5:00 pm">
            <span class="setIcon"><i class="fa-regular fa-trash-can"></i></span>`
        } else {
            ele.parentNode.lastElementChild.innerHTML = "Unavailable";

        }
    })
})

//--------- making checkbox by default checked---------
window.addEventListener('DOMContentLoaded', () => {
    // console.log('hi')
    data1.forEach(ele => {
        ele.defaultChecked;
        // console.log(ele)
    })
})

// ---- same delete funcalites in delete icon---------
let detArr = document.querySelectorAll('.delIcon');
detArr.forEach(ele => {
    ele.addEventListener('click', () => {
        // console.log(ele.parentElement)
        let x = ele.parentElement.parentElement.firstElementChild;
        x.checked = false

        //    console.log(x);
        ele.parentElement.innerHTML = "Unavailable";
    })
})


// --------------- Add override button and open calendar section----- >
document.getElementById('add-override').addEventListener('click', () => {
    document.querySelector('.containerCal').style.display = "block";
    document.querySelector('#bodyWithoutCal').style.opacity = "0.3";
})

//-------cancel button on calendar----------

document.getElementById('cancel-btn').addEventListener('click', () => {
    document.querySelector('.containerCal').style.display = "none";
    document.querySelector('#bodyWithoutCal').style.opacity = "1";
})


//-------- Add event listner to td element in months of day ---------

let total_days = document.querySelectorAll('tbody>tr:first-child ~ tr td');
let arrDisplay = JSON.parse(localStorage.getItem('calData')) || [];
total_days.forEach((ele) => {
    ele.addEventListener('click', () => {
        //=> append input time set blew calendar-----
        let set_time = document.querySelector('.cal_set_time');
        set_time.style.height = '6 rem'
        set_time.innerHTML = `<h5>What hours are you available?</h5> <input type="text" name="" id="start" value="9:30 am">
        <span> - </span>
        <input type="text" name="" id="end" value="5:00 pm">
        <span class="setIcon"><i class="fa-regular fa-trash-can"></i></span>`
        // ----------------
        let day = ele.innerText;
        let month = document.querySelector('.dycalendar-span-month-year').innerText;
        let start = document.getElementById('start').value
        let end = document.getElementById('end').value;
        let obj = {
            time: `${start}-${end}`,
            date: `${day} ${month}`
        }
        arrDisplay.push(obj);
        localStorage.setItem('calData', JSON.stringify(arrDisplay));


    })
})

// ---------- append saved data in DOM------
let displayData = () => {
    let element = document.querySelector('#dataFromCal');
    element.innerHTML = null;
    arrDisplay.forEach((ele, ind) => {
        let div = document.createElement('div');
        let p1 = document.createElement('p');
        p1.innerText = ele.date;
        let p2 = document.createElement('p');
        p2.innerText = ele.time;
        // p2.innerHTML += `<i class="fa-regular fa-trash-can" id ="dtl"></i>`
        let span = document.createElement('span');
        span.innerHTML += `<i class="fa-regular fa-trash-can" ></i>`;
        span.addEventListener('click', () => {
            deleteFunCal(ele, ind)
        })
        p2.append(span);
        div.append(p1, p2);
        element.append(div);
    })
}

// ------------- Apply button on calendar---------

document.getElementById('apply-btn').addEventListener('click', () => {
    document.querySelector('.containerCal').style.display = "none";
    document.querySelector('#bodyWithoutCal').style.opacity = "1";
    displayData();
})
window.onload = displayData();


//--------- Delete override list data after clicking on delete icon----
function deleteFunCal(ele, ind) {
    arrDisplay.splice(ind, 1);
    localStorage.setItem('calData', JSON.stringify(arrDisplay))
    displayData();
}






