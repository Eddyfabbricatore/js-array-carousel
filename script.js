/* 
1. Prendiamo tutti gli elementi che ci servono dall'html
2. Stampiamo le immagini contenute dentro l'array creato attribuendo la classe hide ad ogni img
3. Togliamo la classe hide dalla prima immagine
4. Al click di btnNext aumentiamo il contatore creato e cambiamo immagine con quella segente
5. Al click di btnPrev effettuiamo il contrario
6. btnPrev di defaul ha classe hide che viene tolta al click di btnNext
7. Se ci troviamo alla fine del nostro array aggiungiamo la classe hide al btnNext, mentre se torniamo all'inizio dell'array btnPrev tornerà ad avere la classe hide
*/

// elementi
const itemsWrapper = document.querySelector('.items-wrapper');
const btnNext = document.querySelector('.arrow-bottom');
const btnPrev = document.querySelector('.arrow-top');

btnPrev.classList.add('hide')

const imgs = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

let counterImg = 0;

// ciclo per stampare le immagini
for(let i = 0; i < imgs.length; i++){
  const img = imgs[i];

  itemsWrapper.innerHTML += `<img src="${img}" class="item hide">`;
}

const itemsCollection = document.getElementsByClassName('item');

// togliamo hide dal primo elemento
itemsCollection[counterImg].classList.remove('hide');

btnNext.addEventListener('click', function(){
  itemsCollection[counterImg].classList.add('hide');

  counterImg++;

  itemsCollection[counterImg].classList.remove('hide');

  btnPrev.classList.remove('hide');

  if(counterImg === itemsCollection.length - 1){
    btnNext.classList.add('hide');
  }
});

btnPrev.addEventListener('click', function(){
  itemsCollection[counterImg].classList.add('hide');

  counterImg--;

  itemsCollection[counterImg].classList.remove('hide');

  btnNext.classList.remove('hide');

  if(counterImg === 0){
    btnPrev.classList.add('hide');
  }
});