import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBCT-BQf_28SDKhc-dEVMic3KG3TlykPH8",
    authDomain: "expensify-d66a2.firebaseapp.com",
    databaseURL: "https://expensify-d66a2.firebaseio.com",
    projectId: "expensify-d66a2",
    storageBucket: "expensify-d66a2.appspot.com",
    messagingSenderId: "305039537584",
    appId: "1:305039537584:web:de345c7b157f68168a1275",
    measurementId: "G-NWEGG8LR1F"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().on("value", (snapshot) => {
    const data = snapshot.val();
    console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
});

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