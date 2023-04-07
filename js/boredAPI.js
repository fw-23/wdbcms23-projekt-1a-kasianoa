fetch('https://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('bored-text').innerHTML = '"'+data.activity+'"';
    })
    .catch(error => console.error(error));


