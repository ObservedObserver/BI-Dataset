# BI-Dataset
A data set tool for building BI visulization app.
## API
### filterData
**filterData** is used to filter the data with several conditions.
+ params:
  + `filters`: [Array]; an array contains all the filters, each filter can be type of **equal** or **range**
  + `rawData`: [Array]; an array contains all the origin data in json like format.

```js
let rawData = [{value: 12, name: 'Alice'}, {value: 98, name: 'Bob'}, {value: 32, name: 'Carl'}]
let filters = [
        {
          column: 'value',
          type: 'equal',
          value: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
        },
        {
          column: 'value',
          type: 'range',
          value: [10, 98]
        }
]
let viewData = filterData({filters: state.filters, rawData: state.globalData})
```

### dimensionValueSet
**dimensionValueSet** is used to get all the possible value of given dimension or measure.
+ `rawData`: [Array]
+ `dimensions`: [Array]: dimensions or measurs.

### transLabel
turn the labels in xAxis and yAxis into dimension labels and measure labels.
+ params:
  + `xlabels`: [Array]; an array contains all the labels in xAxis
  + `ylabels`: [Array]; an array contains all the labels in yAxis
+ Return
  + [Object]: {dimensions, measures}
  + dimensions and measures are arrays contains the name of each column.

```js
let xLabels = [{type: 'string', name: 'city'}, {type: 'number', name: 'value'}]
let yLabels = []
let {dimensions, measures} = transLabel({xLabels, yLabels})
```

### transDimension
check all the possible values in each dimension.
+ Params
  + `dimensions`: [Array], an array contains all the column of dimension data.
  + `rawData`: [Array], an array contains all the data, each row of it is in a dictionary format.
+ Return
  + [Object]: {mixDim, lowerMixDim}

```js
mixDim = [
  ['name', 'city'],
]
```

### transData
+ Params:
  + `rawData`: [Array]
  + `measures`: [Array]: an array contains all the measures column
  + `mixDim`: [Array]: an mixed dimension matrix get from **transDimension**
  + `statFunc`: [Function]: provide a function used to get sum or average of all the values.
+ Return
  + [Array]: Result
