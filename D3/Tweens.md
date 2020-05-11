### Arc Tween

#### Arc Enter Tween

In this below case, we want to do transition of each arc in anticlockwise direction.

```js
const arcPath = d3.arc()
    .outerRadius(dims.radius)
    .innerRadius(dims.radius / 2);
    
const arcTweenAntiClockEnter = (d) => {
    var i = d3.interpolate(d.endAngle, d.startAngle);  // Read this like, go from endAngle to startAngle
    return function(t) {
        d.startAngle = i(t);
        return arcPath(d);
    };
};
```

In case if we want to do transition of each arc in clock wise direction, then refer the below snippet.

```js
const arcPath = d3.arc()
    .outerRadius(dims.radius)
    .innerRadius(dims.radius / 2);
    
const arcTweenClockWiseEnter = (d) => {
    var i = d3.interpolate(d.startAngle, d.endAngle);
    return function(t) {
        d.endAngle = i(t);
        return arcPath(d);
    };
};
```
* For an anti-clock wise transition, the end angle will be fixed and start angle needs to be updated/transitioned.
* For a clock-wise transition, the start angle will be fixed and end angle needs to be updated/transitioned.

#### Arc Exit Tween

Exit tween is for transitioning out - When we remove items/sections from a donut/pie chart.

```js
const arcTweenExitForAntiClockEnter = (d) => {
    var i = d3.interpolate(d.startAngle, d.endAngle); // Read this like, go from startAngle to EndAngle
    return function(t) {
        d.startAngle = i(t);
        return arcPath(d);
    };
};
```
