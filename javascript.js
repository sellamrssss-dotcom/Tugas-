// javascript.js
// Script to handle contact form submission

document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = encodeURIComponent(document.getElementById('name').value);
            const email = encodeURIComponent(document.getElementById('email').value);
            const message = encodeURIComponent(document.getElementById('message').value);
            const subject = encodeURIComponent('Contact from ATOM Website');
            const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
            window.location.href = `mailto:atom111396@gmail.com?subject=${subject}&body=${body}`;
        });

