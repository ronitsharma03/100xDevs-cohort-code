import { useState } from "react";


export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div style={{ textAlign: "center", marginTop: 100 }}>
            <input style={{ padding: 8, fontSize: 25, width: 400 }} type="text" placeholder="Enter Title" required onChange={function (event) {
                const title = event.target.value;
                setTitle(title);
            }} /><br /><br /> <br />
            <textarea cols={26} rows={5} required style={{ padding: 8, fontSize: 25 }} type="text" placeholder="Enter Description" onChange={function (event) {
                const description = event.target.value;
                setDescription(description);
            }} /><br /><br />
            <div>
                <button style={{ backgroundColor: "black", color: "white", padding: 10, fontSize: 22, borderRadius: 10, marginTop: 20, marginRight: 20 }} onClick={() => {
                    fetch("http://localhost:3000/todo",
                        {
                            method: "POST",
                            body: JSON.stringify({
                                title: title,
                                description: description
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        })
                        .then(async function (response) {
                            const json = await response.json();
                            // console.log(json);
                            alert("Todo added successfully");
                        });
                }}>Add Todo</button>
                <button style={{ backgroundColor: "black", color: "white", padding: 10, fontSize: 22, borderRadius: 10, marginTop: 10 }} onClick={async ()=>{
                    await fetch("http:/localhost:3000/todos",
                    {
                        method: "GET",
                        
                    })
                    .then(async function(response){
                        const json = await response.text();
                        console.log(json);
                        alert("Todo fetched successfully!");
                    })
                }}>Get Todos</button>
            </div>

        </div>
    )
}