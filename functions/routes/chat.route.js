var express = require('express');
var router = express();

router.get('/', function (req, res) {
    res.status(200).json({
        message: 'GET REQUEST FOR THE CHAT'
    });
});

router.put('/', function (req, res) {
    res.status(200).json({
        message: 'PUT REQUEST FOR THE CHAT'
    });
});

router.post('/', function (req, res) {
    res.status(200).json({
        message: 'POST REQUEST FOR THE CHAT'
    });
});

router.delete('/', function (req, res) {
    res.status(200).json({
        message: 'DELETE REQUEST FOR THE CHAT'
    });
});

module.exports = router;
