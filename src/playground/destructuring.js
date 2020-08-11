// 
// Object destructuring
// 

// const person = {
//     name: "Daniel",
//     age: 21,
//     location: {
//         city: "Mérida",
//         temp: 36
//     }
// };

// const {name: firstName = "Anonymus", age } = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature } = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// // Challenge
// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

// 
// Array  destructuring
// 

const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];
const [ , city, state = "New York"] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ["Coffe (hot)", "$2.00", "2.50", "2.75"];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);