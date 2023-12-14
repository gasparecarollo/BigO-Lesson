const computer = {
    brand: "Tandy",
    weight: 22,
    working: false,
    condition: "mint",
    price: 2894,
    powerUp() {
        return "the computer now is on";
    },
    powerDown() {
        return "the computer is now off";
    },
    fixComputer: () => {
        computer.working = true;
    },
    inStock: 10,
    buy() {
        computer.inStock -= 1;
        return "Thank you for buying w/ Temu"
    },
    buyMultiple(amount) {
        //guard clause
        if (amount > computer.inStock) {
            return `We don't have that many in stock, the max you can buy is ${computer.inStock}`
        }
        computer.inStock -= amount;
        console.log(`There are now ${computer.inStock} computers in stock`)
        return `You have purchased ${amount} of ${computer.brand} computers`
    },
    restock(amount) {
        computer.inStock += amount
    }
};

console.log(computer.brand)
console.log(computer.price)
//Bracket notation
//The variable weight has the value of the string "weight" assigned to it
//We can pass in a variable as the key to our object using bracket notation and it work just fine!
console.log(computer["weight"])

let weight = "weight"
let key = "brand"
key = "condition"
console.log(computer[key])

//for-in loops iterate over objects (not arrays)
// for (const key in computer) {
//     //console.log(key)
//     console.log(computer[key])
// }

//object methods
//Object is a class in JS, each class has built in methods
const computerKeys = Object.getOwnPropertyNames(computer)
console.log(computerKeys)

for (let i = 0; i < computerKeys.length; i++) {
    console.log(computerKeys[i])
    console.log(computer[computerKeys[i]])
}
//Line below prints out all the keys 
//"new" keyword creates a new instance of a class
// const arr = [1, 2, 3, 4, 5, 2]
// const set = new Set(arr)

// const str = 'string'
// const str2 = 

//using object methods: difference between a method and a function, is that the method belongs to an object/class
//Powering Up
console.log(computer.powerUp())
//Powering Down
console.log(computer.powerDown())
//Can use bracket notation to invoke our methods as well
console.log(computer["powerUp"]())


//Updating/overwriting a property
//console.log(computer.price)

const bfDeal = 1000
computer.price = bfDeal

console.log(computer.price)

//Using a function that will update one of computer's properties 
// It went from working: false to working:true
//because .fixComputer() flips the STATE
computer.fixComputer()
console.log(computer)

//Using a method that takes in a parameter, called buyMultiple (amount)

console.log(computer)

console.log(computer.buyMultiple(5))


const backpack = {
    color: "green",
    contents: [
        "laptop",
        "paper",
        "phone",
        { wallet: ["money", "id", ["mastercard", "visa card", "discover card"]] },
        {
            pockets: {
                outer: ["metrocard", "tissues"],
                inner: {
                    outer: "ruler",
                    inner: ["dental floss", { mintFlavor: "peppermint", number: 33 }],
                },
            },
        },
    ],
    zipIt() {
        return "it is zipped";
    },
    unZipIt() {
        console.log("some items fell out");
        return {
            pickUpItems() {
                return ["lip balm", "comb", "38 cents"];
            },
        };
    },
};

//Prints out an object containing wallet key
//console.log(backpack.contents[3])

//Prints out the value for the wallet key
//console.log(backpack.contents[3].wallet)

//Prints out just money
//console.log(backpack.contents[3].wallet[0])

//Prints out the subarray inside the wallet
//Inside the wallet: ["mastercard", "visa card", "discover card"]
//console.log(backpack.contents[3].wallet[2])

//Prints out Pockets as a key
//console.log(backpack.contents[4])

//Get the value for the key of pockets
// console.log(backpack.contents[4].pockets
//Bracket notation
//OR console.log(backpack.contents[4]["pockets"]))

//Get the object that has the keys 'outer' and 'inner'
console.log(backpack.contents[4].pockets.inner)
//^^^^Prints out pockets: {
// outer: ["metrocard", "tissues"],
// inner: {
//     outer: "ruler",
//     inner: ["dental floss", { mintFlavor: "peppermint", number: 33 }],

//Print out
// console.log(backpack.contents[4].pockets.inner.inner)

//Get the object that has mintFlavor and number as keys inside of the array
//console.log(backpack.contents[4].pockets.inner.inner[1])

//Gets peppermint
//console.log(backpack.contents[4].pockets.inner.inner[1].mintFlavor)



//GOOD PRACTICE
//Set each nested value to a variable for easier access
// const contentsArr = backpack.contents
// console.log(contentsArr[4])
// const pocketsObj = contentsArr[4]

//Destructuring an Object
// const { contents } = backpack
console.log(contents)

//Destructuring the contents array
const [laptop, paper, phone, wallet] = contents;
//Replace the items before wallet with a comma
//We use commas bc the value we want to get is the fourth value in the Array. We use commas to represent each index that we are not grabbing
const [, , , wallet] = contents
console.log(wallet.wallet)
const { wallet } = wallet
console.log(wallet)