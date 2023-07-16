// import dependencies to communicate state
import {useHistory} from "react-router-dom"
import {useState} from "react";
import {useDispatch} from 'react-redux';


// This function handles everything for the Comments component
function Comments() { // write in useState() hooks to grab and set values
    let dispatch = useDispatch();
    const [comments, setComments] = useState('')

    // assign useHistory() to variable history
    const history = useHistory();

    // function to handle the button click on next
    // prevent page refresh, dispatch an action, and direct client to /review
    function handleNext(event) {
        event.preventDefault();
        // dispatch an action, sending payload to the reducer in index.js
        dispatch({type: 'COLLECT_COMMENTS', payload: {
                comments
            }})
        history.push('/review')
    }


    // return HTML to be displayed on the page
    return (
        <div>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleNext}>
                <label>Comments?</label>
                <input type="text"
                    value={comments}
                    onChange={
                        (event) => setComments(event.target.value)
                    }
                    required/>
                <button type='submit'>NEXT</button>
            </form>
        </div>
    )
}

// export our component to be displayed in App.jsx
export default Comments;