import React from 'react'

import img from "./images/smile.png"

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">Welcome to our todo list</div>
            <img src={img} alt="smile" className="form-img-2"/>
        </div>
    )
}

export default FormSuccess
