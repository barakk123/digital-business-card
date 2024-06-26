document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!validateEmail(email) || !message) {
    alert('Please provide a valid email and message.');
    return;
  }

  // Send email via SES (AWS SDK code to be added later)
  alert('Form submitted successfully!');
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
