document.addEventListener('keydown', function(event) {
  if (event.keyCode === 123) { // F12 key code
    event.preventDefault();
    // Optionally, you can display a message to the user
    //alert('Developer tools are disabled on this page.');
  }
});

// To also disable Ctrl+Shift+I (another way to open Inspect Element)
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) { // Ctrl+Shift+I key codes
    event.preventDefault();
    // Optionally, you can display a message to the user
    //alert('Developer tools are disabled on this page.');
  }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  // Optionally, you can display a message to the user
  //alert('Right-click is disabled on this page.');
});