const admin = require('firebase-admin');
const serviceAccount = require('./toolsworkinc-01e90974beee.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;

