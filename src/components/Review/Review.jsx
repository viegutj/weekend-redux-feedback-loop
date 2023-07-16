// import dependencies to communicate state
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";

function Review() { // bring in dispatch
    let dispatch = useDispatch();

    // bring in our needed values from store
    const feelings = useSelector((store) => (store.feelings))
    const understanding = useSelector((store) => (store.understanding))
    const support = useSelector((store) => (store.support))
    const comments = useSelector((store) => (store.comments))
    console.log({feelings})

    return (
        <>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {
                feelings.feeling
            }</p>
            <p>Understading: {
                understanding.understanding
            }</p>
            <p>Support: {
                support.support
            }</p>
            <p>Comments: {
                comments.comments
            }</p>
            <form action="submit">
                
            </form>
        </>
    )
}

export default Review
