export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = (url, title) => {
  const init = { 
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: {
      long_url: url, title: title
    }
  }
  return fetch('http://localhost:3001/api/v1/urls', init)
    .then(response => response.json())
}