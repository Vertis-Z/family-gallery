const onClick = function () {
  window.localStorage.removeItem("person");
  // window.localStorage.setItem("person", JSON.stringify(this.id));
  window.localStorage.setItem("person", this.id);
  window.location.assign("./assets/html/gallery-temp.html");
};

const onClickChild = function () {
  window.localStorage.removeItem("person");
  window.localStorage.setItem("person", JSON.stringify(this.id));
  // window.localStorage.setItem("person", this.id);
  window.location.assign("./assets/html/profile-temp.html");
};

var i = 001

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