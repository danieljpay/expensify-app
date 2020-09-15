import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { firebase, googleAuthProvider, facebookAuthProvider, githubAuthProvider, database as default };

// //child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses")
//     .on("value", (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref("expenses").push({
//     decription: "green shoes",
//     note: "specifically shoes to run",
//     amount: 800,
//     createdAt: 5000
// });

// database.ref().on("value", (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// });

// database.ref("location/city")
//     .once("value")
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log("Error fetching data", e);
//     });

// database.ref().set({
//     name: "Daniel Perez",
//     age: 21,
//     stressLevel: 6,
//     job: {
//         title: "Software developer",
//         company: "Google"
//     },
//     location: {
//         city: "Mérida",
//         country: "Yucatán"
//     }
// }).then(() => {
//     console.log("Data is saved");
// }).catch((e) => {
//     console.log("This failed", e);
// });

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Progreso"
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log("Data was removed");
//     }).catch((e) => {
//         console.log("Did not remove data");
//     });