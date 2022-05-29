function getImages(pageNumber) {
  const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=2`)
  return promise.then((data) => {
    return data.data
  })
}
