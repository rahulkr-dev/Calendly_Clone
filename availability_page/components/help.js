// ---common header
let header = () => {
    return ` <p>Choose a schedule below to edit or create a new one that you can apply to your event types</p>
    <h3>SCHEDULE</h3>
    <section id="section-1">
        <div> <span><i class="fa-solid fa-fax"></i></span> Working Hours</div>
        <div><span><i class="fa-solid fa-clipboard-user"></i></span> 4 Hours</div>
        <div id ="addScheduleBtn"> + New schedule</div>
    </section>`
}
// -----common top section 
let top = () => {
    return `  <div>
    <p>4hours</p>
    <div class="setIcon"><span><i class="fa-solid fa-gear"></i></span></div>
</div>
<div>
    <p>ACTIVE ON</p>
    <P>TIME ZONE</P>
</div>
<div>
    <div>
        <button id ="eventType" class="topBtn"> <span id="count_event">4</span><span id ="eventT" > Event Type</span><div id="eventTypeDropDown"></div></button>
        <button class="topBtn" id="countries">
            <p id="displayCountry">rahul</p>
            <div id="addCountries">
                <input type="text" name="" id="search" placeholder="Search...">
                <h4>Time Zone</h4>
            </div>
        </button>
    </div>
    <div class="topSecond">
        <div><span><i class="fa-solid fa-list"></i></span> List View</div>
        <div><span><i class="fa-solid fa-table-list"></i></span> Calendar View</div>
    </div>
</div>`
}

let arrroMove = (elem)=>{
    elem.setAttribute('class','arro-box')
    let span = document.createElement('span');
    span.setAttribute('class','arro');
    elem.append(span);
    // console.log(elem)
    // elem.addEventLinstner('click',()=>{
    //     span.classList.toggle('change')
    // })
}

export { header, top,arrroMove }
