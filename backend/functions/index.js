/* eslint-disable indent */
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://handsup-eb897-default-rtdb.firebaseio.com",
});

const express = require("express");
const cors = require("cors");
const db = admin.firestore();

const app = express();
app.use(cors({origin: true}));

// Routes
app.get("/", (req, res) => {
    return res.status(200).send("Hello World!");
});

// Create
// Post
app.post("/api/create", (req, res) => {
    (async () => {
        try {
            await db.collection("concerts").doc("/" + req.body.id + "/")
            .create({
                artist: req.body.artist,
                data: req.body.data,
                location: req.body.location,
                picture: req.body.picture,
            });
            return res.status(200).send();
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

// Read
// Get

// Update
// Put

// Delete
// Delete

exports.app = functions.https.onRequest(app);
