import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div style={{
        padding: '20px',
        background: '#f8f8f8',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '20px auto'
    }}>
        <input style={{ 
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            display: 'inline-block',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
            fontSize: '16px'
        }} type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
        
        <input style={{
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            display: 'inline-block',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
            fontSize: '16px'
        }} type="text" placeholder="Description" onChange={e => setDescription(e.target.value)} />
        
        <button style={{
            width: '100%',
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '14px 20px',
            margin: '8px 0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
        }} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }            
            }).then(async function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }}>Add Todo</button>
    </div>
}