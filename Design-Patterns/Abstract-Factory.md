## Abstract Factory

* We can have hierarcy of objects and can have related hierarchy of types.
* Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
* We can group the factories and expose them as a list.
* A hierarchy that encapsulates: many possible "platforms", and the construction of a suite of "products".
* The new operator considered harmful.

[Reference](https://sourcemaking.com/design_patterns/abstract_factory)

We will take a look at this pattern using "Hot Drinks Machine" example below

```js
class HotDrink {
    consume() {}  // This acts as an abstract method
}

class Tea extends HotDrink {
    consume() {
        console.log('This tea is good with lemon!');
    }
}

class Coffee extends HotDrink {
    consume() {
        console.log('This coffee is delicious');
    }
}

// We will have hierarchy of factories

class HotDrinkFactory {
    prepare(amount) { /* abstract */ }
}

class TeaFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Put in tea bag, boil water, pour ${amount} ml`);
        return new Tea();
    }
}

class CoffeFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Grind some coffee, boil water, pour ${amount} ml`);
        return new Coffee();
    }
}

let AvailableDrink = Object.freeze({
    coffee: CoffeFactory,
    tea: TeaFactory
});

class HotDrinkMachine {

    constructor() {
        this.factories = {};
        for(let drink in AvailableDrink) {
            this.factories[drink] = new AvailableDrink[drink]();
        }
        console.log('Available drinks:', Object.keys(this.factories));
    }

    
    makeDrink(type) {
        return this.factories[type].prepare(200); 
    }
}

var hotDrinksMachine = new HotDrinkMachine();

```
