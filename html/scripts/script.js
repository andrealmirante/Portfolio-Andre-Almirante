const typeElement = document.querySelector('.typewrite .wrap');

const phrases = [
  'Desenvolvedor Front-end Jr.'
];

let phraseIndex = 0;
let charIndex = 0;  

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (charIndex < currentPhrase.length) {
    typeElement.textContent += currentPhrase.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); 
  } else {
 
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex >= 0) {
    typeElement.textContent = phrases[phraseIndex].substring(0, charIndex);
    charIndex--;
    setTimeout(erase, 50); 
  } else {
    
    phraseIndex = (phraseIndex + 1) % phrases.length;

    setTimeout(type, 1000);
  }
}

type();
