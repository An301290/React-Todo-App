import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(""); 

    const handleChange = (e) => {
        setInput(e.target.value); 
    }; 
    
    const handleSubmit = (e)=>{
        e.preventDefault(); 

    props.onSubmit({
            id: Math.floor(Math.random() * 10000), 
            text: input
        });
    setInput("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>

<input
type="text"
    placeholder="Write your todo list"
    value={input}
    name="text"
    className= "todo-input"
    onChange={handleChange}
/>
<button className="todo-button">Add to your list</button>
        </form>
    )
}

export default TodoForm


//Minute 20.22


