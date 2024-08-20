const words = ["Web Development", "Automation", "Web Scraping"];
let i = 0;
const textElement = document.getElementById("rotating_text");

function rotateText() {
    textElement.style.animation = 'none'; 
    textElement.offsetHeight; 
    textElement.textContent = words[i];
    textElement.style.animation = 'fallIn 1s ease-in-out'; 
    i = (i + 1) % words.length;
}


rotateText();
setInterval(rotateText, 2000);