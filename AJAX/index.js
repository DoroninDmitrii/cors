const resultBlock = document.querySelector('#result');

const getImagesButton = document.querySelector('#get-image');
const pageNumber = document.querySelector('#page-number');

const getTasksButton = document.querySelector('#get-task');

getImagesButton.addEventListener('click', () => {
  const promise = getImages(pageNumber.value)
  promise.then(getDataImages)
});


function getDataImages(data) {
  data.forEach(el => {
    const img = document.createElement('img')
    img.src = el.thumbnail;
    document.querySelector('#result').appendChild(img);
  })
}

// --------------------------------------------------

getTasksButton.addEventListener('click', () => {
  const promise = getTasks()
  promise.then(getDataTasks)
});

function getDataTasks() {
  data.forEach(task => {
    const li = document.createElement('li')
    li.innerHTML = task;
    document.querySelector('#result-task').appendChild(li);
  })
}


createTask(check).then((data) => {
  debugger;
  console.log(data)
})


