fetch('https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=1', {
  headers: {
    'x-api-key': ''
  }
})
.then(response => response.json())
.then(data => {
  data.articles.forEach(article => {
    document.getElementById('news').innerHTML = '"'+article.title+'"';
  });
})
.catch(error => console.error(error));



