const admin = require('firebase-admin');
admin.initializeApp()
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true })

var express = require('express');
var router = express();

// router.get('/', function (req, res) {
//   db.collection('messages').orderBy('timestamp').get().then((snapshot) => {
//        let messages = []
//        snapshot.docs.forEach(doc => {
//            messages.push({
//                id: doc.id,
//                content: doc.data().content,
//                name: doc.data().name,
//                timestamp: doc.data().timestamp
//            })
//       })
//        res.status(200).json(messages);
//    })
//});

router.get('/:id', function (req, res) {
    db.collection('chats').doc(req.params.id).collection('messages').orderBy('timestamp')
        .get().then((snapshot) => {
        let messages = []
        snapshot.docs.forEach(doc => {
            messages.push({
                id: doc.id,
                content: doc.data().content,
                name: doc.data().name,
                timestamp: doc.data().timestamp
            })
        })
        res.status(200).json(messages);
    })
});

router.put('/:id', function (req, res) {
    db.collection('messages').doc(req.params.id).update({
        content: req.body.content
    })
    .catch(err => {
        res.status(400).json(err);
    })
    res.status(200).json({
        message: 'PUT REQUEST FOR THE MESSAGE'
    });
});

router.post('/:id', function (req, res) {
    db.collection('chats').doc(req.params.id).collection('messages').add({
        content: req.body.content,
        name: req.body.name,
        timestamp: req.body.timestamp
    }).catch(err => {
        res.status(400).json(err);
    })
    res.status(200).json({
        message: 'POST REQUEST FOR THE MESSAGE'
    });
});

router.delete('/:id', function (req, res) {
    db.collection('messages').doc(req.params.id).delete()
    .catch(err => {
        res.status(400).json(err);
    })
    res.status(200).json({
        message: 'DELETE REQUEST FOR THE MESSAGE'
    });
});

module.exports = router;
