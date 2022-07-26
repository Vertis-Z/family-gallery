// -------- Person name-------------
const onClick = function () {
  // localStorage.setItem("person", JSON.stringify(this.id));
  localStorage.clear();
  localStorage.setItem("person", this.id);
  window.location.href = "./assets/html/gallery-temp.html";
};

// need to create a function using the data below
var display = function () {
  var personData = JSON.parse(window.localStorage.getItem("person"));
  var insertName = document.getElementById("titleName");
  insertName.textContent += " de " + personData.name;

  // -------- IMG For Loop------------
  for (let i = 0; i < localStorage.getItem("person").image.length; i++) {
    let galleryImage = localStorage.getItem("person").image[i];
    let pic = document.createElement("img");
    pic.src = galleryImage;
    var div = document.getElementById("gallery");
    div.appendChild(pic);
  }
};

display();
