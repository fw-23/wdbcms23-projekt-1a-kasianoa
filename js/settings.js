const settingsBtn = document.querySelector('#openSettings');
const settingsModal = document.querySelector('#settings-modal');

function saveSettings() {
    const weatherKey = document.querySelector('#owm').value;
    const gptKey = document.querySelector('#fcgpt').value;

    localStorage.setItem('weatherKey', weatherKey);
    localStorage.setItem('gptKey', gptKey);
}

if (localStorage.getItem('weatherKey') !== null) {
    document.querySelector('#owm').value = localStorage.getItem('weatherKey');

}

if (localStorage.getItem('gptKey') !== null) {
    document.querySelector('#fcgpt').value = localStorage.getItem('gptKey');
}

settingsBtn.addEventListener('click', () => {
    settingsModal.style.display = 'block';
});

  window.addEventListener('click', (event) => {
    if (event.target === settingsModal) {
      settingsModal.style.display = 'none';
      saveSettings();
      settings = 0;
      console.log("close");
      location.reload();
    }
  });

console.log("weatherKey: " + localStorage.getItem('weatherKey'));
console.log("gptKey: " + localStorage.getItem('gptKey'));