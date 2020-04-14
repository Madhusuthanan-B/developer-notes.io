[Home](../README.md) | [<< Previous](compilations-vs-polyfilling.md) | [Next >>](rest-operators.md)



# Pass by value and Pass by reference

In JavaScript all the primitive types are passed by value (strings, numbers and booleans) and objects are passed by reference.

#### Pass by value
If we change the value of the primitive type which is passed into a function, then any changes to this variable within the function, will not affect the variable in the outerscope.

In this case only a copy of the variable is passed into the function.

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

#### Pass by reference
* When we pass a value by reference, we are not passing a copy.
* Instead, the value which we pass, actually points to the orginal value.
* So, any changes made to this value within the function, affects the original value.

Non primitive types like Objects are passed as reference.


Example 1:
```js
var dog = {};

function changeDog(dog) {
  dog.name = 'Pug'
}

changeDog(dog);
console.log(dog);  // { name: 'Pug'}
```
* In this case, when we change a property of dog, we are actually changing the dog object in outerscope.

**Does this mean that, we can change what dog is pointing to? Lets see that with the example below**

Example 2:
```js
var dog = { name: 'Retriever' };

function changeDog(dog) {
  dog =  { name: 'Pug' };
}

changeDog(dog);
console.log(dog);  // { name: 'Retriever'}
```
* In this case, when we are actually trying to change what dog is pointing to within changeDog().
* This is not possible. We can only add / change a property of the object that is passed.



[Home](../README.md) | [<< Previous](compilations-vs-polyfilling.md) | [Next >>](rest-operators.md)
