// Create an array of objects that represents famous people.

// When you click on one of the person elements, the text input 
// should immediately gain focus so that you can start typing.

// When there is a highlighted person element, and you begin 
// typing in the input box, the person's biography should be 
// immediately bound to what you are typing, letter by letter.

// When you press the enter/return key when typing in the input 
// field, then the content of the input field should immediately 
// be blank.

var arrayWysiwyg = [
{
  title: "Pink Lady",
  name: "Stockard Channing",
  bio: "Rizzo",
  image: "http://vignette3.wikia.nocookie.net/grease/images/2/2c/Rizzo_grease.jpeg/revision/latest?cb=20121226055625"
  lifespan: {
    birth: 1944,
    death: 
  }
}
{
  title: "Pink Lady",
  name: "Didi Conn",
  bio: "Frenchie",
  image: "http://img.wennermedia.com/480-width/frenchie-grease-inline.jpg"
  lifespan: {
    birth: 1951,
    death: 
  }
}
{
  title: "Pink Lady",
  name: "Dinah Manoff",
  bio: "Marty",
  image: "http://vignette2.wikia.nocookie.net/grease/images/6/6b/Grease_297Pyxurz.jpg/revision/latest?cb=20121226055754"
  lifespan: {
    birth: 1956,
    death: 
  }
}
{
  title: "Pink Lady",
  name: "Jamie Donnelly",
  bio: "Jan",
  image: "http://vignette4.wikia.nocookie.net/grease/images/9/96/Lala_106296915.jpg/revision/latest?cb=20121226055500"
  lifespan: {
    birth: 1947,
    death: 
  }
}
{
  title: "Almost a Pink Lady",
  name: "Olivia Newton-John",
  bio: "Sandy",
  image: "http://leblow.co.uk/wp-content/uploads/2012/11/Sandy-from-Grease.jpg"
  lifespan: {
    birth: 1948,
    death: 
  }
}
];





















var counter = 0;
var outputEl = document.getElementById("outputEl");
for (; counter < 5; counter++) {
  // Give each person element a unique identifier
  outputEl.innerHTML += `<div class="person__container" id="person--${counter}"></div>`;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
  });
};