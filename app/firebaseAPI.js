// https://firebase.google.com/docs/firestore/query-data/get-data

import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebaseConfig"

const getConcert = async () => {
    const querySnapshot = await getDocs(collection(db, "concerts"))
    querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
    });
};

export default getConcert;