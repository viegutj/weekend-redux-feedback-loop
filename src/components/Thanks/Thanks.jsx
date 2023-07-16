import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Thanks() {
    history = useHistory();

    function handleNew(event) {
        event.preventDefault();
        history.push('/')
    }
    
    return(
        <>
            <h1>Thank you!</h1>
            <button onClick={handleNew}>Leave New Feedback</button>
        </>
    )
}

export default Thanks