const admin = require('firebase-admin');
admin.initializeApp()
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true })

var express = require('express');
var router = express();

router.get('/', function (req, res) {
    var collRef = db.collection('chats')

    collRef.get()
    .catch(err => {
        res.status(400).json(err);
    })
    .then((snapshot) => {
        let chats = []
        snapshot.docs.forEach(doc => {
            chats.push({
                id: doc.id,
                name: doc.data().name,
            })
        })

        res.status(200).json(chats);    
    })
});

router.get('/:id', function (req, res) {
    var collRef = db.collection('chats')

    collRef.doc(req.params.id).get()
    .catch(err => {
        res.status(400).json(err);
    })
    .then((doc) => {
        let chats = []
        if (doc.exists) {
            chats.push({
                id: doc.id,
                name: doc.data().name,
            })

            res.status(200).json(chats);    
        }
        else {
            res.status(300).json({
                message: "ERROR DURING THE REQUEST : CHAT NOT FOUND"
            });
        }
    })
});

router.get('/:id/message', function (req, res) {
    var docRef = db.collection('chats').doc(req.params.id)

    docRef.get()
    .catch(err => {
        res.status(400).json(err);
    })
    .then((doc) => {
        if (doc.exists) {
            docRef.collection('messages').orderBy('timestamp').get()
            .catch(err => {
                res.status(400).json(err);
            })
            .then((snapshot) => {
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
        }
        else {
            res.status(300).json({
                message: "ERROR DURING THE REQUEST : CHAT NOT FOUND" + req.params.id
            });
        }
    })
});

router.put('/:id', function (req, res) {
    var docRef = db.collection('chats').doc(req.params.id)

    docRef.get()
    .catch(err => {
        res.status(400).json(err);
    })
    .then(function(doc) {
        if (doc.exists) {
            doc.ref.update({
                name: req.body.name
            })
            .catch(err => {
                res.status(400).json(err);
            })

            res.status(200).json({
                message: 'PUT REQUEST FOR THE CHAT'
            });
        }
        else {
            res.status(300).json({
                message: "ERROR DURING THE REQUEST : CHAT NOT FOUND"
            });
        }
    })
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

router.post('/:id/message', function (req, res) {
    var docRef = db.collection('chats').doc(req.params.id)

    docRef.get()
    .catch(err => {
        res.status(400).json(err);
    })
    .then(function(doc) {
        if (doc.exists) {
            doc.ref.collection('messages').add({
                content: req.body.content,
                name: req.body.name,
                timestamp: req.body.timestamp        
            }).catch(err => {
                res.status(400).json(err);
            })

            res.status(200).json({
                message: 'POST REQUEST FOR THE MESSAGE'
            });
        }
        else {
            res.status(300).json({
                message: "ERROR DURING THE REQUEST : CHAT NOT FOUND"
            });
        }
    })
});

router.delete('/:id', function (req, res) {
    var docRef = db.collection('chats').doc(req.params.id)

    docRef.get().then(function(doc) {
        if (doc.exists) {
            doc.ref.collection('messages').get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    doc.ref.delete()
                    .catch(err => {
                        res.status(400).json(err);
                    })
                })
            }).then(() => {
                doc.ref.delete()
                .catch(err => {
                    res.status(400).json(err);
                })    
            })
            
            res.status(200).json({
                message: 'DELETE REQUEST FOR THE CHAT'
            })
        }
        else {
            res.status(300).json({
                message: "ERROR DURING THE REQUEST : CHAT NOT FOUND"
            })
        }
    })
});

module.exports = router;
