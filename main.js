//function

function foo(a) {
    var b = a + 2;

    function bar(c) {
        console.log(a,b,c)
    }

    bar(b * 2);
}

foo(3);

function foo2() {
    var a = 2;

    function bar() {
        console.log(a);
    }
    return bar;
}

var baz = foo2();

baz();
console.log(foo2());

function fib1(n) {

    if (n <=1) {
        return 1
    }

    return fib1(n - 1) + fib1(n - 2)

}