// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true
// if they are in love and false
// if they aren 't.

// টিমি এবং সারাহ মনে করেন যে তারা প্ রেমে পড়েছেন, কিন্ তু তারা যেখানে থাকেন তার আশেপাশে,
// তারা একবার ফুল বাছাই করলেই জানতে পারবেন।
// ফুলের একটিতে যদি জো ড় সংখ্ যার পাপড়ি থাকে এবং অন্ যটিতে বিজো ড় সংখ্ যক পাপড়ি থাকে তাহলে বো ঝা যায় তারা প্ রেমে পড়েছে।

// একটি ফাংশন লিখুন যা প্ রতিটি ফুলের পাপড়ির সংখ্ যা নেবে এবং যদি তারা প্ রেমে থাকে তবে সত্ য এবং না থাকলে মিথ্ যা হবে।



// ------------------------------ Sample Testsconst chai = require("chai")--------------------;

// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(lovefunc(1, 4), true)
//         assert.strictEqual(lovefunc(2, 2), false)
//         assert.strictEqual(lovefunc(0, 1), true)
//         assert.strictEqual(lovefunc(0, 0), false)
//     });
// });


function lovefunc(flower1, flower2) {
    // moment of truth

    //   let  numberEven,numberOdd;
    if (flower1 % 2 == 0 && flower2 % 2 == 1) {
        return true;
    }
    if (flower1 % 2 == 1 && flower2 % 2 == 0) {
        return true;
    } else {
        return flase;
    }
}

// function lovefunc(flower1, flower2) {
//     return (flower1 + flower2) % 2 != 0; // moment of truth
// }

// function lovefunc(flower1, flower2) {
//     return (flower1 + flower2) % 2 !== 0;
// }


// function lovefunc(flower1, flower2) {
//     var isFlower1 = flower1 % 2 == 0;
//     var isFlower2 = flower2 % 2 == 0;

//     return isFlower1 != isFlower2;
// }

// const lovefunc = (flower1, flower2) => !!((flower1 + flower2) % 2)