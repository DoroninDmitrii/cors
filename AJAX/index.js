const resultBlock = document.querySelector('#result');
const clickMeButton = document.querySelector('#click-me');
const pageNumber = document.querySelector('#page-number');
clickMeButton.addEventListener('click', () => {
  getImages(pageNumber.value, getData)
});


function getData(data) {
  data.forEach(el => {
    const img = document.createElement('img')
    img.src = el.thumbnail;
    document.querySelector('#result').appendChild(img);
  })
}