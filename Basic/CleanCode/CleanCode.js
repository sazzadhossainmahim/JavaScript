// how to -----------------declare variable

let a, b = 1; //one lines

let [c, d, e] = [1, 2, 3];

// Variables ---------- Naming variables
let DaysCartActive = 5;
let CurrentYear = new Date().getFullYear();


// let fs;
// if (cart.total > 50) {
//     fs = true;
// }
// ------>
//-----------> we can do this like that
const FREE_SHIPPING_MIN_PRICE = 50;
const isShippingFree = cart.total > FREE_SHIPPING_MIN_PRICE;


// -----------Don't relay on Memory--------------------------------
const books = ['Book 1', 'Book 2', 'Book 3'];
books.forEach(b => {
    read(b);
});

// -----here b----we can write book


// 
// ----------Unnecessary Context--------------------------------


//
// DeStructuring --------------------------------

// example
// const street = address.street;
// const city = address.city;
// const state = address.state;
// const zipCode = address.zipCode;

// -----> do this

const { street, city, state, zipCode } = address;

// 
// ---Default Argument ---
// example
function favoriteColor(color = 'blue') {
    // let selectedColor = color || "blue";

    return selectedColor;
}
console.log(favoriteColor("red"));

//
// conditional shorthand
// Example:

if (isAdmin == true) {
    // 
}
if (isAdmin == false) {
    // 
}

// ----->> 
if (isAdmin) {
    ////////////////////////////////
}
if (!isAdmin) {
    //  
}

// 
// Template literals

// Example

const Fn = 'm',
    Ln = 'b';
const greeting = `Hello  + ${Fn} ${Ln}`;
console.log(greeting);

//
// ---Write Linear Code
// Example: