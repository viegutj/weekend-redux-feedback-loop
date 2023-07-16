# GOAL: Create a multi-part React/Redux app that allows users to leave feedback
The parts:
- How are you feeling today?
<!-- ![feeling](wireframes/feeling.png) -->
- How well are you understanding the content?
<!-- ![understanding](wireframes/understanding.png) -->
- How well are you being supported?
<!-- ![support](wireframes/supported.png) -->
- Any comments you want to leave?
<!-- ![comments](wireframes/comments.png) -->

### SETUP
Create your database and tables using the provided `data.sql` file. Start the server.

- [x] npm install
- [x] npm run server

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

- [x] npm run client

- [x] set up database

### ROAD MAP

- [x] Create all component folder and files.jsx
    - [x] Feeling
    - [x] Understanding
    - [x] Support
    - [x] Comments
    - [x] Review
    - [x] Thanks

- [x] Create front end-router in App.jsx

- [x] Set up <Feeling />
    - [x] Write return statement HTML
    - [x] Create required for input
    - [x] Dispatch an action for type: 'FEELING' payload: feeling
    - [x] Use useHistory() to route to next page
    - [x] Write a reducer in index.js

- [x] Set up <Understanding />
    - [x] Write return statement HTML
    - [x] Create required for input
    - [x] Use useHistory() to route to next page
    - [x] Dispatch an action for type: 'UNDERSTANDING' payload: understanding
    - [x] Write a reducer in index.js

- [x] Set up <Support />
    - [x] Write return statement HTML
    - [x] Create required for input
    - [x] Use useHistory() to route to next page
    - [x] Dispatch an action for type: 'SUPPORT' payload: support
    - [x] Write a reducer in index.js

- [x] Set up <Comments />
    - [x] Write return statement HTML
    - [x] Create required for input
    - [x] Use useHistory() to route to next page
    - [x] Dispatch an action for type: 'COMMENTS' payload: comments
    - [x] Write a reducer in index.js

- [ ] Set up <Review />
    - [x] Write return statement HTML
    - [ ] Bring in data from state
        - [x] import useSelector
        - [x] const feelings = useSelector(store => store.feelings)
        - [x] const understanding = useSelector(store => store.understanding)
        - [x] const support = useSelector(store => store.support)
        - [x] const comments = useSelector(store => store.support)
    - [ ] Write axios.post request that contains this data as an object
    - [ ] Route to <Thanks />

- [ ] Set up <Thanks />
    - [ ] Write return statement with HTML
    - [ ] On button click, clear state
    - [ ] On button click, route to <Feeling />
