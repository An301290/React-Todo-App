import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  //we are using useSate with empty string
  const [input, setInput] = useState("");

  const inputRef = useRef(null); 

  useEffect(() =>{
      inputRef.current.focus();
  });


  // function that allows us to enter info into our "setInput" useState
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  //This function allows ud to cancel the event
  const handleSubmit = (e) => {
    e.preventDefault();
    //Thsi formula give us random numbers untill 10000
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
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
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add to your list</button>
    </form>
  );
}

export default TodoForm;

//Minute 20.22
