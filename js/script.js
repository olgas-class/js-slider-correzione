// Inserire le immagini in modo dinamico
const images = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

console.log(images);
const itemsContainer = document.querySelector(".items");
const thumbsContainer = document.querySelector(".thumbs");
let itemsList = "";
let thumbsList = "";
for (let i = 0; i < images.length; i++) {
  // Creo le immagini
  itemsList += `
            <div class="item">
                <img src="${images[i]}" alt="" />
            </div>`;
  // Creo i thumbs
  thumbsList += `
            <div class="thumb">
                <img src="${images[i]}" alt="" />
            </div>`;
}
itemsContainer.innerHTML = itemsList;
thumbsContainer.innerHTML += thumbsList;

// Lo stato iniziale dello slider
const sliderItems = document.getElementsByClassName("item");
const thumbItems = document.getElementsByClassName("thumb");
// console.log(thumbItems);
// console.log(sliderItems);
let activeItem = 0;
sliderItems[activeItem].classList.add("active");
thumbItems[activeItem].classList.add("active");


// Navigazione
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function () {
  // Tolgo active dall'immagine corrente
  sliderItems[activeItem].classList.remove("active");
  thumbItems[activeItem].classList.remove("active");

  // Posso andare avanti finchè esiste l'immagine successiva (penultimo elemento)
  if (activeItem < sliderItems.length - 1) {
    // Passo avanti con lo slider
    //  incremento la posizione
    activeItem++;
  } else {
    activeItem = 0
  }

  //  aggiungo active alla nuova posizione
  sliderItems[activeItem].classList.add("active");
  thumbItems[activeItem].classList.add("active");
});

const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", function () {
  sliderItems[activeItem].classList.remove("active");
  thumbItems[activeItem].classList.remove("active");
  // Posso andare indietro finché esisite l'immagine precedente (il secondo elemento)
  if (activeItem > 0) {
    activeItem--;
  } else {
    // Altrimenti riparto dall'ultimo elemento
    activeItem = sliderItems.length - 1;
  }
  sliderItems[activeItem].classList.add("active");
  thumbItems[activeItem].classList.add("active");
});


// Aggiungere spostamento dello slider al click sul thumb
for (let i = 0; i < thumbItems.length; i++) {
    const thisThumb = thumbItems[i];
    thisThumb.addEventListener("click", function() {
        // Cancellare active da slider item e dal thumb
        sliderItems[activeItem].classList.remove("active");
        thumbItems[activeItem].classList.remove("active");

        // Aggiornare la posizione attuale
        activeItem = i;

        // Aggiungere active alla nuova posizione dell'immagine e del thumb
        sliderItems[activeItem].classList.add("active");
        thumbItems[activeItem].classList.add("active");
    });
}