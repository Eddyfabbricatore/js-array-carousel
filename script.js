/* 
1. Prendiamo tutti gli elementi che ci servono dall'html
2. Stampiamo le immagini contenute dentro l'array creato attribuendo la classe hide ad ogni img
3. Togliamo la classe hide dalla prima immagine
4. Al click di btnNext aumentiamo il contatore creato e cambiamo immagine con quella segente
5. Al click di btnPrev effettuiamo il contrario
6. btnPrev di defaul ha classe hide che viene tolta al click di btnNext
7. Se ci troviamo alla fine del nostro array aggiungiamo la classe hide al btnNext, mentre se torniamo all'inizio dell'array btnPrev tornerà ad avere la classe hide
*/

const imgs = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

let counterImg = 0;

// elements
const itemsWrapper = document.querySelector('.items-wrapper');
const thumbsWrapper = document.querySelector('.thumbs-wrapper');

// buttons
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

// reset
itemsWrapper.innerHTML = '';
thumbsWrapper.innerHTML = '';

// stampo le immagini e le thumb
for(let i = 0; i < imgs.length; i++){
  const img = imgs[i];
  itemsWrapper.innerHTML += `
  <img class="item hide" src="${img}" alt="">`;

  // creo un nuovo elemento img
  const thumb = new Image();
  thumb.src = img;
  thumb.classList.add('thumb');

  thumbsWrapper.append(thumb);
}

// prendo tutte le immagini
const itemsCollection = document.getElementsByClassName('item');
// mostro la prima immagine
itemsCollection[counterImg].classList.remove('hide');

// prendo tutte le thumb
const thumbsCollection = document.getElementsByClassName('thumb');
// mostro la prima thumb
thumbsCollection[counterImg].classList.add('active');

// click next
btnNext.addEventListener('click', function(){
  itemsCollection[counterImg].classList.add('hide');

  thumbsCollection[counterImg].classList.remove('active');

  counterImg++;

  if(counterImg === imgs.length)  counterImg = 0;

  itemsCollection[counterImg].classList.remove('hide');

  thumbsCollection[counterImg].classList.add('active');
});

// click prev
btnPrev.addEventListener('click', function(){
  itemsCollection[counterImg].classList.add('hide');

  thumbsCollection[counterImg].classList.remove('active');

  counterImg--;

  if(counterImg < 0)  counterImg = imgs.length - 1;

  itemsCollection[counterImg].classList.remove('hide');

  thumbsCollection[counterImg].classList.add('active');
});