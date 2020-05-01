## Factory Design Pattern

* Object creational pattern
* When Object creation logic become too sophisticated.
* Initializer is not descriptive - When there is chance that the initializer can turn into a 'optional parameter hell'
* Wholesale object creation (non-piecewise, unlike Builder) can be outsourced to
  * A separate method (Factory Method)
  * That may exist in a seprate class (Factory)
  * Can create hierarchy of factories (Abstract Factory)
  
### Definition
A component responsible solely for the wholesale (not piecewise) creation fo objects.
