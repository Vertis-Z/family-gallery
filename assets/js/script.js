const onClick = function () {
  window.localStorage.removeItem("person");
  // window.localStorage.setItem("person", JSON.stringify(this.id));
  window.localStorage.setItem("person", this.id);
  window.location.assign("./assets/html/gallery-temp.html");
};

const onClickChild = function () {
  window.localStorage.removeItem("person");
  // window.localStorage.setItem("person", JSON.stringify(this.id));
  window.localStorage.setItem("person", this.id);
  window.location.assign("./assets/html/profile-temp.html");
};

document.getElementById("person000").onclick = onClick;
document.getElementById("person001").onclick = onClick;
document.getElementById("person002").onclick = onClick;
document.getElementById("person003").onclick = onClick;
document.getElementById("person004").onclick = onClick;
document.getElementById("person005").onclick = onClick;
document.getElementById("person006").onclick = onClick;
document.getElementById("person007").onclick = onClick;
document.getElementById("person008").onclick = onClick;
document.getElementById("person009").onclick = onClick;
document.getElementById("person010").onclick = onClick;
document.getElementById("person010-c").onclick = onClickChild;
document.getElementById("person011").onclick = onClick;
document.getElementById("person012").onclick = onClick;
document.getElementById("person013").onclick = onClick;
document.getElementById("person014").onclick = onClick;
document.getElementById("person015").onclick = onClick;
document.getElementById("person016").onclick = onClick;
document.getElementById("person017").onclick = onClick;
document.getElementById("person018").onclick = onClick;
document.getElementById("person019").onclick = onClick;
document.getElementById("person019-c").onclick = onClickChild;
document.getElementById("person020").onclick = onClick;
document.getElementById("person021").onclick = onClick;
document.getElementById("person022").onclick = onClick;
document.getElementById("person023").onclick = onClick;
document.getElementById("person024").onclick = onClick;
document.getElementById("person025").onclick = onClick;
document.getElementById("person026").onclick = onClick;
document.getElementById("person027").onclick = onClick;
document.getElementById("person028").onclick = onClick;
document.getElementById("person029").onclick = onClick;
document.getElementById("person030").onclick = onClick;
document.getElementById("person031").onclick = onClick;
document.getElementById("person032").onclick = onClick;
document.getElementById("person033").onclick = onClick;
document.getElementById("person034").onclick = onClick;
document.getElementById("person035").onclick = onClick;
document.getElementById("person036").onclick = onClick;
document.getElementById("person037").onclick = onClick;
document.getElementById("person038").onclick = onClick;
document.getElementById("person039").onclick = onClick;
document.getElementById("person040").onclick = onClick;
document.getElementById("person041").onclick = onClick;
document.getElementById("person042").onclick = onClick;
document.getElementById("person043").onclick = onClick;
document.getElementById("person044").onclick = onClick;
document.getElementById("person045").onclick = onClick;
document.getElementById("person046").onclick = onClick;
document.getElementById("person047").onclick = onClick;
document.getElementById("person048").onclick = onClick;
document.getElementById("person049").onclick = onClick;
document.getElementById("person050").onclick = onClick;
document.getElementById("person051").onclick = onClick;
document.getElementById("person053").onclick = onClick;
document.getElementById("person054").onclick = onClick;
document.getElementById("person055").onclick = onClick;
document.getElementById("person056").onclick = onClick;
document.getElementById("person057").onclick = onClick;
document.getElementById("person058").onclick = onClick;
document.getElementById("person059").onclick = onClick;
document.getElementById("person060").onclick = onClick;
document.getElementById("person061").onclick = onClick;
document.getElementById("person062").onclick = onClick;
document.getElementById("person063").onclick = onClick;
document.getElementById("person064").onclick = onClick;
document.getElementById("person065").onclick = onClick;
document.getElementById("person066").onclick = onClick;
document.getElementById("person067").onclick = onClick;
document.getElementById("person068").onclick = onClick;
document.getElementById("person069").onclick = onClick;
document.getElementById("person070").onclick = onClick;
document.getElementById("person071").onclick = onClick;
document.getElementById("person072").onclick = onClick;
document.getElementById("person073").onclick = onClick;
document.getElementById("person074").onclick = onClick;

// <--------------- Scroll to top button ------------------>
//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
