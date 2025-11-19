


document.getElementById('applyChanges'). addEventListener ('click', function()
 {
 userName = document. getElementById('userName').value;

 displayMessage = document.getElementById('displayMessage'). value;

     background = document.getElementById('background').value;


   
if (userName) {
        document.getElementById('userGreeting').textContent =   `Hello ${userName}!`;
    }

    if (displayMessage) {
        document.getElementById('message').textContent = displayMessage;
    }

   
   
    function changeBackground() {
    
    const colorSelector = document.getElementById('background');
    
    const selectedColor = colorSelector.value;
    document.body.style.backgroundColor = selectedColor;
}

    changeBackground();
});