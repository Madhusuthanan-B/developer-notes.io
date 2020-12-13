### Different ways to create tasks

1) Using Factory
  Task.Factory.StartNew()
2) Using new
Task t = new Task();
  t.Start();
  
### We can cancel a task using cancellation token

```csharp
var cts = new CancellationTokenSource();
var token = cts.Token;

var t = new Task(() => {
 int i = 0;
 while(true) {
 token.ThrowIfCancellationRequested();
 Console.WriteLine($"{i++}\t"); 
 }
}, token);
t.Start();
```

### How to create composite cancellation token in scenarios where there are multiple cancellation tokens?

We have to create a link situation

```csharp
var planned = new CancellationTokenSource();
var preventative = new CancellationTokenSource();
var emergency = new CancellationTokenSource();

var paranoid = CancellationTokenSource.CreateLinkedTokenSource(planned.Token, preventative.Token, emergency.Token);
```
