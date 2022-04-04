var window;

function WindowOpen() {
    window = window.open(
        "https://apphs.somewherewithmahim.com",
        "_blank", "width=400,height=450");

}

function WindowClose() {
    window.close();
}

// window console methods

let userLogged = true
console.log('user logged:' + userLogged)
console.assert(userLogged, '1 user is not logged')
userLogged = false
console.log('user logged: ' + userLogged)
console.assert(userLogged, '2 user is not logged')

// -------------console.clear  
// console.clear();
for (let count = 0; count < 5; count++) {
    console.count();
}

// -----------console.error ------------------------
// array 
const errorArr = ["orange", "banana", "mango"];
console.error(errorArr);
// Object 

const ErrorObject = { firstname: "jhon", lastname: "deo" };
console.error(ErrorObject)

//---------------console group
console.log("hellow world");
console.group("myLabel");
console.log("hi from mylabel");


//-------Console groupCollapsed()--------------------------------
console.log("hello groupCollapsed");
console.groupCollapsed();
console.log("hello groupCollapsed, this time inside a collapsedgroup");

//-GroupEnd------
console.log("hello world! GroupEnd");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
// --console.info--------------------------------
console.info("Hello again, this");
// --console.table()--------------------------------
console.table(["audi", "volvo", "ford"]);

// --console.time--------------------------------
console.time();
for (let time = 0; time < 10000; time++) {

}
console.timeEnd();

// console trace()

function Trace() {
    MyOtherTrace();
}

function MyOtherTrace() {
    console.trace();
}

// console warn()
console.warn("this is a warning message");