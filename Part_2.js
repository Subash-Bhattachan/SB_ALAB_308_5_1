const arrObj = 
    [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]


// sorting the array by age
/////////////////////////////////////////
    let result = arrObj.sort((a, b) => a.age - b.age);
      console.log(result);


// Filtering the array to remove entries with an age greater than 50 
/////////////////////////////
    let filteredTeamMembers = arrObj.filter((TeamMember) => {
        return TeamMember.age < 50;});
    
    console.log(filteredTeamMembers);


// Mapping the array to change the existing key to a new key and incrementing the age value by 1
 ///////////////////////////////
  let newResult = arrObj.map((person) => {
    const { id, name, occupation: job, age} = person; // Destructure and rename
    return { id, name, job, age: Number(age) + 1};
  });
  
  console.log(newResult);


// Using the reduce method to calculate the sum of the ages and then calculating the average
//////////////////////////////////////////
const sum = arrObj.reduce(
  (accumulator, currentValue) => accumulator + Number(currentValue.age),
  0,
);



//Now to calculate the number of people in the given array 
//////////////////////////////////////////////////
    let numPerson = 0;  
    for (let i = 0; i < arrObj.length; i++) {           
            numPerson++;
    }
console.log("The total sum of the ages is " + sum + " years.");
let average = sum / numPerson;
console.log("The average age of the people is " + average + " years.")


