const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST feedback to the server

router.post('/', (req,res) => {
    console.log('in feedbackRouter.js router.post');
    const item = req.body;
    console.log('req.body: ', req.body);
    const sqlQuery = 
    `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`
    pool.query(sqlQuery, [item.feeling, item.understanding, item.support, item.comments])
    .then(result =>{
        console.log('item added to database: ', item);
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('error in POST in server-side feedbackRouter: ', error);
        res.sendStatus(500);
    })
})

module.exports = router;