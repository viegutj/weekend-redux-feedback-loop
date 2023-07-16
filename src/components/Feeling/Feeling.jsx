// import dependencies to communicate state
import {useHistory} from "react-router-dom"
import {useState} from "react";
import {useDispatch} from 'react-redux';


// This function handles everything for the Feeling component
function Feeling() { 
    
    // write in useState() hooks to grab and set values
    let dispatch = useDispatch();
    const [feeling, setFeeling] = useState('')

    // assign useHistory() to variable history
    const history = useHistory();

    // function to handle the button click on next
    // prevent page refresh, dispatch an action, and direct client to /support
    function handleNext(event) {
        event.preventDefault();
        // dispatch an action, sending payload to the reducer in index.js
        dispatch({type: 'COLLECT_FEELINGS', payload: {
                feeling
            }})
        history.push('/understanding')
    }


    // return HTML to be displayed on the page
    return (
        <div>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleNext}>
                <label>Feeling?</label>
                <input type="number"
                    value={feeling}
                    onChange={
                        (event) => setFeeling(event.target.value)
                    }
                    required/>
                <button type='submit'>NEXT</button>
            </form>
        </div>
    )
}

// export our component to be displayed in App.jsx
export default Feeling