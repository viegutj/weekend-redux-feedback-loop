import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

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
            </Router>

            <Route path='/feeling'>
                <Feeling />
            </Route>
            <Route path='/understanding'>
              <Understanding />
            </Route>
            <Route path='/support'>
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
            </Route>
        </>
    );
}

export default App;
