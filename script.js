document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!validateEmail(email) || !message) {
    alert('Please provide a valid email and message.');
    return;
  }

  try {
    const response = await fetch('https://823oik3ymk.execute-api.eu-west-1.amazonaws.com/prod/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message })
    });

    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Failed to submit form.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while submitting the form.');
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
