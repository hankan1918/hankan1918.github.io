const imgs = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];
const choosedImage = imgs[Math.floor(Math.random()*imgs.length)];
const backgroundImage = document.createElement("img");

backgroundImage.classList.add("bg")
backgroundImage.src = `img/${choosedImage}`;
document.body.appendChild(backgroundImage);