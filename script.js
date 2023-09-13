/* 
1. Prendiamo tutti gli elementi che ci servono
2. Stampiamo le immagini contenute dentro l'array
*/

// elementi
const itemsWrapper = document.querySelector('.items-wrapper');
const btnNext = document.querySelector('.arrow-top');
const btnPrev = document.querySelector('.arrow-bottom');

const imgs = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

// ciclo per stampare le immagini
for(let i = 0; i < imgs.length; i++){
  const img = imgs[i];

  itemsWrapper.innerHTML += `<img src="${img}" class="item hide">`;
}

