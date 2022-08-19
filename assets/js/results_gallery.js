// -------- Get Person ID# -------------
const onClick = function () {
  window.localStorage.removeItem("person");
  // window.localStorage.setItem("person", JSON.stringify(this.id));
  window.localStorage.setItem("person", this.id);
  window.location.assign("./assets/html/gallery-temp.html");
};

// let personData = JSON.parse(window.localStorage.getItem("person"));
// personData = window.localStorage.getItem("person");
var personData = ""
// create an if argument that sets eatch Localstorage value as a string
if (
  localStorage.person == "person000") {
    personData = personArray.person000;
}

// need to create a function using the data below
var display = function () {
  // var personData = JSON.parse(window.localStorage.getItem("person"));
  var insertName = document.getElementById("titleName");
  insertName.textContent += " de " + personData.name;

  // -------- IMG For Loop------------
  for (let i = 0; i < personData.image.length; i++) {
    let galleryImage = personData.image[i];
    let pic = document.createElement("img");
    pic.src = galleryImage;
    var div = document.getElementById("gallery");
    div.appendChild(pic);
  }
};

display();
