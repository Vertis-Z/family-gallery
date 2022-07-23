// -------- Person name-------------
var insertName = document.getElementById("titleName");
insertName.textContent += " de " + person000.name;
// -------- IMG For Loop------------
for (let i = 0; i < person000.image.length; i++) {
  let galleryImage = person000.image[i];
  let pic = document.createElement("img");
  pic.src = galleryImage;
  var div = document.getElementById("gallery");
  div.appendChild(pic);
};