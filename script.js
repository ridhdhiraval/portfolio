document.addEventListener("DOMContentLoaded", function() {
  // Typing text slideshow
  const textArray = [
    "UI/UX Designer",
    "Frontend Developer",
    "Flutter Developer",
    "C# Developer",
    "Creative Thinker"
  ];

  const typingText = document.getElementById("typingText");
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = "";

  function typeEffect() {
    currentText = textArray[index];
    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex--);
    } else {
      typingText.textContent = currentText.substring(0, charIndex++);
    }

    let typeSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  typeEffect();

  // Contact form alert
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert("Message sent successfully!");
    e.target.reset();
  });
});
