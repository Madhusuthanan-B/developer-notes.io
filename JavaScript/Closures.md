[Home](../README.md) | [<< Previous](Scope-Chain.md) | [Next >>](Scope-Chain.md)


# Closures

* According to our rule of scopes, all the variables within a function are deleted once the function finishes execution.
* How ever, when a function returns a function, then the function that is returned keeps a reference of any variables that it needs to execute.
* So closures are a special set of references to variables that a function needs. Basically variables which are outside the function's scope.
* Hence closures can refer to variables in outer scope.
* They can refere to variables in outer function even after the outer function has returned.

Example 1:

```js
function sayHello(name) {
  var greeting = `Hello ${name}`;
  
  return function() {
    console.log(greeting);
  }
}

var madhuSaysHello = sayHello('Madhu'); // We have called the outer function.
madhuSaysHello(); // Hello Madhu
```
Explanation:

* In this example, the inner function uses the variable greeting which is there in the outer function.
* Hence, it keeps a reference of greeting even after sayHello function's execution is over.
* So even after outer function's execution is over (var madhuSaysHello = sayHello('Madhu')), a reference of greeting is kept.


Example 2:

```js
var numbers = [];
for(var i=0; i<10; i++) {
  numbers[i] = function() { return i; };
}

console.log(numbers[0]()); // 10
console.log(numbers[1]()); // 10
console.log(numbers[2]()); // 10
```
Explanation:

* In this case, the closure doesn't get a copy of i. 
* Since the reference is maintained, Its the actual value of i that is maintained as closure.
* Once this loop is over, the last value of i is 10.


[Home](../README.md) | [<< Previous](Scope-Chain.md) | [Next >>](Scope-Chain.md)
