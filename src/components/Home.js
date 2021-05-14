import React from 'react'
import img from "./images/todo.png"
import "../App.css"

const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to our todo list app</h1>
            <img src={img} alt="todo-list" />
        </div>
    )
}

export default Home
