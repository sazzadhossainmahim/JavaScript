// for (let step = 0; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log('Walking east one step');
// }


// for statement
// for ([initialExpression];
//     [conditionExpression];
//     [incrementExpression])
//     statement






let i = 0;
let n = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    n += i;
    console.log(n);
}
//1,3,7,12

let i = 0;
let n = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        // continue;
    }
    n += i;
    console.log(n);
}
// 1,3,6,10,15