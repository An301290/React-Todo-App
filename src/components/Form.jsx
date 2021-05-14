import React, {useState} from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from "./FormSuccess"
import "./Form.css";
import { AiFillCloseCircle} from "react-icons/ai";
import { useHistory } from "react-router-dom";
import img from "./images/space-cat.jpg"

const Form = () => {
   const [isSubmitted, setIsSubmitted] = useState(false) 

let history = useHistory();

function submitForm() {
    setIsSubmitted(true); 
}



    return (
        <>
        <div className="form-container">
            <button className="close-btn" onClick={history.goBack} > <AiFillCloseCircle/>
            </button>
            <div className="form-content.left">
                <img src={img} alt="cat-space" className="form-img" />
            </div>
            {!isSubmitted ? <FormSignUp submitForm={submitForm}/> : (<FormSuccess />)}
        </div>
            
            
        
        </>
    ); 
}

export default Form
