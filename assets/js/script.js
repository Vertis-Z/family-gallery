var photoGet = function(data){
    fetch ('https://api.cloudinary.com/v1_1/:ddnmzux27/:action',{
      "method": "GET"
    }).then(Response => {
      if (Response.ok){
        return Response.json()
        .then (function(data){
          console.log(data)
        })
      }
    })
}


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
