const tdKey = localStorage.getItem('tdKey');
const url = "http://128.214.253.222:8221";

if (tdKey === "") {
    document.getElementById('noapi2').style.display = 'flex';
    document.getElementById('TDcontent').style.display = 'none';
} else {
    document.getElementById('noapi2').style.display = 'none';
    document.getElementById('TDcontent').style.display = 'block';
}


 async function fetchTasks() {
    try {
        const resp = await fetch(url + "/todo?api_key=" + tdKey, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                }
            });
        const jsonData = await resp.json();
        console.log(jsonData);
    
        const TDlist = document.getElementById('TDlist');
        TDlist.innerHTML = "";
    
        jsonData.todos.forEach(task => {
    
            const html = `
            
            <div id="TDtask">
              <div> 
                <div id="taskdesc">${task.title}</div>
                <div id="taskcat">${task.category_name}</div> 
              </div>
              <div id="row">
                <div id="createdate">FROM: ${task.created_at}</div>
                <button id="statusupdate" onclick="TDupdate()">${task.done ? "●" : "○"}</button>
                <div id="taskid"> ${task.id} </div>
              </div>
            </div>
          `;
          TDlist.insertAdjacentHTML('beforeend', html);
    
          if(task.done) {
            const taskElement = TDlist.lastElementChild;
            taskElement.style.border = "0.3vh dashed black"
          }
        });
    
    } catch (error) {
        console.log("fetch failed");
    }
}
fetchTasks();


async function addTask() {
    if (document.getElementById("TDtasktitle").value == "") {
        alert("Please fill in both fields.");
        return;
    } else {    
        const resp = await fetch(url + "/todo?api_key=" + tdKey, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                title: document.getElementById("TDtasktitle").value,
                category_id: document.getElementById("categories").value
            })
        });
        const respJSON = await resp.json();
        console.log(respJSON);
        fetchTasks();
    }
}


async function TDupdate() {
    const statusElement = event.target;
    const taskElement = statusElement.parentElement.parentElement;
    let isTaskCompleted = (statusElement.innerHTML == "●");
    const id = taskElement.querySelector('#taskid').innerHTML;
    console.log(id);

    if (isTaskCompleted) {
        if (confirm("Are you sure you want to delete this task?")) {
            const resp = await fetch(url + "/todo?api_key=" + tdKey, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    id: id
                })
            });
            const jsonData = await resp.json();
            console.log(jsonData);
            fetchTasks();
        }
        } else {
        const resp = await fetch(url + "/todo?api_key=" + tdKey, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                done: 1, 
                id: id
            })
        });
        statusElement.innerHTML = "●";
        taskElement.style.border = "0.3vh dashed black"
        const jsonData = await resp.json();
        console.log(jsonData);
    }

    

}