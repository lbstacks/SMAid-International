
// Mobile Menu 
   $(function() {
     $(".toggle").on("click", function() {
        if($(".menu").hasClass("active")) {
          $(".menu").removeClass("active");
          $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon> ");
        }else {
          $(".menu").addClass("active");
          $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");

        }
     });
   });
 // End Mobile Menu



// Navbar sticky
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});





//Bunner slider slick init 
$('.banner-slider').slick({
    dots:true,
    arrows:true,
    infinite:true,
    speed:1000,
    slidesToShow:1,
    adaptiveHeight:true,
    draggable:true,
    autoplay:true,
    autoplaySpeed:5000,
    prevArrow: '<div class="slick-arrow prev"><span class="fa fa-angle-left"></span></div>',
    nextArrow: '<div class="slick-arrow next"><span class="fa fa-angle-right"></span></div>'
})




//statistic counter 
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // 
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target'); // 
        const count = +counter.innerText.replace('+', ''); // 
  
        const increment = target / speed; 
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment); 
          setTimeout(updateCount, 5); 
        } else {
          counter.innerText = target + '+'; 
        }
      };
  
      updateCount();
    });
  });
  
  
  



   // Loader
document.addEventListener('DOMContentLoaded', () => {
  const loaderElement = document.getElementById('loader');
  if (loaderElement) {
      setTimeout(() => {
          loaderElement.classList.remove('show');
      }, 500); // Adjust the delay as needed
  }
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});








