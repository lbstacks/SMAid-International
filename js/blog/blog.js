document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
  
    galleryItems.forEach(item => {
        observer.observe(item);
    });
  });
  