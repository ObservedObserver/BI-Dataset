import deepcopy from 'deepcopy'
/**
 * @param {Array} rawData
 * @param {Array} mixDim
 * @return {Array} [dataset]
 */
var matrixProducer = ({rawData, mixDim, measures, statFunc}) => {
  // let _length = mixDim[0].length
  if (mixDim.length === 0) {
    return []
  }
  if (measures.length === 0) {
    return mixDim
  }
  let result = deepcopy(mixDim)
  let dimLen = mixDim[0].length
  result[0].push(...measures)
  for (let i = 1; i < mixDim.length; i++) {

    let items = rawData.filter((item) => {
      return mixDim[i].every((val, index) => {
        return val === item[mixDim[0][index]]
      })
    })

    if (typeof statFunc !== 'undefined') {
      // console.log('statFunc', statFunc)
      let statResult = statFunc({data: items, measures})
      measures.forEach((meas, index) => {
        result[i].push(statResult[meas])
      })
    } else {
      // console.log('stat func is not defined.')
      measures.forEach((meas) => {
        result[i].push(0)
      })
      measures.forEach((meas, index) => {
        items.forEach((item) => {
          result[i][dimLen + index] += item[meas]
        })
      })
    }

  }
  return result
}
export default matrixProducer
