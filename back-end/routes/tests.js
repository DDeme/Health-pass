const express = require('express');
const router = express.Router();

const getTest = () => {
    const test = {
        date: new Date().toISOString(),
        result: 'negative',
    }
    return test
}


const getTests = () => {
    const tests = [getTest(), getTest()];
    return tests
}

router.post("/", (req, res, next) => {
  res.send(getTests());
});

module.exports = router;

