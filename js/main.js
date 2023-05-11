console.log("onLoad.js loaded");

try {
    var script = document.createElement('script');
    script.src = 'js/settings.js';
    document.head.appendChild(script);
} catch {
    console.log("settings.js failed")
}

try {
    var script = document.createElement('script');
    script.src = 'js/clock.js';
    document.head.appendChild(script);
} catch {
    console.log("clock.js failed")
}

try {
    var script = document.createElement('script');
    script.src = 'js/kanyeAPI.js';
    document.head.appendChild(script);
} catch {
    console.log("kanyeAPI.js failed")
}

try {
    var script = document.createElement('script');
    script.src = 'js/boredAPI.js';
    document.head.appendChild(script);
} catch {
    console.log("boredAPI.js failed")
}

try {
    var script = document.createElement('script');
    script.src = 'js/weatherAPI.js';
    document.head.appendChild(script);
} catch {
    console.log("weatherAPI.js failed")
}

try {
    var script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/9a4ceff82d.js';
    script.crossorigin = 'anonymous';
    document.head.appendChild(script);
} catch {
    console.log("fontAwesome failed")
}

try {
    var script = document.createElement('script');
    script.src = 'js/exchangeAPI.js';
    document.head.appendChild(script);
} catch {
    console.log("exchangeAPI.js failed")
}

try {
    var script = document.createElement('script');
    script.src = 'js/gptAPI.js';
    document.head.appendChild(script);
} catch {
    console.log("gptAPI.js failed")
}

try {
    var script = document.createElement('script');
    script.src = 'js/todoAPI.js';
    document.head.appendChild(script);
} catch {
    console.log("todoAPI.js failed")
}



function sendPrompt() {
if (document.getElementById("gptinputtext").value == "") {
    document.getElementById("gptoutputtext").innerHTML = "Please enter a prompt";
    console.log("Please enter a prompt");
} else {
    console.log("Sending prompt");
    document.getElementById("gptoutputtext").innerHTML = "";
    fetchGPT();
}}
    

