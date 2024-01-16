document.addEventListener('DOMContentLoaded', function () {
  // Initialize ScrollReveal for header and website content
  ScrollReveal().reveal('.website-part1, .website-part2, .web-part-1 , .web-part-2, .web-part-3, .web-part-4', {
    duration: 800,
    easing: 'ease-in-out',
    scale: 1,
    viewFactor: 0.5,
    reset: true,
    distance: '20px',
    origin: 'bottom',
  });

  ScrollReveal().reveal('.tech-name, .tool-pic', {
    duration: 800,
    easing: 'ease-in-out',
    scale:1,
    viewFactor: 0.5,
    reset: true,
    distance: '220px',
    origin: 'left',
  });

  ScrollReveal().reveal('.tool-info', {
    duration: 800,
    easing: 'ease-in-out',
    scale:1,
    viewFactor: 0.5,
    reset: true,
    distance: '220px',
    origin: 'right',
  });

  // Initialize ScrollReveal for individual techs (HTML, CSS, JS, Java, MySQL, Spring Boot)
  document.querySelectorAll('.techs').forEach(function (tech, index) {
    ScrollReveal().reveal(tech, {
      duration: 800,
      easing: 'ease-in-out',
      scale: 1,
      viewFactor: 0.5,
      reset: true,
      distance: '20px',
      origin: 'bottom',
      delay: 200 * (index + 1), // Adjust the delay for staggered appearance
    });
  });

  // Add a scroll event listener
  window.addEventListener('scroll', function () {
  
    
    // Get the offset of the .techs-used section
    var techsUsedOffset = document.querySelector('.techs-used').offsetTop;
    // Get the current scroll position
    var scrollPosition = window.scrollY + window.innerHeight;

    // Check if the scroll position is greater than the offset of .techs-used
    if (scrollPosition > techsUsedOffset) {
      // Add the 'reveal' class to trigger the CSS animation
      document.querySelectorAll('.techs').forEach(function (tech) {
        tech.classList.add('reveal');
      });
    }
    var introChange = document.querySelector(".intro-li");
    
    var techChange = document.querySelector(".techno-li");

    var toolChange = document.querySelector(".tools-li")
    var socialChange = document.querySelector(".social-li");
    if(window.scrollY < 692) {
      //intro
      introChange.classList.add("increase");
      techChange.classList.remove("increase");
      toolChange.classList.remove("increase");
      socialChange.classList.remove("increase");
    }
    if(window.scrollY > 692 && window.scrollY < 1519) {
      //tech
      introChange.classList.remove("increase");
      techChange.classList.add("increase");
      toolChange.classList.remove("increase");
      socialChange.classList.remove("increase");

      
    }
    if(window.scrollY > 1519 && window.scrollY < 2200) {
      //tools
      introChange.classList.remove("increase");
      techChange.classList.remove("increase");
      toolChange.classList.add("increase");
      socialChange.classList.remove("increase");
    }
    if(window.scrollY > 2200) {
      //intro
      introChange.classList.remove("increase");
      techChange.classList.remove("increase");
      toolChange.classList.remove("increase");
      socialChange.classList.add("increase");
    }

    introChange.addEventListener("click", function() {
      document.querySelector(".website-part1").scrollIntoView({behavior : 'smooth'});
    })

    techChange.addEventListener("click", function() {
      document.querySelector(".techs-used").scrollIntoView({behavior:"smooth"});
    })

    toolChange.addEventListener("click", function() {
      document.querySelector(".tools").scrollIntoView({behavior:"smooth"});
    })

    socialChange.addEventListener("click", function() {
      document.querySelector(".all-social-media").scrollIntoView({behavior:"smooth"});
    })
  });

  
});