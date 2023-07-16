import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


// import our components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding'
// import Support from '../Support/Support'
// import Comments from '../Comments/Comments'
// import Review from '../Review/Review'
// import Thanks from '../Review/Review'

function App() {


    return (
      <>
            <Router>
                <div className='App'>
                    <header className='App-header'>
                        <h1 className='App-title'>Feedback!</h1>
                        <h4>Don't forget it!</h4>
                    </header>
                </div>

            <Route path='/' exact>
                <Feeling />
            </Route>
            <Route path='/understanding'>
              <Understanding />
            </Route>
            {/* <Route path='/support'>
              <Support />
            </Route>
            <Route path='/comments'>
              <Comments />
            </Route>
            <Route path='/review'>
              <Review />
            </Route>
            <Route path='/thanks'>
              <Thanks />
            </Route> */}
            </Router>
        </>
    );
}

export default App;
