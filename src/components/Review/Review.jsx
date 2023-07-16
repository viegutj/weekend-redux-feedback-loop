// import dependencies to communicate state
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from 'axios';

function Review() { // bring in dispatch
    let dispatch = useDispatch();

    // bring in our needed values from store
    const feeling = useSelector((store) => (store.feelings.feeling))
    const understanding = useSelector((store) => (store.understanding.understanding))
    const support = useSelector((store) => (store.support.support))
    const comments = useSelector((store) => (store.comments.comments))
    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submit clicked');

        if (confirm('Submit feedback?')) {
            axios.post({
                feeling,
                understanding,
                support,
                comments
            })
            .then(response=> {
                dispatch({
                    type: 'SUBMIT'
                })
            })
            .catch(error=> {
                console.log('error POSTing from Review.jsx: '), error;
            })
        }else{
        alert('lil sus')
        }
    }

    return (
        <>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {
                feeling
            }</p>
            <p>Understading: {
                understanding
            }</p>
            <p>Support: {
                support
            }</p>
            <p>Comments: {
                comments
            }</p>
            <form action="submit">
                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </>
    )
}

export default Review