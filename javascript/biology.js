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