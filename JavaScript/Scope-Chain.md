[Home](../README.md) | [<< Previous](variable-hoisting.md) | [Next >>](variable-hoisting.md)


# Scope Chain

* When a variable is used, the engine will look for the variable in its own function scope.
* If it can't find the variable, then it will look for the variable in its outer function scope.
* If it can't find there, it will keep going outer and outer till it reaches global scope.

### Important

**Scope chain is defined by the way program is written within a file**

Lets take a look at some examples

```js
"use strict"

function foo() {
  console.log(myVar);
}

function moo() {
  var myVar = 10;
  foo();
}

moo();  // myVar not defined error
```
Explanation:

* The reason why we get this error is because the scope chain is defined lexically - which means, scope chain is defined by the way code is written on a file.
* myVar is not within foo() function. So JS engine will look outside the foo() function and look for myVar.
* Since it is not defined outside foo(), we will get this error.
