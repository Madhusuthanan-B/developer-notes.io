[Home](../README.md) | [<< Previous](pass-by-value-and-pass-by-reference.md) | [Next >>](pass-by-value-and-pass-by-reference.md)



# Problems with isNaN()

* We can check for NaN using isNaN() function.
* We know that NaN means Not a Number. When we check the type of NaN, we get "number".

```js
typeof(NaN) // "number"
```

## isNaN() and its gotchas
* isNaN() is not 100% fool proof. It has its own issues.

Lets see what are the gotchas with isNaN()

```js
isNaN(NaN); // true
isNaN(10); // false
isNaN("10") // false

// Now carefully inspect the output of below line
isNaN("10B") // true
```

## So what are the problems?

As you can see, what happened in the last line provided in the above snippet is that, JavaScript tried to do a type coercion.

It simply tried to convert "10B" into a number.
isNaN(Number("10B"))

And Number("10B") returns NaN. Hence we get output as true. This is a problem. So how do we properly check for NaN?

## So what is the fool proof way to check for NaN?

** NaN is the only JavaScript value which is unequal to itself (NaN === NaN)**

So we can test if a value is NaN by comparing with itself using !== operator.
In the below example, if you assign any other value to foo apart from NaN, it will return false.

```js
var foo = NaN;

foo !== foo  // This will return true and this is the way to check.
```
