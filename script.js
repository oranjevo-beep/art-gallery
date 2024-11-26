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
