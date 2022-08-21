// -------- Get Person ID# -------------
const onClick = function () {
  window.localStorage.removeItem("person");
  window.localStorage.setItem("person", this.id);
  window.location.assign("./assets/html/profile-temp.html");
};

// create an if argument that sets eatch Localstorage value as a string
var personData = "";
if (localStorage.person == "person000-c") {
  personData = person000;
} else if (localStorage.person == "person001-c") {
  personData = person001;
} else if (localStorage.person == "person002-c") {
  personData = person002;
} else if (localStorage.person == "person003-c") {
  personData = person003;
} else if (localStorage.person == "person004-c") {
  personData = person004;
} else if (localStorage.person == "person005-c") {
  personData = person005;
} else if (localStorage.person == "person006-c") {
  personData = person006;
} else if (localStorage.person == "person007-c") {
  personData = person007;
} else if (localStorage.person == "person008-c") {
  personData = person008;
} else if (localStorage.person == "person009-c") {
  personData = person009;
} else if (localStorage.person == "person010-c") {
  personData = person010;
} else if (localStorage.person == "person011-c") {
  personData = person011;
} else if (localStorage.person == "person012-c") {
  personData = person012;
} else if (localStorage.person == "person013-c") {
  personData = person013;
} else if (localStorage.person == "person014-c") {
  personData = person014;
} else if (localStorage.person == "person015-c") {
  personData = person015;
} else if (localStorage.person == "person016-c") {
  personData = person016;
} else if (localStorage.person == "person017-c") {
  personData = person017;
} else if (localStorage.person == "person018-c") {
  personData = person018;
} else if (localStorage.person == "person019-c") {
  personData = person019;
} else if (localStorage.person == "person020-c") {
  personData = person020;
} else if (localStorage.person == "person021-c") {
  personData = person021;
} else if (localStorage.person == "person022-c") {
  personData = person022;
} else if (localStorage.person == "person023-c") {
  personData = person023;
} else if (localStorage.person == "person024-c") {
  personData = person024;
} else if (localStorage.person == "person025-c") {
  personData = person025;
} else if (localStorage.person == "person026-c") {
  personData = person026;
} else if (localStorage.person == "person027-c") {
  personData = person027;
} else if (localStorage.person == "person028-c") {
  personData = person028;
} else if (localStorage.person == "person029-c") {
  personData = person029;
} else if (localStorage.person == "person030-c") {
  personData = person030;
} else if (localStorage.person == "person031-c") {
  personData = person031;
} else if (localStorage.person == "person032-c") {
  personData = person032;
} else if (localStorage.person == "person033-c") {
  personData = person033;
} else if (localStorage.person == "person034-c") {
  personData = person034;
} else if (localStorage.person == "person035-c") {
  personData = person035;
} else if (localStorage.person == "person036-c") {
  personData = person036;
} else if (localStorage.person == "person037-c") {
  personData = person037;
} else if (localStorage.person == "person038-c") {
  personData = person038;
} else if (localStorage.person == "person039-c") {
  personData = person039;
} else if (localStorage.person == "person040-c") {
  personData = person040;
} else if (localStorage.person == "person041-c") {
  personData = person041;
} else if (localStorage.person == "person042-c") {
  personData = person042;
} else if (localStorage.person == "person043-c") {
  personData = person043;
} else if (localStorage.person == "person044-c") {
  personData = person044;
} else if (localStorage.person == "person045-c") {
  personData = person045;
} else if (localStorage.person == "person046-c") {
  personData = person046;
} else if (localStorage.person == "person047-c") {
  personData = person047;
} else if (localStorage.person == "person048-c") {
  personData = person048;
} else if (localStorage.person == "person049-c") {
  personData = person049;
} else if (localStorage.person == "person050-c") {
  personData = person050;
} else if (localStorage.person == "person051-c") {
  personData = person051;
} else if (localStorage.person == "person052-c") {
  personData = person052;
} else if (localStorage.person == "person053-c") {
  personData = person053;
} else if (localStorage.person == "person054-c") {
  personData = person054;
} else if (localStorage.person == "person055-c") {
  personData = person055;
} else if (localStorage.person == "person056-c") {
  personData = person056;
} else if (localStorage.person == "person057-c") {
  personData = person057;
} else if (localStorage.person == "person058-c") {
  personData = person058;
} else if (localStorage.person == "person059-c") {
  personData = person059;
} else if (localStorage.person == "person060-c") {
  personData = person060;
} else if (localStorage.person == "person061-c") {
  personData = person061;
} else if (localStorage.person == "person062-c") {
  personData = person062;
} else if (localStorage.person == "person063-c") {
  personData = person063;
} else if (localStorage.person == "person064-c") {
  personData = person064;
} else if (localStorage.person == "person065-c") {
  personData = person065;
} else if (localStorage.person == "person066-c") {
  personData = person066;
} else if (localStorage.person == "person067-c") {
  personData = person067;
} else if (localStorage.person == "person068-c") {
  personData = person068;
} else if (localStorage.person == "person069-c") {
  personData = person069;
} else if (localStorage.person == "person070-c") {
  personData = person070;
} else if (localStorage.person == "person071-c") {
  personData = person071;
} else if (localStorage.person == "person072-c") {
  personData = person072;
} else if (localStorage.person == "person073-c") {
  personData = person073;
} else if (localStorage.person == "person074-c") {
  personData = person074;
} else alert("ERROR PERSON NOT FOUND!");

var display = function () {
  // partner images
  let mainImg = personData.profile;
  let mainName = personData.name;
  let partImg;
  if ((personData.partner[0].profile = null)) {
    partImg = "";
  } else {
    partImg = personData.partner[0].profile;
  }
  let partName;
  if ((personData.partner[0].name = null)) {
    partName = "";
  } else {
    partName = personData.partner[0].name;
  }
  let personCard = document.createElement("div");
  personCard.setAttribute("class", "profile");
  personCard.setAttribute("id", "profile");
  let cardCont = document.createElement("a");
  cardCont.setAttribute("href", "#");
  let mainImgCont = document.createElement("img");
  mainImgCont.setAttribute("src", mainImg);
  let mainNameCont = document.createElement("h3");
  let mainNameText = document.createTextNode(mainName);
  let partImgCont = document.createElement("img");
  partImgCont.setAttribute("src", partImg);
  let partNameCont = document.createElement("h3");
  let partNameText = document.createTextNode(partName);

  document.getElementById("mainPics").append(personCard);
  personCard.append(cardCont);
  cardCont.append(mainImg);
  cardCont.append(mainNameCont);
  mainName.append(mainNameText);


  // -------- child For Loop------------
  for (let i = 0; i < personData.children.length; i++) {
    // let childImage = personData.children[i].profile;
    // let childName = personData.children[i].name;
    // let pic = document.createElement("img");
    // let name = document.createElement("h3");
    // var div = document.getElementById("altPics");
    // pic.src = childImage;
    // name.innerText = childName;
    // div.appendChild(pic,name);
  }
};

display();
