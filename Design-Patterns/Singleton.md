## Singleton Pattern
* Ensure a class has only one instance, and provide a global point of access to it.
* Encapsulated "just-in-time initialization" or "initialization on first use".
* Single object, which is shared among multiple places.

#### Drawback of Singletons
* Since singletons are global to the application, it is kind of similar to having a global variable.
* It could create tight coupling as most part of the application could be depending on the single object.
* We can run into race condition. For example: Changing data in singleton from various parts of application may override the information incorrectly.
