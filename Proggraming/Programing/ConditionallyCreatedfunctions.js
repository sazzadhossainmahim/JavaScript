var hoisted = "foo" in this;
console.log(`'foo' name ${hoisted ? "is":"is not"}
        hoisted. typeof foo is $ { typeof foo }  `);

if (false) {
    function foo() { return 1; }
}