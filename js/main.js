const words = ["Mohammed Esmail", "Developer"];
let currentWord = 0;
let currentChar = 0;
let isDeleting = false;
let element = document.getElementById("typing-text");

function type() {
  let word = words[currentWord];
  let displayText = word.substring(0, currentChar);
  element.innerHTML = displayText ;

  if (!isDeleting && currentChar < word.length) {
    currentChar++;
    setTimeout(type, 100);
  } else if (isDeleting && currentChar > 0) {
    currentChar--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) currentWord = (currentWord + 1) % words.length;
    setTimeout(type, 1000);
  }
}
type();

$(window).scroll(function () {
  if (window.scrollY > $('#works').offset().top - 250) {
    $('.toUp').removeClass('d-none')
  }
  else{
    $('.toUp').addClass('d-none')
  }
})
$('.toUp').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 200);
})

// particlesJS
particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 4 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 0.9723133766012793,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 96,
      color: "#ffffff",
      opacity: 0.48,
      width: 0.96
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
