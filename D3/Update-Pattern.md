## D3 Update Pattern

The below snippet explains update pattern in D3

```js
const update = (data) => {
// 1. Update the scales (domains) if they depend on our data
y.domain([0, d3.max(data, d => d.orders)]);

// 2. Join updated data to elements
const rects = graph.selectAll('rect').data(data);

// 3. Remove unwanted shapes using the exit selection
rects.exit().remove();

// 4. Update current shapes in the DOM
rects.attr(...etc);

// 5. Append the enter selection to the DOM
rects.enter().append('rect').attr(..etc);

// 6. Call axes if they exist
xAxisGroup.call(xAxis);
yAxisGroup.call(yAxis);
};
```
