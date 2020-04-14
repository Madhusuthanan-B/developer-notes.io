[Home](../README.md) | [<< Previous](compilations-vs-polyfilling.md) | [Next >>](rest-operators.md)



# Pass by value and Pass by reference

In JavaScript all the primitive types are passed by value (strings, numbers and booleans) and objects are passed by reference.

#### Pass by value
If we change the value of the primitive type which is passed into a function, then any changes to this, will not affect the variable in the outerscope.

Example:
```js
var dog = 'Retriever';

function changeDog(dog) {
  dog = 'Pug';
}

changeDog(dog);
console.log(dog);  // Retriever
```

* In this case, we cannot change the dog name by calling changeDog() function.
* This is because, variable dog holds a primitive type.
* And only a copy of dog is sent to changeDog() function. So any changes that occurs within changeDog() to the variable doesent affect the dog variable which is there in the outerscope.



[Home](../README.md) | [<< Previous](compilations-vs-polyfilling.md) | [Next >>](rest-operators.md)
