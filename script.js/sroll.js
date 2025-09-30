// Select all hidden elements
const hiddenElements = document.querySelectorAll('.hidden');

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // reveal
    } else {
      entry.target.classList.remove('show'); // hide again (optional)
    }
  });
}, { threshold: 0.2 });

// Observe each element
hiddenElements.forEach(el => observer.observe(el));
