var express = require('express');
var router = express();

router.get('/', function (req, res) {
    res.status(200).json({
        message: 'GET REQUEST FOR THE MESSAGE'
    });
});

router.put('/', function (req, res) {
    res.status(200).json({
        message: 'PUT REQUEST FOR THE MESSAGE'
    });
});

router.post('/', function (req, res) {
    res.status(200).json({
        message: 'POST REQUEST FOR THE MESSAGE'
    });
});

router.delete('/', function (req, res) {
    res.status(200).json({
        message: 'DELETE REQUEST FOR THE MESSAGE'
    });
});

module.exports = router;
