export function Todos({ todos }) {
    return <div>
        {todos.map(function (todo) {
            return <div style={{
                border: '2px solid #4CAF50', // green border
                padding: '10px',
                margin: '5px',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9', // light grey background
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // subtle shadow
                display: 'flex',
                justifyContent: 'space-between', // Aligns content on both ends
                alignItems: 'center'
            }}>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
                <button style={{
                    padding: '8px 16px',
                    fontSize: '16px',
                    color: '#fff',
                    backgroundColor: '#4CAF50',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }}>
                    {todo.completed ? "Completed" : "Mark as Complete"}
                </button>
            </div>
        })}
    </div>
}
