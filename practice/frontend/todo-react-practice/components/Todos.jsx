

export function Todo({ todos }) {
    return (
        <div>
            {
                todos.map(function (todo) {
                    return
                    <div>
                        <h2 style={{fontSize: 50}}>{todo.title}</h2>
                        <h2 style={{fontSize: 35}}>{todo.description}</h2>
                        <button style={{backgroundColor: "black", color: "white", padding: 10}}>
                            {todo.completed == true ? "Done" : "Mark as Done"}
                        </button>

                    </div>
                })
            }

        </div>
    )
}