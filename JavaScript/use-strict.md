### Use Strict

How strict is use strict?

Strict mode allows us to place a function or a program in a strict operating context, which makes debugging easier by catching those errors which would have been ignored previously and by directing us to the correct way of doing things.

How do we enable strict mode in javascript?

The answer is simple by writing "use strict" within quotes. 

Why are we writing use strict within quotes?

The reason being use strict is not a keyword and when this feature was introduced the older browsers does not support, only the newer browsers supported. hence it was put up inside a string so when the new version of browsers comes across "use strict", it actually recognises as a strict mode. when the older version of the browsers comes across this string it will ignore this since its a simple string without any imapct.

It is totally possible to use strict mode to your legacy applications by partly including strict mode like the below example

// not in strict mode.
function newFunction(){
"use strict";
// strict mode enabled 
}

what happens when your code is not strict.

1) swathi = 1;
console.log(  window.swathi);
// logs 1. (i.e) it creates a global variable or in this case a window object.
