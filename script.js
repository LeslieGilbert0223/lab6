"use strict";

console.log("Number 1");
// 1- Declare a variable named submissions that is initialized to an array with the following objects:
let submissions = [
    {
      name: "Jane",
      score: 95,
      date: "2020-01-24",
      passed: true,
    },
    {
      name: "Joe",
      score: 77,
      date: "2018-05-14",
      passed: true,
    },
    {
      name: "Jack",
      score: 59,
      date: "2019-07-05",
      passed: false,
    },
    {
      name: "Jill",
      score: 88,
      date: "2020-04-22",
      passed: true,
    },
   ];

console.log("Number 2");
// 2- Declare a function named addSubmission
// ○ Parameter(s): array , newName , newScore , newDate
// ○ Functionality: construct an object and push it into the array . The object must
// have the same properties as the objects already in the array. Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.

const addSubmission = (array, newName, newScore, newDate) => {
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    };
    array.push(newSubmission);
};

addSubmission(submissions, "Leslie", 98, "2020-10-23");
console.log(submissions);

console.log("Number 3");
// 3- Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array , index
// ○ Functionality: remove the object from the array at the specified index using
// the splice method.

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

console.log("Number 4");
// 4- Declare a function named deleteSubmissionByName
// ○ Parameter(s): array , name
// ○ Functionality: remove the object from the array that has the provided name .
// Incorporate the findIndex method and the splice method.

const deleteSubmissionByName = (array, name) => {
    let index = array.findIndex((item)=>{
        return item.name === name;
    });
    deleteSubmissionByIndex(array, index);
};
deleteSubmissionByName(submissions, "Jack");
console.log(submissions);

console.log("Number 5");
// 5- Declare a function named editSubmission
// ○ Parameter(s): array , index , score
// ○ Functionality: update an object’s score in the array at the specified index . Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.

const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
};
editSubmission(submissions, 0, 59);
console.log(submissions);


console.log("Number 6");
// 6- Declare a function named findSubmissionByName
// ○ Parameter(s): array , name
// ○ Functionality: return the object in the array that has the provided name . Use the
// find method.

const findSubmissionByName = (array,name) => {
    return array.find((studentName)=>{
        return studentName.name === name;
    });
};
console.log(findSubmissionByName(submissions, "Leslie"));

console.log("Number 7");
// 7- Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.

const findLowestScore = (array) => {
    let currentLowestObject = array[0];
    array.forEach((item)=>{
        if (item.score < currentLowestObject.score){
            currentLowestObject = item;
        };
    }); 
    return currentLowestObject
};
console.log(findLowestScore(submissions));


console.log("Number 8");
// 8- Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

const findAverageScore = (array) => {
    let total = 0;
    for(let sub of array) {  // fd
        total += sub.score;
    };
    return total / array.length;
};
console.log(findAverageScore(submissions));




console.log("Number 9");
// 9- Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have passing scores.

const filterPassing = (array) => {
    return array.filter((test)=>{
        return test.passed === true;
    });
};
console.log(filterPassing(submissions));



console.log("Number 10");
// 10- Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
    return array.filter((testScores)=>{
        return testScores.score>= 90;
    });
};
console.log(filter90AndAbove(submissions));





console.log("Extended Challenge - 1");
// Create a function named createRange
// ○ Parameter(s): start , end
// ○ Functionality: construct and return an array of integers starting with the start
// parameter and ending at the end parameter. e.g createRange(2, 5) returns
// [2, 3, 4, 5] .


const createRange = (start, end) => {
    let array1 = []; // creates an empty array
    for (let i = start; i <= end; i++) { // array increments up from the start
        array1.push(i); 
    }
    return array1;
};
console.log(createRange(2, 5)); 

// 2nd way for doing challenge 1
// const createRange = (start, end) => {
//     const int1 = start;
//     const int2 = end;
//     const intArray = [];
//     for(let i = int1; i <= end; i++){
//         intArray.push(i);
//     };
//     return intArray;
//  };

console.log("Extended Challenge - 2");
// Create a function named countElements
// ○ Parameter(s): array (an array of strings)
// ○ Functionality: construct and return an object with the array values as keys and
// the number of times that key appears in the array as values. e.g.
// countElements(['a', 'b', 'a', 'c', 'a', 'b']) returns { a: 3, b: 2,
// c: 1 } 
//e.g.countElements(['apple', 'banana', 'apple', 'cherry', 'apple', 'banana']) 
//returns { apple: 3, banana: 2, cherry: 1 }.

const countElements = (array, a, b, c) => {
    let array2 = {
      apples: "apple",
      bananas: "banana",
      cherries: "cherry"  
    }
    // results = new Counter(Object.values(array2));
    // for(let [item, times] of results.length());
    array.push(array2);
    return array2;
};

// console.log(item.apple, times);

// console.log(search);
console.log(countElements(["apple", "banana", "apple", "cherry", "apple", "banana"]));

 // let search = countElements.reduce(function(n, item){
    //     return n + (item.apples == "apple");
    // }, 0);

    // let search = "apple";
    // let count = countElements.reduce(function(n, val) {
    //     return n + (val === search);
    // });
    
    // let count = 0;
    // array.forEach((item)=>{

    // });
    // for(let i=0; i <array2.length; ++i){
    //     if(array2[i] == "a")
    //     count++;
    // };
    // array.push(array2);
    // return array2;

let dataset = [2,2,4,2,6,4,7,8];
let search = 2;

let count = dataset.reduce(function(n, val) {
    return n + (val === search);
}, 0);

console.log(count);