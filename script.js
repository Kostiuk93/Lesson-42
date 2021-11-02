'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'; // раскрыть весь текст в боксе прокрутки
    console.log(box.scrollTop); //считать , сколько пикселей прокрученно сверху
}); 

console.log(box.getBoundingClientRect()); //получить все координаты элемента
console.log(box.getBoundingClientRect().top); //получить координаты элемента сверху

const style = window.getComputedStyle(box, ); //позволяет выявить примененные computed (вычесленный) стили и стили псевдоэлементов

console.log(style); // все примененные computed стили
console.log(style.display); // получить display computed стиль и так можно сделать с каждым прмененным стилем

console.log(document.documentElement.clientWidth);