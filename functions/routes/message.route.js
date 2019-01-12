const admin = require('firebase-admin');
admin.initializeApp()
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true })

var express = require('express');
var router = express();

router.get('/', function (req, res) {
    db.collection('messages').get().then((snapshot) => {
        let msg = []
        snapshot.docs.forEach(doc => {
            msg.push({
                content: doc.data().content,
                name: doc.data().name,
                timestamp: doc.data().timestamp
            })
        })
        res.status(200).json(msg);    
    })
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
