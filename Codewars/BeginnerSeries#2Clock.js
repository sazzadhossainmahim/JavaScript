// Beginner Series #2 Clock
// 3538191 % of 6, 28920, 677 of 62, 614 Vortus1 Issue Reported
// JavaScript
// Node v8 .1 .3
// VIM
// EMACS
// Instructions
// Output
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a
// function which returns the time since midnight in milliseconds.

// Example:
//     h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

//     0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
// FUNDAMENTALS
// -----------------------------------------------------------------------------------Sample Test
// describe("Fixed Tests", () => {
//     it("Tests", () => {
//         Test.assertEquals(past(0, 1, 1), 61000)
//         Test.assertEquals(past(1, 1, 1), 3661000)
//         Test.assertEquals(past(0, 0, 0), 0)
//         Test.assertEquals(past(1, 0, 1), 3601000)
//         Test.assertEquals(past(1, 0, 0), 3600000)
//     });
// });

//  --------------------------------------------------------------------------Solution
function past(h, m, s) {
    //#Happy Coding! ^_^

    //   let h,m,s = [0,1,1];
    //   let now = new Date(),
    //       then  = new Date(
    //       now.getFullYear(),
    //       now.getMont
    //   ****
    //   let m = (h,m,s=0)=>(h*60*60+m*60+s)
    //   *1000;
    //   let t = "34:26";
    //   let r = m(time.split(':'));

    //   ******
    //   let d = new Date();
    //   d.sethours(0,1,1);

    //   let d= new Date();
    //   let n = d.getTime();
    //   return past;

    //   ****************

    //    s = Math.floor(m/1000);
    //    m = Math.floor(s/60);
    //    h = Math.floor(s/60);

    //   s = s % 60;
    //   m= m%60;
    //   h=h%24;

    //   return past;

    //   ----------------**********

    //   let e = new Date(h,m,s);
    //   return past = e.setHours("");
    //   ----------------**********

    // var d = new Date(),
    //    return past = d.getTime() - d.setHours(0,1,1,);


    let cH = h * 3600000;
    let cM = m * 60000;
    let cS = s * 1000;
    return (cH + cM + cS);
    //   return past;
}

// Output


// Time: 623 ms Passed: 5 Failed: 0
// Test Results:
//     Fixed Tests
// Tests
// Test Passed: Value == 61000
// Test Passed: Value == 3661000
// Test Passed: Value == 0
// Test Passed: Value == 3601000
// Test Passed: Value == 3600000
// Completed in 2 ms