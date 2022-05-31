function getImages(pageNumber) {
  const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`)
  return promise.then((data) => {
    return data.data
  })
}

function getTasks() {
  const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=123`)
  return promise.then((response) => {
    return response.data
  })
}

// function createTask(title) {
//   const promise = axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=123&title=${title}`)
//   return promise.then((response) => {
//     return response.data
//   })
// }

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
      name: 'Dima'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

