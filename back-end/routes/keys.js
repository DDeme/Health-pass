const express = require('express');
const router = express.Router();

const getKeys = () => {
    const keys = [{
        key: "NEGATIVE",
        validUntil: new Date().toISOString(),
    }];
    return keys
}

router.get("/", (req, res, next) => {
    res.send(getKeys());
});

module.exports = router;

