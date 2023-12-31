// import dependencies to communicate state
import {useHistory} from "react-router-dom"
import {useState} from "react";
import {useDispatch} from 'react-redux';


// This function handles everything for the Support component
function Support() { // write in useState() hooks to grab and set values
    let dispatch = useDispatch();
    const [support, setSupport] = useState('')

    // assign useHistory() to variable history
    const history = useHistory();

    // function to handle the button click on next
    // prevent page refresh, dispatch an action, and direct client to /comments
    function handleNext(event) {
        event.preventDefault();
        // dispatch an action, sending payload to the reducer in index.js
        dispatch({type: 'COLLECT_SUPPORT', payload: {
                support
            }})
        history.push('/comments')
    }


    // return HTML to be displayed on the page
    return (
        <div>
            <h2>How well are you supported?</h2>
            <form onSubmit={handleNext}>
                <label>Support?</label>
                <input type="number"
                    value={support}
                    onChange={
                        (event) => setSupport(event.target.value)
                    }
                    required/>
                <button type='submit'>NEXT</button>
            </form>
        </div>
    )
}

// export our component to be displayed in App.jsx
export default Support;
