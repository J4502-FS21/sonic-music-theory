"use strict";

document.querySelector(document).addEventListener('click', '.flip', function () {
  let card = document.querySelector(this).closest('.card');
  if (card.classList.contains('flip-it')) card.removeClass('flip-it');else card.classList.add('flip-it');
});
document.querySelector('.card').each(function () {
  let href = document.querySelector(this).data('href');
  document.querySelector(this).querySelector('.image').css({
    backgroundImage: ['url(', href, ')'].join('')
  });
