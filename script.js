const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.group.item');

  items.forEach((item) => {
    item.addEventListener('touchstart', function () {
      item.classList.add('hover');
    });

    item.addEventListener('touchend', function () {
      item.classList.remove('hover');
    });
  });
});
const navToggle = () => {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
};
menuBtn.addEventListener('click', navToggle);
