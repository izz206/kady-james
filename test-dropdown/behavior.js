// Get references to elements
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const panelContents = document.querySelectorAll('.panel-content');

// 1. Toggle dropdown menu visibility on button click
dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

// 2. Handle clicking a dropdown item
dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    // Get the target ID from the clicked item's data-target attribute
    const targetId = e.target.getAttribute('data-target');

    // Hide all separate content panels
    panelContents.forEach(panel => {
      panel.classList.remove('active');
    });

    // Show the specific target content panel
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }

    // Close the dropdown menu after selection
    dropdownMenu.classList.remove('show');
  });
});

// 3. Close the dropdown if the user clicks outside of it
window.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});
