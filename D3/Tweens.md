### Arc Tween Example

In this below case, we want to do transition of each arc in anticlockwise direction.

```js
const arcPath = d3.arc()
    .outerRadius(dims.radius)
    .innerRadius(dims.radius / 2);
    
const arcTweenEnter = (d) => {
    var i = d3.interpolate(d.endAngle, d.startAngle);
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
    
const arcTweenEnter = (d) => {
    var i = d3.interpolate(d.startAngle, d.endAngle);
    return function(t) {
        d.endAngle = i(t);
        return arcPath(d);
    };
};
```
* For an anti-clock wise transition, the end angle will be fixed and start angle needs to be updated/transitioned.
* For a clock-wise transition, the start angle will be fixed and end angle needs to be updated/transitioned.
