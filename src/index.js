import labelProcesser from './label.js'
import {dimensionValueSet, dimensionMixer} from './dimension.js'
import {dimensionTree, tree2Matrix} from './dimension.plus.js'
import matrixProducer from './matrix.js'
import filterData from './filter.js'
// filterData ({rawData, filters}) {
//   return filterData({rawData, filters})
// }
var transLabel = ({xlabels, ylabels}) => {
  let {dimensions, measures} = labelProcesser({xlabels, ylabels})
  return {dimensions, measures}
}
var transDimension = ({dimensions = [], rawData}) => {
  let {result} = dimensionMixer({rawData, dimensions})
  return {mixDim: result}
}
var transData = ({rawData, measures, mixDim = [], statFunc}) => {
  return matrixProducer({rawData, mixDim, measures, statFunc})
}

var dataTree = ({rawData, dimensions, measures, statFunc}) => {
  return dimensionTree({rawData, dimensions, measures})
}


export {filterData, transLabel, transDimension, transData, dimensionValueSet, dataTree, tree2Matrix}
