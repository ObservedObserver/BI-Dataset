var dimensionStatistic = (rawData, dimensions) => {
  let result = []
  dimensions.forEach((dim) => {
    let set = new Set()
    rawData.forEach((val) => {
      set.add(val[dim])
    })
    result.push([...set])
  })
  return result
}

var dimensionMultiply = (dimX, dimY) => {
  let result = []
  for (let dimXItem of dimX) {
    for (let dimYItem of dimY) {
      if (Array.isArray(dimXItem)) {
        result.push([...dimXItem, dimYItem])
      } else {
        result.push([dimXItem, dimYItem])
      }
    }
  }
  return result
}
/**
 * @param {Array} rawData
 * @param {Array} dimensions
 * @param {Array} measures
 * @return {Array} [matrix of mixed dimensions]
 */
var dimensionMixer = ({rawData, dimensions, measures}) => {
  let stat = dimensionStatistic(rawData, dimensions)
  let result = stat[0]
  for (let i = 1; i < stat.length; i++) {
    result = dimensionMultiply(result, stat[i])
  }
  result.unshift([...dimensions])
  return result
}
export {dimensionStatistic, dimensionMultiply}
export default dimensionMixer
