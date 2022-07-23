// -------- Person name-------------
var insertName = document.getElementById("titleName");
insertName.textContent += " de " + person0.name;
// -------- IMG For Loop------------
for (let i = 0; i < person0.image.length; i++) {
  let galleryImage = person0.image[i];
  let pic = document.createElement("img");
  pic.src = galleryImage;
  var div = document.getElementById("gallery");
  div.appendChild(pic);
};