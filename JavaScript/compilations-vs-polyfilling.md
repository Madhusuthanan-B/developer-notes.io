# Compilors vs Polyfills

## Compiler

As we know that JavaScript as a language keeps evolving. We should always try to write code in latest JavaScript.
But wait a minute! This has a problem. 

**Does all browsers support all the specifications in latest JavaScript?**

Well, the answer is **NO**

This is exactly where Compilation come handy, which is done with the help of a Compiler.

> So basically, the compiler let us write latest JavaScript code and it takes care of converting this code into its equivalent old JavaScript code which many browsers understand.

[Babel](https://babeljs.io/) is one of the most popular compiler out there

You can see how the below code snippet, which is in ES6 gets converted into older JavaScript using babel.
```js
let browsers  = ['ie', 'chrome', 'firefox'];
let messengers = ['fb', 'whatsapp'];

const timeline = [...browsers, ...messengers];
```

### ES5 Code output from babel
```js
"use strict";

var browsers = ['ie', 'chrome', 'firefox'];
var messengers = ['fb', 'whatsapp'];
var timeline = [].concat(browsers, messengers);
```

In this case, let, const and spread operators are some of the new features of ES6, which got converted.

## Polyfills

If you notice compilers, they convert a new feature to old equivalent code. But what happens in scenarios where some new features are added but an equivalent old not doesn't exist?

> Note: Use babel and try to compile a Promise into old JavaScript. If you take a closer look at the result produced, it will not be converted but it will be left as it is.

**The point is, we cannot add a new feature by using a compiler.**

Our previous example of array concatenation using spread operator, the same snippet could have been represented in a different way in ES5. That's why we were able to compile it.

But there is no way to represent a brand new feature in ES6 in ES5 (For example: Promise). This is exactly where Polyfills come into picture.

> Polyfill is totally a new code, which can be included in our code. And this will have an equivalent representation written in older version of JavaScript, which can run without issues in older browsers.
