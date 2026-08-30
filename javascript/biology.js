//JavaScript style for section1 of biology
const dropdownItem = document.querySelector('#section1');
dropdownItem.style.backgroundColor = 'pink';
dropdownItem.style.color = 'red';
dropdownItem.style.borderRadius = '12px';
dropdownItem.style.fontStyle = 'italic';

//JavaScript style for option elements of section1 biology
const listItems = document.querySelectorAll('option');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '5rem';
}


//JavaScript style for linking sidebar option element selection to specific document






//live clock and calendar for portal
function updateWidget() {
    const now = new Date();

    // --- CLOCK LOGIC ---
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Add leading zero if digit is less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Push values into the HTML
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;

    // --- CALENDAR LOGIC ---
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let dayName = daysOfWeek[now.getDay()];
    let dayNumber = now.getDate();
    let monthName = months[now.getMonth()];
    let year = now.getFullYear();

    // Formatting date padding
    dayNumber = dayNumber < 10 ? '0' + dayNumber : dayNumber;

    // Push dates into the HTML
    document.getElementById('day-name').textContent = dayName;
    document.getElementById('day-number').textContent = dayNumber;
    document.getElementById('month').textContent = monthName;
    document.getElementById('year').textContent = year;
}

// Call the function immediately so the numbers aren't blank on load
updateWidget();

// Instruct the browser to run the code every 1 second (1000ms)
setInterval(updateWidget, 1000);