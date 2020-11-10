export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = (url, title) => {
  const init = { 
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      long_url: url, title: title
    })
  }
  return fetch('http://localhost:3001/api/v1/urls', init)
    .then(response => response.json())
}

export const deleteUrl = (id) => {
  const init = { 
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  }
  return fetch(`http://localhost:3001/api/v1/urls/${id}`, init)
    .then(response => response.json())
}