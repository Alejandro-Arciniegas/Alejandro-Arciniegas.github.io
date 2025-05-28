function toggleAbstract(id, event) {
  var abstracts = document.querySelectorAll('[id^="abstract"]');
  abstracts.forEach(function (el) {
    if (el.id !== id) {
      el.style.display = 'none';
    }
  });

  var element = document.getElementById(id);
  var activeButton = event.currentTarget;

  var img1 = document.getElementById('main-figure-img-1');
  var img2 = document.getElementById('main-figure-img-2');

  if (element.style.display === 'none' || element.style.display === '') {
    element.style.display = 'block';
    if (img1) img1.style.marginTop = '-3em';
    if (img2) img2.style.marginTop = '-3em';
    setTimeout(function () {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  } else {
    if (activeButton && typeof activeButton.blur === 'function') {
      activeButton.blur();
    }
    element.style.display = 'none';
    if (img1) img1.style.marginTop = '';
    if (img2) img2.style.marginTop = '';
  }
}