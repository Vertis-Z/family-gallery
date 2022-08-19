// -------- Get Person ID# -------------
const onClick = function () {
  window.localStorage.removeItem("person");
  window.localStorage.setItem("person", this.id);
  window.location.assign("./assets/html/gallery-temp.html");
};

// create an if argument that sets eatch Localstorage value as a string
var personData = "";
if (localStorage.person == "person000") {
  personData = person000;
} else if (localStorage.person == "person001") {
  personData = person001;
} else if (localStorage.person == "person002") {
  personData = person002;
} else if (localStorage.person == "person003") {
  personData = person003;
} else if (localStorage.person == "person004") {
  personData = person004;
} else if (localStorage.person == "person005") {
  personData = person005;
} else if (localStorage.person == "person006") {
  personData = person006;
} else if (localStorage.person == "person007") {
  personData = person007;
} else if (localStorage.person == "person008") {
  personData = person008;
} else if (localStorage.person == "person009") {
  personData = person009;
} else if (localStorage.person == "person010") {
  personData = person010;
} else if (localStorage.person == "person011") {
  personData = person011;
} else if (localStorage.person == "person012") {
  personData = person012;
} else if (localStorage.person == "person013") {
  personData = person013;
} else if (localStorage.person == "person014") {
  personData = person014;
} else if (localStorage.person == "person015") {
  personData = person015;
} else if (localStorage.person == "person016") {
  personData = person016;
} else if (localStorage.person == "person017") {
  personData = person017;
} else if (localStorage.person == "person018") {
  personData = person018;
} else if (localStorage.person == "person019") {
  personData = person019;
} else if (localStorage.person == "person020") {
  personData = person020;
} else if (localStorage.person == "person021") {
  personData = person021;
} else if (localStorage.person == "person022") {
  personData = person022;
} else if (localStorage.person == "person023") {
  personData = person023;
} else if (localStorage.person == "person024") {
  personData = person024;
} else if (localStorage.person == "person025") {
  personData = person025;
} else if (localStorage.person == "person026") {
  personData = person026;
} else if (localStorage.person == "person027") {
  personData = person027;
} else if (localStorage.person == "person028") {
  personData = person028;
} else if (localStorage.person == "person029") {
  personData = person029;
} else if (localStorage.person == "person030") {
  personData = person030;
} else if (localStorage.person == "person031") {
  personData = person031;
} else if (localStorage.person == "person032") {
  personData = person032;
} else if (localStorage.person == "person033") {
  personData = person033;
} else if (localStorage.person == "person034") {
  personData = person034;
} else if (localStorage.person == "person035") {
  personData = person035;
} else if (localStorage.person == "person036") {
  personData = person036;
} else if (localStorage.person == "person037") {
  personData = person037;
} else if (localStorage.person == "person038") {
  personData = person038;
} else if (localStorage.person == "person039") {
  personData = person039;
} else if (localStorage.person == "person040") {
  personData = person040;
} else if (localStorage.person == "person041") {
  personData = person041;
} else if (localStorage.person == "person042") {
  personData = person042;
} else if (localStorage.person == "person043") {
  personData = person043;
} else if (localStorage.person == "person044") {
  personData = person044;
} else if (localStorage.person == "person045") {
  personData = person045;
} else if (localStorage.person == "person046") {
  personData = person046;
} else if (localStorage.person == "person047") {
  personData = person047;
} else if (localStorage.person == "person048") {
  personData = person048;
} else if (localStorage.person == "person049") {
  personData = person049;
} else if (localStorage.person == "person050") {
  personData = person050;
} else if (localStorage.person == "person051") {
  personData = person051;
} else if (localStorage.person == "person052") {
  personData = person052;
} else if (localStorage.person == "person053") {
  personData = person053;
} else if (localStorage.person == "person054") {
  personData = person054;
} else if (localStorage.person == "person055") {
  personData = person055;
} else if (localStorage.person == "person056") {
  personData = person056;
} else if (localStorage.person == "person057") {
  personData = person057;
} else if (localStorage.person == "person058") {
  personData = person058;
} else if (localStorage.person == "person059") {
  personData = person059;
} else if (localStorage.person == "person060") {
  personData = person060;
} else if (localStorage.person == "person061") {
  personData = person061;
} else if (localStorage.person == "person062") {
  personData = person062;
} else if (localStorage.person == "person063") {
  personData = person063;
} else if (localStorage.person == "person064") {
  personData = person064;
} else if (localStorage.person == "person065") {
  personData = person065;
} else if (localStorage.person == "person066") {
  personData = person066;
} else if (localStorage.person == "person067") {
  personData = person067;
} else if (localStorage.person == "person068") {
  personData = person068;
} else if (localStorage.person == "person069") {
  personData = person069;
} else if (localStorage.person == "person070") {
  personData = person070;
} else if (localStorage.person == "person071") {
  personData = person071;
} else if (localStorage.person == "person072") {
  personData = person072;
} else if (localStorage.person == "person073") {
  personData = person073;
} else if (localStorage.person == "person074") {
  personData = person074;
} else alert("ERROR PERSON NOT FOUND!");

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
