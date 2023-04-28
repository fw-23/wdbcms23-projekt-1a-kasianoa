async function fetchActivity() {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity/');
      const data = await response.json();
      document.getElementById('bored-text').innerHTML = '"' + data.activity + '"';
    } catch (error) {
      document.getElementById('bored-text').innerHTML = "THE BORED API IS DOWN OR NOT WORKING PROPERLY."
    }
  }
  
  fetchActivity();
  