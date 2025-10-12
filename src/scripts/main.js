'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Розміри та позиції
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // Координати кліку всередині стіни
  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  // Центруємо павука під курсором
  let targetX = clickX - spiderRect.width / 2;
  let targetY = clickY - spiderRect.height / 2;

  // Обмежуємо рух, щоб не виходив за межі
  targetX = Math.max(0, Math.min(targetX, wallRect.width - spiderRect.width));
  targetY = Math.max(0, Math.min(targetY, wallRect.height - spiderRect.height));

  // Застосовуємо нові координати
  spider.style.position = 'absolute';
  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;
});
