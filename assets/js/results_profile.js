// -------- Get Person ID# -------------
const onClick = function () {
  window.localStorage.removeItem("person");
  window.localStorage.setItem("person", this.id);
  window.location.assign("./assets/html/profile-temp.html");
};

// create an if argument that sets eatch Localstorage value as a string
var personProfile = "";
if (localStorage.person == "person000-c") {
  personProfile = person000;
} else if (localStorage.person == "person001-c") {
  personProfile = person001;
} else if (localStorage.person == "person002-c") {
  personProfile = person002;
} else if (localStorage.person == "person003-c") {
  personProfile = person003;
} else if (localStorage.person == "person004-c") {
  personProfile = person004;
} else if (localStorage.person == "person005-c") {
  personProfile = person005;
} else if (localStorage.person == "person006-c") {
  personProfile = person006;
} else if (localStorage.person == "person007-c") {
  personProfile = person007;
} else if (localStorage.person == "person008-c") {
  personProfile = person008;
} else if (localStorage.person == "person009-c") {
  personProfile = person009;
} else if (localStorage.person == "person010-c") {
  personProfile = person010;
} else if (localStorage.person == "person011-c") {
  personProfile = person011;
} else if (localStorage.person == "person012-c") {
  personProfile = person012;
} else if (localStorage.person == "person013-c") {
  personProfile = person013;
} else if (localStorage.person == "person014-c") {
  personProfile = person014;
} else if (localStorage.person == "person015-c") {
  personProfile = person015;
} else if (localStorage.person == "person016-c") {
  personProfile = person016;
} else if (localStorage.person == "person017-c") {
  personProfile = person017;
} else if (localStorage.person == "person018-c") {
  personProfile = person018;
} else if (localStorage.person == "person019-c") {
  personProfile = person019;
} else if (localStorage.person == "person020-c") {
  personProfile = person020;
} else if (localStorage.person == "person021-c") {
  personProfile = person021;
} else if (localStorage.person == "person022-c") {
  personProfile = person022;
} else if (localStorage.person == "person023-c") {
  personProfile = person023;
} else if (localStorage.person == "person024-c") {
  personProfile = person024;
} else if (localStorage.person == "person025-c") {
  personProfile = person025;
} else if (localStorage.person == "person026-c") {
  personProfile = person026;
} else if (localStorage.person == "person027-c") {
  personProfile = person027;
} else if (localStorage.person == "person028-c") {
  personProfile = person028;
} else if (localStorage.person == "person029-c") {
  personProfile = person029;
} else if (localStorage.person == "person030-c") {
  personProfile = person030;
} else if (localStorage.person == "person031-c") {
  personProfile = person031;
} else if (localStorage.person == "person032-c") {
  personProfile = person032;
} else if (localStorage.person == "person033-c") {
  personProfile = person033;
} else if (localStorage.person == "person034-c") {
  personProfile = person034;
} else if (localStorage.person == "person035-c") {
  personProfile = person035;
} else if (localStorage.person == "person036-c") {
  personProfile = person036;
} else if (localStorage.person == "person037-c") {
  personProfile = person037;
} else if (localStorage.person == "person038-c") {
  personProfile = person038;
} else if (localStorage.person == "person039-c") {
  personProfile = person039;
} else if (localStorage.person == "person040-c") {
  personProfile = person040;
} else if (localStorage.person == "person041-c") {
  personProfile = person041;
} else if (localStorage.person == "person042-c") {
  personProfile = person042;
} else if (localStorage.person == "person043-c") {
  personProfile = person043;
} else if (localStorage.person == "person044-c") {
  personProfile = person044;
} else if (localStorage.person == "person045-c") {
  personProfile = person045;
} else if (localStorage.person == "person046-c") {
  personProfile = person046;
} else if (localStorage.person == "person047-c") {
  personProfile = person047;
} else if (localStorage.person == "person048-c") {
  personProfile = person048;
} else if (localStorage.person == "person049-c") {
  personProfile = person049;
} else if (localStorage.person == "person050-c") {
  personProfile = person050;
} else if (localStorage.person == "person051-c") {
  personProfile = person051;
} else if (localStorage.person == "person052-c") {
  personProfile = person052;
} else if (localStorage.person == "person053-c") {
  personProfile = person053;
} else if (localStorage.person == "person054-c") {
  personProfile = person054;
} else if (localStorage.person == "person055-c") {
  personProfile = person055;
} else if (localStorage.person == "person056-c") {
  personProfile = person056;
} else if (localStorage.person == "person057-c") {
  personProfile = person057;
} else if (localStorage.person == "person058-c") {
  personProfile = person058;
} else if (localStorage.person == "person059-c") {
  personProfile = person059;
} else if (localStorage.person == "person060-c") {
  personProfile = person060;
} else if (localStorage.person == "person061-c") {
  personProfile = person061;
} else if (localStorage.person == "person062-c") {
  personProfile = person062;
} else if (localStorage.person == "person063-c") {
  personProfile = person063;
} else if (localStorage.person == "person064-c") {
  personProfile = person064;
} else if (localStorage.person == "person065-c") {
  personProfile = person065;
} else if (localStorage.person == "person066-c") {
  personProfile = person066;
} else if (localStorage.person == "person067-c") {
  personProfile = person067;
} else if (localStorage.person == "person068-c") {
  personProfile = person068;
} else if (localStorage.person == "person069-c") {
  personProfile = person069;
} else if (localStorage.person == "person070-c") {
  personProfile = person070;
} else if (localStorage.person == "person071-c") {
  personProfile = person071;
} else if (localStorage.person == "person072-c") {
  personProfile = person072;
} else if (localStorage.person == "person073-c") {
  personProfile = person073;
} else if (localStorage.person == "person074-c") {
  personProfile = person074;
} else alert("ERROR PERSON NOT FOUND!");

var display = function () {
  // partner images
  let mainImg = personProfile.profile;
  let mainName = personProfile.name;
  let partImg;
  if ((personProfile.partner[0].profile = null)) {
    partImg = "";
  } else {
    partImg = personProfile.partner[0].profile;
  }
  let partName;
  if ((personProfile.partner[0].name = null)) {
    partName = "";
  } else {
    partName = personProfile.partner[0].name;
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
  cardCont.append(mainImgCont);
  cardCont.append(mainNameCont);
  mainNameCont.append(mainNameText);


  // -------- child For Loop------------
  for (let i = 0; i < personProfile.children.length; i++) {
    // let childImage = personProfile.children[i].profile;
    // let childName = personProfile.children[i].name;
    // let pic = document.createElement("img");
    // let name = document.createElement("h3");
    // var div = document.getElementById("altPics");
    // pic.src = childImage;
    // name.innerText = childName;
    // div.appendChild(pic,name);
  }
};

display();
