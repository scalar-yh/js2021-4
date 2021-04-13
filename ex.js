/*let foo = function () {
    console.log("1");
    console.log("2");
}

let bar = 135;

foo();
console.log(foo);
console.log(bar);*/

/*function foo () {
    console.log("1");
    console.log("2");
}
foo()
console.log(foo);*/

function foo(x) {
    bar=x*x;
    return bar;
}

function multiply (x,y) {
    return x*y;
}

console.log(multiply(52, 273));
console.log(multiply(103, 32));

function print(x) {
    console.log(`"${x}" 라고 부른다.`);
}
print("안녕하세요");
print("bobo");