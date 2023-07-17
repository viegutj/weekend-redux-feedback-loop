import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Thanks() {
    let history = useHistory();
    let dispatch = useDispatch();
    
    const feeling = useSelector((store) => (store.feelings.feeling))
    const understanding = useSelector((store) => (store.understanding.understanding))
    const support = useSelector((store) => (store.support.support))
    const comments = useSelector((store) => (store.comments.comments))


    function clearInputs() {
        dispatch({
            type: "CLEAR_INPUT"
        })
    }

    function handleNew(event) {
        event.preventDefault();
        console.log('new feedback button clicked!');
        clearInputs();
        history.push('/')
    }
    
    return(
        <>
            <h1>Thank you!</h1>
            <button onClick={handleNew}>Leave New Feedback</button>
        </>
    )
}

export default Thanks;