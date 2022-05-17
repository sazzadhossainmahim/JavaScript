// Make a function that will return a greeting statement that uses an input;
// your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// ---------------------------------------------------Sample Tests--------------------------------------------------

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
//         assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
//     })
// })

// 1
// const chai = require("chai");

// const assert = chai.assert;
// 3
// chai.config.truncateThreshold = 0;
// 4​
// 5
// describe("Basic tests", () => {
//     6
//     it("Testing for fixed tests", () => {
//         7
//         assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
//         8
//         assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
//         9
//     })
//     10
// })
// 11​


// --------solution

function greet(name) {
    return `Hello, ${name} how are you doing today`;
}

// const greet = name => `Hello, ${name} how are you doing today?`;


// Return a greeting string
// function greet(name) {
//     return "Hello, " + name + " how are you doing today?";
// }

// function greet(name) {
//     return "Hello, " + name + " how are you doing today?"
// }

// function greet(name) {
//     return "Hello, <name> how are you doing today?".replace("<name>", name);
// }