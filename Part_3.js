const arrObj1 = 
    [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

 

// by reference when original value is passed through the function

const person = {
    id: "42",
    name: "Bruce",
    occupation: "Knight",
    age: "41"
}
function PassByRef(a) {

 if (person.age === undefined) {
     a.age = "0"
 }

if (person.age !== "0") {
    a.age = (Number(a.age) + 1).toString();
}

if (person.updated_at === undefined) {
    a.updated_at = new Date();
}

console.log(a);

}

PassByRef(person);
console.log(person); // to see that the changes have been made to the original object itself as well



////////////////////////////////////////////////////////////////////////////////////////////////
console.log("===============================================")
const arrObj2 = 
    [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// by value when copy of the variable is passed through the function

const person1 = { 
    id: "57", 
    name: "Bob", 
    occupation: "Fry Cook", 
    age: "19"
   
}

let person1Copy = JSON.parse(JSON.stringify(person1)); // method to clone the bject so to keep the original intact
function PassByVal(a) {

 if (person1Copy.age === undefined) {
     a.age = "0"
 }
if (person1Copy.age !== "0") {
    a.age = (Number(a.age) + 1).toString();
}
if (person1Copy.updated_at === undefined) {
    a.updated_at = new Date();
}

console.log(a);
}

PassByVal(person1Copy);
console.log(person1); // to see that the changes have NOT been made to the original object

console.log("\n\While using function setTime() or other methods to the Date object, one could circumvent the potentially undesired behavior by using a deep copy method like JSON.parse(JSON.stringify(obj)) or a library like Lodash's cloneDeep().")
