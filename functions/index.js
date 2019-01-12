const functions = require('firebase-functions');
//const admin = require('firebase-admin');
const cors = require('cors');
const express = require('express');
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//admin.initializeApp()

/*exports.checkAlias = functions.https.onCall((data, context) => {
    const ref = admin.firestore().collection('messages').doc(data.name);
    return ref.get().then(doc => {
        return { unique: !doc.exists }
    }).catch(err => {
        throw new functions.https.HttpsError('failed to connect')
    });

})*/

/*exports.test = functions.https.onRequest((req, res) => {
    if (req.method == 'POST') {
        return res.status(500).json({
            message: 'It cannot work'
        });
    }
    res.status(200).json({
        message: 'It worked!'
    });
});

app.get('/num', (req, res) => {
    res.status(200).json({
        message: 'Hello' // address + /app + /home
    });
});

exports.app = functions.https.onRequest(app);*/

// build multiple CRUD interfaces:
//app.get('/', (req, res) => res.send({ name: 'Yoshi' }));

/*app.post('/', (req, res) => res.send(Widgets.create()));
app.put('/:id', (req, res) => res.send(Widgets.update(req.params.id, req.body)));
app.delete('/:id', (req, res) => res.send(Widgets.delete(req.params.id)));
app.get('/', (req, res) => res.send(Widgets.list()));*/

// Expose Express API as a single Cloud Function:
//exports.widgets = functions.https.onRequest(app);

exports.chat = functions.https.onRequest((req, res) => {

    app.use('/', require('./routes/chat.route'));

    // to handle requests with "/(function)" without the last '/'
	if (!req.path) {
		// prepending "/" keeps query params, path params intact
		req.url = `/${req.url}`
    }
    
	return app(req, res)
});

exports.message = functions.https.onRequest((req, res) => {
    app.use('/', require('./routes/message.route'));

    // to handle requests with "/(function)" without the last '/'
	if (!req.path) {
    // prepending "/" keeps query params, path params intact
		req.url = `/${req.url}`
    }
    
	return app(req, res)
});