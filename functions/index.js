const functions = require('firebase-functions');
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

/*exports.checkAlias = functions.https.onCall((data, context) => {
    const ref = admin.firestore().collection('messages').doc(data.name);
    return ref.get().then(doc => {
        return { unique: !doc.exists }
    }).catch(err => {
        throw new functions.https.HttpsError('failed to connect')
    });

})*/

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