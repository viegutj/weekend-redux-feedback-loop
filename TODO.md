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

- [ ] npm install
- [ ] npm run server

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

- [ ] npm run client
x
- [ ] set up database

### ROAD MAP

- [ ] Create all component folder and files.jsx
    - [ ] Feeling
    - [ ] Understanding
    - [ ] Support
    - [ ] Comments
    - [ ] Review
    - [ ] Thanks

- [ ] Create front end-router in App.jsx

- [ ] Set up <Feeling />
    - [ ] Write return statement HTML
    - [ ] Create required for input
    - [ ] Dispatch an action for type: 'FEELING' payload: feeling
    - [ ] Use useHistory() to route to next page
    - [ ] Write a reducer in index.js

- [ ] Set up <Understanding />
    - [ ] Write return statement HTML
    - [ ] Create required for input
    - [ ] Dispatch an action for type: 'UNDERSTANDING' payload: understanding
    - [ ] Use useHistory() to route to next page
    - [ ] Write a reducer in index.js

- [ ] Set up <Support />
    - [ ] Write return statement HTML
    - [ ] Create required for input
    - [ ] Dispatch an action for type: 'SUPPORT' payload: support
    - [ ] Use useHistory() to route to next page
    - [ ] Write a reducer in index.js

- [ ] Set up <Comments />
    - [ ] Write return statement HTML
    - [ ] Create required for input
    - [ ] Dispatch an action for type: 'COMMENTS' payload: comments
    - [ ] Use useHistory() to route to next page
    - [ ] Write a reducer in index.js

- [ ] Set up <Review />
    - [ ] Write return statement HTML
    - [ ] Bring in data from state
        - [ ] import useSelector
        - [ ] const feelings = useSelector(store => store.feelings)
        - [ ] const understanding = useSelector(store => store.understanding)
        - [ ] const support = useSelector(store => store.support)
        - [ ] const comments = useSelector(store => store.support)
    - [ ] Write axios.post request that contains this data as an object
    - [ ] Route to <Thanks />

- [ ] Set up <Thanks />
    - [ ] Write return statement with HTML
    - [ ] On button click, clear state
    - [ ] On button click, route to <Feeling />
