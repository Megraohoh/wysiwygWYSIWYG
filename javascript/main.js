// Create an array of objects that represents famous people.

// When you click on one of the person elements, the text input 
// should immediately gain focus so that you can start typing.

// When there is a highlighted person element, and you begin 
// typing in the input box, the person's biography should be 
// immediately bound to what you are typing, letter by letter.

// When you press the enter/return key when typing in the input 
// field, then the content of the input field should immediately 
// be blank.
var getCards = document.getElementById('container');
var containerDiv = document.getElementById('container');
var counter = 0;


var arrayWysiwyg = [
{
  title: "Pink Lady",
  name: "Stockard Channing",
  bio: "Rizzo",
  url: "http://vignette3.wikia.nocookie.net/grease/images/2/2c/Rizzo_grease.jpeg/revision/latest?cb=20121226055625",
  lifespan: {
    birth: "1944",
    death: ""
  }
},
{
  title: "Pink Lady",
  name: "Didi Conn",
  bio: "Frenchie",
  url: "http://img.wennermedia.com/480-width/frenchie-grease-inline.jpg",
  lifespan: {
    birth: "1951",
    death: ""
  }
},
{
  title: "Pink Lady",
  name: "Dinah Manoff",
  bio: "Marty",
  url: "http://vignette2.wikia.nocookie.net/grease/images/6/6b/Grease_297Pyxurz.jpg/revision/latest?cb=20121226055754",
  lifespan: {
    birth: "1956",
    death: ""
  }
},
{
  title: "Pink Lady",
  name: "Jamie Donnelly",
  bio: "Jan",
  url: "http://vignette4.wikia.nocookie.net/grease/images/9/96/Lala_106296915.jpg/revision/latest?cb=20121226055500",
  lifespan: {
    birth: "1947",
    death: ""
  }
},
{
  title: "Almost a Pink Lady",
  name: "Olivia Newton-John",
  bio: "Sandy",
  url: "http://leblow.co.uk/wp-content/uploads/2012/11/Sandy-from-Grease.jpg",
  lifespan: {
    birth: "1948",
    death: ""
  }
}
];

function counterInNewCard() {
  for (; counter < 5; counter++) {
    containerDiv.innerHTML += `<div class="person__container" id="person--${counter}"></div>`;
  }

  var containerDiv = document.getElementsByClassName("cardDiv");

  for (var i = 0; i < containerDiv.length; i++) {
    containerDiv[i].addEventListener("click", function (event) {
      // Logic to execute when the element is clicked
    });

  };

};

 function writeToDom() {
    containerDiv.innerHTML = "";
    for (var i = 0; i < arrayWysiwyg.length; i++) {
      var newCard = "";

      newCard += `<div class="cardDiv" id="person--${counter}">`;
      newCard += `<div class="arrayWysiwygTitle"> ${arrayWysiwyg[i].title} </div>`;
      newCard += `<div class="arrayWysiwygBio"> ${arrayWysiwyg[i].bio} </div>`;
      newCard += `<img class="arrayWysiwygName" src="${arrayWysiwyg[i].url}"`;
      newCard += `<div class="arrayWysiwygLife" ${arrayWysiwyg[i].lifespan}"`;
      newCard += `</div>`;

      containerDiv.innerHTML += newCard;

    }
    console.log("hello");
 }

function showMeTheCard(event){
  if(event.target.className === 'container'){
    // console.log("event worked", event);
  }
}

getCards.addEventListener("mouseenter", writeToDom);










//only two event listeners needed
//event listener for click on card
//e.target.class="card" if-statement