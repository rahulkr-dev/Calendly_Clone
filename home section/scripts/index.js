import navbar23 from"../components/navbar.js";

document.getElementById("navbar23").innerHTML=navbar23();


var serinp = document.getElementById('search');
var searchBtn = document.getElementById('serch_btn');
var alldata = localStorage.getItem('formdata');
alldata = JSON.parse(alldata);
var html = '';
console.log(alldata == null);
if(alldata != null)
{
    console.log('jjj');
    for (i = alldata.length - 1; i >= 0; i--) {
        html += `<div class="datadiv">
        <div class="color_datadiv"></div>`
        // for (j = 0; j < alldata[i].length; j++) {
            html += `<h1>${alldata[i][0]}</h1>
                    <h3>${alldata[i][3]},${alldata[i][2]}</h3>
                    <hr/>
                    <p class="blue_text">/${alldata[i][4]}</p>
                    <button class="copy_link">Copy Link</button>`
            // console.log(alldata[i][j]);
        // }
        html += `</div>`
}
}

document.getElementById('showdata').innerHTML = html;

function search() {
    document.getElementById('showdata').textContent = '';
   // console.log(serinp.value);
    var html = '';
    var count = 0;
    html += `<div class="datadiv" style="width:75%">
    <div class="color_datadiv"></div>`
    for (i = alldata.length - 1; i >= 0; i--) {
        console.log(alldata[i]);
       
        // for (j = 0; j < alldata[i].length; j++) {
           // console.log(alldata[i][0]);
            if (alldata[i][0] == serinp.value) {
                console.log('hello')
                html += `<h1>${alldata[i][0]}</h1>
                <h3>${alldata[i][3]},${alldata[i][2]}</h3>
                <hr/>
                <p class="blue_text">/${alldata[i][4]}</p>
                <button class="copy_link">Copy Link</button>`
                count = 5;
            // }
            
        }
       
    }
    html += `</div>`
    console.log(count);
    if (count == 5) {
        document.getElementById('showdata').innerHTML = html;
    }
    
}

searchBtn.addEventListener('click', search);
document.getElementById('create').addEventListener('click',()=>{
    window.location.href = './one-on-onPage.html'
})