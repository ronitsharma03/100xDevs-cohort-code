function createChild(title, desc, id){
    let parent = document.createElement("div");
    let titleChild = document.createElement("div");
    titleChild.innerHTML = title;
    let descChild = document.createElement("div");
    descChild.innerHTML = desc;
    let btn = document.createElement("button");
    btn.innerHTML = "Mark as done";
    btn.setAttribute("onclick", `markAsDone(${id})`);
    parent.appendChild(titleChild);
    parent.appendChild(descChild);
    parent.appendChild(btn);
    parent.setAttribute("id", id);

    return parent;
}

// State will always be an array
// Every element of state would have a title, description and id

function updateDomAccToState(state){
    const parent = document.getElementById('container');
    parent.innerHTML = "";
    for(let i = 0; i < state.length; i++){
        const child = createChild(state[i].title, state[i].desc, state[i].id);
        parent.appendChild(child);
    }
}

window.setInterval(async function() {
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await response.json();
    updateDomAccToState(json.todos);
}, 5000)
