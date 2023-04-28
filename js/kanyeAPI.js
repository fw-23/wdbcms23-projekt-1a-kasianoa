async function fetchQuote() {
  try {
    const response = await fetch("https://api.kanye.rest/", {
      headers: {
        Accept: "application/json",
      }
    });
    const data = await response.json();
    const quote = data.quote;
    document.getElementById("kanye").innerText = `KANYE WEST: ${quote}`;
    console.log(quote);
  } catch (error) {
    document.getElementById("kanye").innerText = `THE KANYE WEST API IS DOWN OR NOT WORKING PROPERLY.`;
  }
}

fetchQuote();