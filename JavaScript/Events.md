[Home](../README.md) | [<< Previous](pass-by-value-and-pass-by-reference.md) | [Next >>](variable-hoisting.md)



# Difference Between Event Bubbling and Capturing

**Event Capturing**
* When we click on an HTML element which is nested inside other elements, the event gets captured from Root (window) -> target element - This is called event capturing phase or Phase 1
* So if we have attached event listeners in the elements between, all those event listeners would have been called.

**Event Bubbling**
* Once the event reaches target element, the event doesnt stop. It propogates towards root element - This is called event bubbling phase or Phase 1

So all the elements in event path will get notified twice when an event is fired.
When we add an event listener we can choose which phase we want to listen to
If we dont specify anything, by default, the event listener listens to event bubbling phase.

**stopPropagation()** - Stops the event from continuing either in phase 1 or phase 2.<br>
**preventDefault()**  - Doesn't prevent phase 1. It prevents the default behaviour on an element.
