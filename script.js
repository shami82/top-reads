let contentGridElement = document.getElementById("mainGrid");
let carouselGridElement = document.getElementById("carouselGrid");

let jsonDatabase = [
  {
    "title": "Secret Playlist",
    "genre": "Romance",
    "rating": "4.8/5\nSuper cute and wholesome and second lead twist was perfect",
    "image": "IMG/secretplaylist.webp"
  },
  {
    "title": "Lost in Translation",
    "genre": "Drama",
    "rating": "4.9/5\nThe art was chef kiss and the storytelling and character growth",
    "image": "IMG/lit.jpg"
  },
  {
    "title": "Señorita Cometa",
    "genre": "Mystery",
    "rating": "4.5/5\nThe storytelling and twists with characters were so good",
    "image": "IMG/senoritacometa.png"
  },
  {
    "title": "Omniscient Reader",
    "genre": "Fantasy/Action",
    "rating": "5/5\nThe plot twists hit everytime and the characters were so cool",
    "image": "IMG/orv.png"
  },
  {
    "title": "For My Derelict Favorite",
    "genre": "Romance/Comedy",
    "rating": "4.7/5\nThe mc is so real lmao and it was a really good healing read",
    "image": "IMG/mdf.jpeg"
  },
  {
    "title": "Lookism",
    "genre": "Action",
    "rating": "3.8/5\nGood storytelling and character growth, but they're dragging it",
    "image": "IMG/lookism.png"
  },
  {
    "title": "Odd Girl Out",
    "genre": "Slice of Life",
    "rating": "4.6/5\nAdorable and perfect, but don't read past season one, trust me",
    "image": "IMG/ogo.png"
  },
  {
    "title": "It's Mine",
    "genre": "Thriller/Psychological",
    "rating": "4.6/5\nThe plot twists were insane, idk how the author wrote this all",
    "image": "IMG/itsmine.png"
  },
  {
    "title": "Purple Hyacinth",
    "genre": "Action",
    "rating": "5/5\nGorgeous art, even better storyline, Eph and Soph never miss",
    "image": "IMG/ph.jpg"
  },
  {
    "title": "Who's Mr.President?",
    "genre": "Drama",
    "rating": "4.9/5\nEnemies to lovers and mystery?? Sign me upppp",
    "image": "IMG/wmp.png"
  },
  {
    "title": "Death: Rescheduled",
    "genre": "Thriller",
    "rating": "4.7/5\nSo much happening and then boom even more, but it fit so wellll",
    "image": "IMG/dr.png"
  },
  {
    "title": "Daytime Star",
    "genre": "Romance",
    "rating": "5/5\nLiterally just the most wholesome cutest story and its heartwarming",
    "image": "IMG/ds.jpg"
  },
];

for(let i=0; i<jsonDatabase.length; i++){
  createElementProper(jsonDatabase[i]);
  if(parseFloat(jsonDatabase[i]["rating"]) >= 4.8){
    addToCarousel(jsonDatabase[i]);
  }
}

function createElementProper(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add("contentItem");

  let newTitle = document.createElement("H3");
  newTitle.innerText = incomingJSON['title'];
  newContentElement.appendChild(newTitle);

  let newGenre = document.createElement("P");
  newGenre.innerText = `Genre: ${incomingJSON['genre']}`;
  newContentElement.appendChild(newGenre);

  let newRating = document.createElement("P");
  newRating.innerText = `Rating: ${incomingJSON['rating']}`;
  newContentElement.appendChild(newRating);

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['image'];
  newContentElement.appendChild(newImage);

  contentGridElement.appendChild(newContentElement);
}

function addToCarousel(incomingJSON){
  let newSlide = document.createElement("LI");
  newSlide.classList.add("glide__slide");

  let newImage = document.createElement("IMG");
  newImage.src = incomingJSON["image"];
  newImage.alt = incomingJSON["title"];
  newSlide.appendChild(newImage);

  let newCaption = document.createElement("DIV");
  newCaption.innerText = `${incomingJSON["title"]} - ${incomingJSON["genre"]}`;
    newCaption.style.textAlign = "center"; 
    newSlide.appendChild(newCaption);

  carouselGridElement.appendChild(newSlide);
}

new Glide('.glide', {
    type: 'carousel',  
    startAt: 0,        
    perView: 3,        
    gap: 20,           
    focusAt: 'center', 
    autoplay: 3000,    
    hoverpause: true   
}).mount();