// note
// Functions are hoisted if they're defined using function declarations
//  — but functions are not hoisted if they're defined using function expressions.
// 1st  example 
// foo();

// function foo() {
//     console.log('bar');
// }

// note
// 2nd example
console.log(baz);
var baz = function() {
    console.log('bar2')
}