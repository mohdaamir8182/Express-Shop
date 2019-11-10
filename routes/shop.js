const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<html><head><title>Root directory</title></head><body><h1>In the root directory.</h1></body></html>');
});

module.exports = router;