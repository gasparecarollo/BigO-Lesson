//Determine the time complexity of the following samples of code:

//🍩 Disemvowel trolls (without Regex)///////////////////////
const disemvowel = (word) => {
    //O(n)
    for (let i = 0; i < word.length; i++) {

        if (
            //O(1)
            word[i].toLowerCase() === "a" ||
            //O(1)
            word[i].toLowerCase() === "e" ||
            //O(1)
            word[i].toLowerCase() === "i" ||
            //O(1)
            word[i].toLowerCase() === "o" ||
            //O(1)
            word[i].toLowerCase() === "u"
        ) {

            word = word.slice(0, i) + word.slice(i + 1);
            i--;
        }
    }
    return word;
};
/////////////////////////////////////////////////////////////

//🍩 2D Array Find Greatest Sum//////////////////////////////
const greatestSum = (arr) => {
    //O(1)
    let highestRowSum = 0
    //O(1)
    let highestColumnSum = 0
    //O(1)
    let forwardDiagSum = 0
    //O(1)
    let reverseDiagSum = 0
    //O(i)
    for (let i = 0; i < arr.length; i++) {
        forwardDiagSum += arr[i][i]
        reverseDiagSum += arr[(arr.length - 1) - i][i]
        let rowSum = 0
        let columnSum = 0
        //O(j)
        for (let j = 0; j < arr[i].length; j++) {
            rowSum += arr[i][j]
            columnSum += arr[j][i]
        }
        //O(1)
        if (rowSum > highestRowSum) highestRowSum = rowSum;
        //O(1)
        if (columnSum > highestColumnSum) highestColumnSum = columnSum;
    }

    return Math.max(highestRowSum, highestColumnSum, forwardDiagSum, reverseDiagSum)
}
/////////////////////////////////////////////////////////////

//🍩 Well of Ideas (Easy)////////////////////////////////////
const well = (x) => {
    //O(1)
    let good = 0
    // O(n)
    for (let idea of x) {
        //O(1)
        if (idea === 'good') good += 1
    }
    // O(1)
    if (good > 0 && good <= 2) return 'Publish!'
    //O(1)
    else if (good > 2) return 'I smell a series!'
    else return 'Fail!'
}
/////////////////////////////////////////////////////////////

//🍩 Find Sum Up To n Version1///////////////////////////////
const addUpTo = (n) => {
    //O(1) 
    return n * (n + 1) / 2
}
/////////////////////////////////////////////////////////////

//🍩 Find Sum Up To n Version2////////////////////////////////
const addUpTo = (n) => {
    //O(1)
    let total = 0
    //O(n)
    for (let i = 0; i < n; i++) {
        total += i
    }
    return total
}
/////////////////////////////////////////////////////////////

//🍩 The Barksdale Code///////////////////////////////////////
const decode = (string) => {
    //O(1)
    let decoded = ''
    //O(n)
    for (let num of string) {
        decoded += num === '5' ? 0 : num === '0' ? 5 : 10 - num;
    }
    return decoded
}