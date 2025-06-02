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
