console.log("gptAPI.js loaded");
const apiKey = localStorage.getItem('gptKey');
if (apiKey === "") {
    document.getElementById('noapi').style.display = 'flex';
    document.getElementById('gptcontent').style.display = 'none';
} else {
    document.getElementById('noapi').style.display = 'none';
    document.getElementById('gptcontent').style.display = 'block';
}


async function fetchGPT() {
    const url = "https://openai-ama-api-fw-teaching.rahtiapp.fi/?api_key=" + apiKey;
    const prompt = document.getElementById('gptinputtext').value;
    const jsonString = JSON.stringify(prompt);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonString
      };

    try {
        const response = await fetch(url, requestOptions);
        const jsonData = await response.json();
        let text = jsonData.answer;
        console.log(jsonData.tokens_left);
        document.getElementById('gptoutputtext').innerHTML = text;
    } catch (error) {
        console.log(error);
    }
}
