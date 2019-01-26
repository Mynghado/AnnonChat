const admin = require('firebase-admin');
admin.initializeApp()
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true })

var express = require('express');
var router = express();

router.get('/', function (req, res) {
    db.collection('chats').get().then((snapshot) => {
        let chats = []
        snapshot.docs.forEach(doc => {
            chats.push({
                id: doc.id,
                name: doc.data().name,
               // users: doc.data().users
            })
        })
        res.status(200).json(chats);    
    })
});

router.put('/:id', function (req, res) {
    db.collection('chats').doc(req.params.id).update({
        name: req.body.name
    })
    .catch(err => {
        res.status(400).json(err);
    })
    res.status(200).json({
        message: 'PUT REQUEST FOR THE CHAT'
    });
});

router.post('/', function (req, res) {
    db.collection('chats').add({
        name: req.body.name
    }).catch(err => {
        res.status(400).json(err);
    })
    res.status(200).json({
        message: 'POST REQUEST FOR THE CHAT'
    });
});

router.delete('/:id', function (req, res) {
    db.collection('chats').doc(req.params.id).delete()
    .catch(err => {
        res.status(400).json(err);
    })
    res.status(200).json({
        message: 'DELETE REQUEST FOR THE CHAT'
    });
});

module.exports = router;
