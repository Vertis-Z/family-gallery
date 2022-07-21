// -------------TEST ARRAY 1-------------------------
// // Declare an array object for our array of images
// let array = [];

// array.push([
//   // grandma //
//   "Julia Abarca Chavez",
//   [
//     "../image/no_photo.png",
//     "../image/no_photo.png",
//     "../image/no_photo.png",
//     "../image/no_photo.png",
//   ],
// ]);

// array.push([
//   "https://site.com/image-2.jpeg",
//   "Title 2",
//   "720px",
//   "1280px",
// ]);

// array.push([
//   "https://site.com/image-3.jpeg",
//   "Title 3",
//   "1080px",
//   "1920px",
// ]);

// // Output imageArray to the console
// console.log(array);

// ------------TEST ARRAY 2---------------
let imageArray = [];
let name = ('');
let person0 = {};

person0.name = "Julia Abarca Chavez";
person0.profile = "../image/no_photo.png";
person0.image = ([
  "../image/no_photo.png",
  "../image/no_photo.png",
  "../image/no_photo.png",
  "../image/no_photo.png",
]);

let person1 = {};

person1.name = "michael"

imageArray.push(person0, person1);

console.log(imageArray);

//-------------------TEST ARRAY 3-----------------
// const people = [
//   {name: 'Julia Abarca Chavez', image: ["../image/no_photo.png","../image/no_photo.png","../image/no_photo.png",]}, 
//   {name: 'Andrew', age: 3}, 
//   {name: 'Peter', age: 8}, 
//   {name: 'Hanna', age: 14}, 
//   {name: 'Adam', age: 37}
// ];
// console.log(people)
// ------------ append body code ------------------
// ------------- v1 code ----------------
var img = document.createElement("img")
img.src = ("../image/no_photo.png");
var div = document.getElementById("gallery");
div.appendChild(img)

// var createResults = function (data){
//   for (let i = 0; i < person0.image.length; i++){
//     let
//   }
// }