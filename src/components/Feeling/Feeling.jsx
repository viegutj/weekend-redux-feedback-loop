import {useHistory} from "react-router-dom"
import {useState} from "react";
import {useDispatch} from 'react-redux';


// This function handles everthing for the Feeling component
function Feeling() { // write in useState() hooks to grab and set values
    let dispatch = useDispatch();
    const [feeling, setFeeling] = useState('')
    // console.log('Feeling: ', feeling);

    const history = useHistory();

    function handleNext(event) {
        event.preventDefault();
        history.push('/understanding')
    }


    dispatch({
        type: 'COLLECT_FEELINGS',
        payload: {feeling}
    })
    

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

export default Feeling
