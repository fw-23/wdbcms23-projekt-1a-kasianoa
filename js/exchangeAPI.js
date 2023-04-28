async function fetchSEK() {
    try {
      const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/sek.json");
      const data = await response.json();
      var curr = data.sek;
      curr = Math.round((curr + Number.EPSILON) * 100) / 100;
      console.log(curr);
      document.getElementById("curr1").innerText = `SEK: ${curr}kr`;
    } catch (error) {
        document.getElementById("curr1").innerText = `API IS DOWN.`;
    }
  }
  
  async function fetchUSD() {
    try {
      const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json");
      const data = await response.json();
      var curr = data.usd;
      curr = Math.round((curr + Number.EPSILON) * 100) / 100;
      console.log(curr);
      document.getElementById("curr2").innerText = `USD: $${curr}`;
    } catch (error) {
        document.getElementById("curr2").innerText = `API IS DOWN.`;
    }
  }
  
  async function fetchRUB() {
    try {
      const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/rub.json");
      const data = await response.json();
      var curr = data.rub;
      curr = Math.round((curr + Number.EPSILON) * 100) / 100;
      console.log(curr);
      document.getElementById("curr3").innerText = `RUB: ₽${curr}`;
    } catch (error) {
        document.getElementById("curr3").innerText = `API IS DOWN.`;
    }
  }
  
  async function fetchGBP() {
    try {
      const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/gbp.json");
      const data = await response.json();
      var curr = data.gbp;
      curr = Math.round((curr + Number.EPSILON) * 100) / 100;
      console.log(curr);
      document.getElementById("curr4").innerText = `GBP: £${curr}`;
    } catch (error) {
        document.getElementById("curr4").innerText = `API IS DOWN.`;
    }
  }
  
  async function fetchTRY() {
    try {
      const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/try.json");
      const data = await response.json();
      var curr = data.try;
      curr = Math.round((curr + Number.EPSILON) * 100) / 100;
      console.log(curr);
      document.getElementById("curr5").innerText = `TRY: ₺${curr}`;
    } catch (error) {
        document.getElementById("curr5").innerText = `API IS DOWN.`;
    }
  }
  
fetchSEK();
fetchUSD();
fetchRUB();
fetchGBP();
fetchTRY();
