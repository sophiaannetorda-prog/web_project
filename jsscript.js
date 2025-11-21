document.getElementById('greetBtn')?.addEventListener('click', function() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
    if(hours < 12) greeting = "Hi! Good morning.";
    else if(hours < 18) greeting = "Hello! Good afternoon.";
    else greeting = "Greetings? HAHA. Good evening.";
    document.getElementById('greeting').textContent = greeting;
});

const form = document.getElementById('contactForm');
form?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(name && email && message){
        document.getElementById('formFeedback').textContent = "Thank you for your message!";
        form.reset();
    } else {
        document.getElementById('formFeedback').textContent = "Please fill out all fields.";
    }
});