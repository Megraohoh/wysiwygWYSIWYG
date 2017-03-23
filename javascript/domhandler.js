var containerDiv = document.getElementById('container');

var arrayWysiwyg = [
{
  title: "Pink Lady",
  name: "Stockard Channing",
  bio: "Rizzo",
  url: "http://vignette3.wikia.nocookie.net/grease/images/2/2c/Rizzo_grease.jpeg/revision/latest?cb=20121226055625",
  lifespan: {
    birth: "1944",
    death: "Still Kicking"
  }
},
{
  title: "Pink Lady",
  name: "Didi Conn",
  bio: "Frenchie",
  url: "http://img.wennermedia.com/480-width/frenchie-grease-inline.jpg",
  lifespan: {
    birth: "Birth Year 1951",
    death: "Still Kicking"
  }
},
{
  title: "Pink Lady",
  name: "Dinah Manoff",
  bio: "Marty",
  url: "http://vignette2.wikia.nocookie.net/grease/images/6/6b/Grease_297Pyxurz.jpg/revision/latest?cb=20121226055754",
  lifespan: {
    birth: "Birth Year 1956",
    death: "Still Kicking"
  }
},
{
  title: "Pink Lady",
  name: "Jamie Donnelly",
  bio: "Jan",
  url: "http://vignette4.wikia.nocookie.net/grease/images/9/96/Lala_106296915.jpg/revision/latest?cb=20121226055500",
  lifespan: {
    birth: "Birth Year 1947",
    death: "Still Kicking"
  }
},
{
  title: "Almost a Pink Lady",
  name: "Olivia Newton-John",
  bio: "Sandy",
  url: "http://leblow.co.uk/wp-content/uploads/2012/11/Sandy-from-Grease.jpg",
  lifespan: {
    birth: "Birth Year 1948",
    death: "Still Kicking"
  }
}
];

 function writeToDom() {
    containerDiv.innerHTML = "";
    for (var i = 0; i < arrayWysiwyg.length; i++) {
      var newCard = "";

      newCard += `<div class="cardDiv" id="person--${i}">`;
      newCard += `<header class="arrayWysiwygTitle child"> ${arrayWysiwyg[i].title} </header>`;
      newCard += `<img class="arrayWysiwygName grandchild" src="${arrayWysiwyg[i].url}">`;
      newCard += `<p class="arrayWysiwygBio child"> ${arrayWysiwyg[i].bio}</p>`;
      newCard += `<p class="arrayWysiwygLife child"> ${arrayWysiwyg[i].lifespan.birth}" </p>`;
      newCard += `<p class="arrayWysiwygLife child"> ${arrayWysiwyg[i].lifespan.death}" </p>`;
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

writeToDom();



////////////////////////////////CLICK EVENT
var selectedEl = document.getElementById("container");
var inputField = document.getElementById("userInput");
var selectedCard;


function clickOnCard(e){

   if(e.target.classList.contains("cardDiv")){
    e.target.classList.add("clicked");
    // selectedCard = e.target.childNodes[2].childNodes[1].nodeValue;
    console.log("parent");
    // console.log(selectedCard);
   }
   else if(e.target.classList.contains("child")){
    e.target.parentNode.classList.add("clicked");
    selectedCard = e.target.parentNode.childNodes[2].childNodes[1];
    console.log("child", e.target.childNodes);
    // console.log(selectedCard);
   }
   else if(e.target.classList.contains("grandchild")){
   e.target.parentNode.classList.add("clicked");
   // selectedCard = e.target.parentNode.parentNode.childNodes[2].childNodes[1];
   console.log("grandchild");
   // console.log(selectedCard);
  }

  inputField.focus();

};



//////////////////////////////KEY* EVENT

// inputField.addEventListener("keypress", function(){
//   var editBio = selectedCard;
//       editBio.innerHTML = "";
// })

// inputField.addEventListener("keyup", function(){
//       if (event.keyCode === 13) {
//         userInput.value = "";    
//       } 
// });


document.body.addEventListener("click", clickOnCard);


