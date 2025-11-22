/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const messageDiv = document.querySelector('.newsletter .message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        
        if (email === '') {
            displayMessage('Please enter a valid email address.', 'error');
        } else {
            displayMessage(`Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`, 'success');
            emailInput.value = '';
        }
    });
    
    function displayMessage(message, type) {
        messageDiv.innerHTML = message;
        messageDiv.style.color = type === 'error' ? '#F56565' : 'white';
        messageDiv.style.backgroundColor = type === 'error' ? '#FED7D7' : 'transparent';
        messageDiv.style.padding = '10px';
        messageDiv.style.borderRadius = '5px';
    }
});