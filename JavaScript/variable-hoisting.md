[Home](../README.md) | [<< Previous](NaN.md) | [Next >>](NaN.md)



# Hoisting

* Automatic hoisting of variable declaration to the top of its enclosing scope.
* Variables as well as functions are hoisted.
* Anonymous functions could have issues with hoisting.

## Variable Hoisting

In snippet 1, the variable foo is hoisted in global scope. It can be visualized as mentioned in snippet 2

#### snippet 1
```js
"use strict"

console.log(foo); // undefined
var foo = 1;
```

#### snippet 2
```js
"use strict"
var foo;
console.log(foo);
foo = 1;
```

## Function Hoisting

In snippet 3, the function moo is hoisted in global scope. It can be visualized as mentioned in snippet 4

#### snippet 3
```js
"use strict"

moo();  // prints moo

function moo() {
  console.log('moo');
}
```

#### snippet 4
```js
"use strict"

function moo() {
  console.log('moo');
}

moo();
```

## Issues with Anonymous Function Hoisting

Snippet 5 can be visualized as mentioned in snippet 6. Since we cannot invoke a function on undefined. We will get an error.

#### snippet 5
```js
"use strict"

moo();  // error

var moo = function() {
  console.log('moo');
}
```

#### snippet 6
```js
"use strict"

var moo;

moo();

moo = function() {
  console.log('moo');
}

moo();
```
