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
function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function updateScrollEffect() {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const rawFraction = scrollTop / maxScroll;
  const smoothScroll = easeOutExpo(rawFraction);
  const frameIndex = Math.min(frameCount - 1, Math.floor(smoothScroll * frameCount));
  if (images[frameIndex]?.complete) {
    render(images[frameIndex]);
  }
}

window.addEventListener('scroll', updateScrollEffect);
