let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listItem = document.querySelector('.carousel .list');
let thumbnail = document.querySelector('.carousel .thumbnail');



nextButton.onclick = function() {
  showSlider('next');
}

prevButton.onclick = function() {
  showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoNext = setTimeout( () => {
  nextButton.click();
}, timeAutoNext);


function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
  
  if(type === 'next') {
    listItem.appendChild(itemSlider[0]);
    //appendChild on an existing DOM object here itemSlider & itemThumbnail, will just move the position of the first itemSlider and will not just append an extra element.
    thumbnail.appendChild(itemThumbnail[0]);
    carousel.classList.add('next');
  }
  else {
    listItem.prepend(itemSlider[itemSlider.length-1]);
    thumbnail.prepend(itemThumbnail[itemThumbnail.length - 1]);
    carousel.classList.add('prev');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout( () => {
    carousel.classList.remove('next');
    carousel.classList.remove('prev');
  }, timeRunning);
  clearTimeout(runAutoNext);
  runAutoNext = setTimeout( () => {
    nextButton.click();
  }, timeAutoNext);

}

