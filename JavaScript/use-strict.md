[Home](../README.md) | [Next >>](compilations-vs-polyfilling.md)



# Use Strict

#### Use Strict === Strict Operating Context

* Strict mode allows us to place a function or a program in a strict operating context.
* This makes debugging easier by catching the code errors which would have been ignored or failed silently.
* After enabling strict mode, these code will generate errors and start throwing exceptions, which will enable us to act on the issues immediately.

We can enable strict mode by placing the below string on top of a file, or using it within your function.

```js
"use strict"
```

> Note: If you notice, use strict is not a keyword, its just a string. This is because, when this feature was thought, the older browsers didn't supported. Hence it was introduced as a string. So the older browsers could simply ignore it treating it as a string.

#### Is it possible to have strict mode partially in your application? 
Yes! It is possible. Simply place the "use strict" inside your function definition.

```js
// Not in strict mode
function newFunction(){
"use strict";
// strict mode
}
```
To validate this further, please copy paste the below snippet in your browser console.

```js
foo = 10;
function strictArea() {
"use strict"
    moo = 20;
}
```
* You will not see any console errors when you copy paste.
* But try executing the function strictArea(), you will get console error which says that "moo is not defined". 
* This is because in strict mode, using a variable before it is defined causes an error.


[Home](../README.md) | [Next >>](compilations-vs-polyfilling.md)

