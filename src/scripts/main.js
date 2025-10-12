'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Якщо елементи не знайдені — не робимо нічого
  if (!wall || !spider) {
    return;
  }

  // Якщо .wall має position: static, робимо її позиційним контекстом
  const wallStyle = getComputedStyle(wall);

  if (wallStyle.position === 'static') {
    wall.style.position = 'relative';
  }

  // Ігноруємо кліки поза межами стіни
  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  // Отримуємо розміри павука
  const spiderRect = spider.getBoundingClientRect();

  // Координати кліку всередині стіни
  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  // Центруємо павука
  let targetX = clickX - spiderRect.width / 2;
  let targetY = clickY - spiderRect.height / 2;

  // Обмеження руху, щоб павук не виходив за межі
  targetX = Math.max(0, Math.min(targetX, wallRect.width - spiderRect.width));
  targetY = Math.max(0, Math.min(targetY, wallRect.height - spiderRect.height));

  // Встановлюємо позицію (один раз)
  spider.style.position = 'absolute';
  spider.style.left = `${targetX}px`;
  spider.style.top = `${targetY}px`;
});
