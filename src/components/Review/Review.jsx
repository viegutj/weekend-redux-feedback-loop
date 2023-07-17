// import dependencies to communicate state
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios';

function Review() { 
    // bring in dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

    // bring in our needed values from store
    const feeling = useSelector((store) => (store.feelings.feeling))
    const understanding = useSelector((store) => (store.understanding.understanding))
    const support = useSelector((store) => (store.support.support))
    const comments = useSelector((store) => (store.comments.comments))

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submit clicked');
        let dataObject = {feeling, understanding, support, comments}

        if (confirm('Submit feedback?')) {
            axios.post('/review', dataObject)
            .then((response) => {
                history.push('/thanks')
            })
            .catch((error) => {
                console.log('error POSTing from Review.jsx: '),
                error;
            })
        } else {
            alert('lil sus')
        }
    }

    return (
        <>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feeling}</p>
            <p>Understading: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <form action="submit">
                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </>
    )
}

export default Review