let fizz = function () {
    //this
} //function expression

function foo(name) {
    //this
    console.log(this);
    console.log(name);
    console.log("foo");
} //function declaration

let bazz = () => {
    //нет собственного this
} //arrow function

function Foo() { // функция конструктор
    //this
    console.log("foo");
} //function declaration

let myObj = {};
myObj.foo = foo;

// foo()
// // myObj.foo();
// // new Foo();
// foo.call(myObj, "Eugene");
// foo.apply();

function CleanUp(arr) {
    return arr.filter(el => Boolean(el) !== false)
}

console.log(CleanUp([1, 2, null, '', 'a', 3, undefined, false]));