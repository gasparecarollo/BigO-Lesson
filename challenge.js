//Write a function findWordFrequency that takes a sentence (a string ) and returns an object with each word as a key, with a value of how many times that word appears in the sentence

//Polya Problem Solving Methodology

//1. Understand the problem
//2. Write a plan
//3. Carry out the plan
//4. Refactor and Revise

//input: String
//output: Object
//The object will have words and keys, and the number of times they appear in the string as their values

//Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo
//Would result in: {Buffalo: 3, buffalo:5}

//Initialize an empty object (our accumulator )
//Split the string into an array, and omit the spaces
//Iterate over the array
//If its the first time we're seeing the word, add it to the object and set the value to be 1
//else the word is already in the object, so we increment that key's value by 1
//Return our object (accumulator)

function findWordFrequency(str, word) {
    //Initialize an empty object (our accumulator
    let newObj = {}
    //Split the string into an array, and omit the spaces
    let splitStr = str.split(" ")
    //Iterate  over the array
    //if its the first time we're seeing the word, add it to the object and set the value to be 1
    for (let i = 0; i < splitStr.length; i++) {
        if (!newObj[splitStr[i]]) {
            newObj[splitStr[i]] += 1
        } else {
            newObj[splitStr[1]] += 1
        }
    }
    //Return our object (accumulator)
    return newObj
}
console.log(findWordFrequency("Buffalo buffalo Buffalo buffalo buffalo"))

const findWordFrequency2 = (str) => {
    // Initialize an empty object (our accumulator)
    const obj = {}
    // Split the string into an array, and omit the spaces
    const strArr = str.split(' ')
    // Iterate over the array using a for-of loop
    for (let word of strArr) {
        // if its the first time we're seeing the word, add it to the object and set the value to be 1
        // console.log(word)
        if (!obj[word]) {
            obj[word] = 1
        } else {
            // else the word is already in the object, so we increment that key's value by 1
            obj[word] += 1
        }
    }
    // Return our object(accumulator)
    return obj
}

console.log(findWordFrequency2("Rose rose to look at her rose"))
