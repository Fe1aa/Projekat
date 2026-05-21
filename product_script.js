const hatDatabase = {
  cowboy: {
    title: "Cowboy hat",
    description: "Perfect for high noon duels or country music festivals.",
    image: "images/Cowboy hat.png"
  },
  fedora: {
    title: "Fedora",
    description: "Elevate your everyday style with a timeless classic. Crafted with a structured silhouette and a refined silhouette, our Heritage Fedora brings effortless sophistication to any outfit.",
    image: "images/Fedora.png"
  },
  beanie: {
    title: "Beanie",
    description: "Don't let the chill compromise your style. Our Everyday Ribbed Beanie is the ultimate cold-weather essential, designed to deliver maximum warmth without the bulk.",
    image: "images/Beanie.png"
  },
  baseball: {
    title: "Baseball hat",
    description: "Your new daily go-to. Built for the sun, the stadium, and everywhere in between, our 6-Panel Baseball Cap combines athletic heritage with casual comfort.",
    image: "images/Cap.png" 
  }
};

const title_1 = document.getElementById("title");
const description_1 = document.getElementById("description");
const image_1 = document.getElementById("product-image");

function applyParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const choosenHatKey = urlParams.get('hat');

  const hatData = hatDatabase[choosenHatKey];

  if(hatData) {
    title_1.textContent = hatData.title;
    description_1.textContent = hatData.description;
    image_1.src = hatData.image;
  }
}

document.addEventListener("DOMContentLoaded", applyParams);
