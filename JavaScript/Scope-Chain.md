[Home](../README.md) | [<< Previous](variable-hoisting.md) | [Next >>](Closures.md)


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
 **The reason why we get this error is because the scope chain is defined lexically - which means, scope chain is defined by the way code is written on a file.**
 
Explanation:

* **Step 1:** foo() function looks for myVar within its own scope and it doesn't find myVar.
* **Step 2:** JS engine will look outside the foo() function, which is global scope and it doesnt find myVar.
* **Step 3:** Since global scope is the last place which it can look for and it didn't find myVar, it throws and error.


Now lets modified the above snippet slightly.
```js
"use strict"

function moo() {
  var myVar = 10;
  
  function foo() {
    console.log(myVar);
  }
  foo();
}

moo();  // 10
```

Explanation:

* **Step 1:** foo() function looks for myVar within its own scope and it doesn't find myVar.
* **Step 2:** JS engine will look outside the foo() function and it finds myVar within moo() function.
* **Step 3:** Since it found myVar, it will use the value of myVar, which is 10. Hence it prints 10.

**Summary:** Variables are resolved in the order in which code is written on a file.


[Home](../README.md) | [<< Previous](variable-hoisting.md) | [Next >>](Closures.md)
