[Home](../README.md) | [<< Previous](use-strict.md) | [Next >>](pass-by-value-and-pass-by-reference.md)



# How to check for NaN correctly in JavaScript?

* We can check for NaN using isNaN() function.
* We know that NaN means Not a Number. Interestingly the below snippet returns number.

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
