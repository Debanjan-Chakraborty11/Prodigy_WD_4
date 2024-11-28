// Simple form validation and submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing page
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you shortly.');
        document.getElementById('contact-form').reset(); // Reset form fields
    } else {
        alert('Please fill out all fields!');
    }
});
