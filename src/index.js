import labelProcesser from './label.js'
import dimensionMixer from './dimension.js'
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
  let {result, lowerresult} = dimensionMixer({rawData, dimensions})
  return {mixDim: result, lowerMixDim: lowerresult}
}
var transData = ({rawData, measures, mixDim = [], statFunc}) => {
  return matrixProducer({rawData, mixDim, measures, statFunc})
}

export {filterData, transLabel, transDimension, transData}
