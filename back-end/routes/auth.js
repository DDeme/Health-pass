const express = require('express');
const router = express.Router();



router.post('/auth',  (req, res, next) => {
    res.render('index', { title: 'Express' });
});


router.post('/confirmation', (req, res, next) =>  {
    res.render('index', { title: 'Express' });
});