let globalId = 1;
    function markAsDone(todoId) {
      const parent = document.getElementById(todoId);
      parent.children[2].innerHTML = "Done!"
    }
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
    function addTodo(){
        let title = document.getElementById('title').value;
        let desc = document.getElementById('desc').value;
        let parent = document.getElementById('container');

        parent.appendChild(createChild(title, desc, globalId++));
        console.log("Done");
    }