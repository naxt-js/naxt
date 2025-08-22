// Use the base HTML template

const nx = new window.$naxt();

nx.setState({
    todos: [],
    loading: true,
    error: null,
});

nx.meta.title("Placeholder Todo App");

async function fetchTodos() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        nx.setState({ todos: data, loading: false, error: null });
    } catch (err) {
        nx.setState({ error: String(err), loading: false });
    }
}

function TodoList() {
    const { loading, error, todos } = nx.state;

    if (loading) return nx.p({}, "Loading todos…");
    if (error) return nx.p({ style: { color: "#ff6b6b" } }, `Error: ${error}`);

    return nx.div(
        {},
        ...todos.map((todo) =>
            nx.div(
                { style: { padding: "8px 0", borderBottom: "1px solid #eee" } },
                nx.h3(
                    { style: { margin: 0, fontSize: "14px" } },
                    todo.title,
                    nx.span(
                        {
                            style: {
                                color: todo.completed ? "green" : "red",
                                marginLeft: "0.5rem",
                            },
                        },
                        todo.completed ? "Completed" : "Uncompleted"
                    )
                )
            )
        )
    );
}

function App() {
    return nx.div(
        {
            style: {
                maxWidth: "700px",
                margin: "24px auto",
                fontFamily: "ui-sans-serif, system-ui",
            },
        },
        nx.h1({}, "Todos"),
        nx.p(
            { style: { color: "#666" } },
            "Fetched from jsonplaceholder.typicode.com"
        ),
        TodoList()
    );
}

nx.render(App);
fetchTodos();
