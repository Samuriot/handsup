/* eslint-disable indent */
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: true}));

// Routes
app.get("/", (req, res) => {
    return res.status(200).send("Hello World!");
});

// Create
// Post

// Read
// Get

// Update
// Put

// Delete
// Delete

exports.app = functions.https.onRequest(app);
