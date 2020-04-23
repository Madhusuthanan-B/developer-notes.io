[Home](../README.md) | [<< Previous](this keyword.md) | [Next >>](this keyword.md)



# What does this keyword mean in javascript?

* lets understand this by a simple example 
* what output would someone expect during console.log(this), well the answer is a window object
* so when i place a console.log(this) inside a 
function like function moo(){
console.log(this)
}
yay! its still window object, but this* is pointing to the global scope that is the reason why the window object is being logged
Does this* always point to global object? ofcourse No!



## Variable Hoisting

