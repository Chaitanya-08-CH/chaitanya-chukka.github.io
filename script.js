document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (name && email && message) {
    alert('Thanks for your message! I will get back to you soon.');
    this.reset();
  } else {
    alert('Please fill in all fields!');
  }
});
