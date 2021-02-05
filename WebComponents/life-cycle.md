## Web component life cycle

* **constructor** - When the element is created (During this time, the element is created in memory and not attached in DOM. Hence we cannot access DOM)
* **connectedCallback()** - When the custom element is attached to DOM, this method will be called
* **disconnectedCallback()** - When the custom element is detached from DOM (Do clean up work here)
* **attributeChangedCallback()** - When the attribute passed into component changes (Update data + DOM)
