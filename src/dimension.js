var dimensionStatistic = (rawData, dimensions) => {
  let result = []
  dimensions.forEach((dim) => {
    let set = new Set()
    rawData.forEach((val) => {
      set.add(val[dim])
    })
    result.push([...set])
  })
  // console.log('dimensionStatistic[result]?', result)
  if (result.length > 0) {
    result[0] = result[0].map((val) => {
      return [val]
    })
  }
  return result
}

var dimensionValueSet = ({rawData = [], dimensions = []}) => {
  let result = {}
  dimensions.forEach((dim) => {
    let set = new Set()
    rawData.forEach((val) => {
      set.add(val[dim])
    })
    result[dim] = set
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
 * @return {Array} [matrix of mixed dimensions]
 */
var dimensionMixer = ({rawData, dimensions = []}) => {
  let result = []
  let lowerresult = []
  if (dimensions.length === 0) {
    return {result, lowerresult}
  }
  let stat = dimensionStatistic(rawData, dimensions)
  result = stat[0]
  if (dimensions.length === 1) {
    result.unshift([...dimensions])
    return {result, lowerresult}
  }
  let lowerstat = dimensionStatistic(rawData, dimensions.slice(1)) //[]
  lowerresult = lowerstat[0] //undefined
  // stat.length === dimensions.length
  for (let i = 1; i < stat.length; i++) {
    result = dimensionMultiply(result, stat[i])
  }
  // lowerstat.length === dimensions.length - 1
  for (let i = 1; i < lowerstat.length; i++) {
    lowerresult = dimensionMultiply(lowerresult, lowerstat[i])
  }
  result.unshift([...dimensions])
  lowerresult.unshift(dimensions.slice(1))
  return {result, lowerresult}
}
export {dimensionValueSet, dimensionMixer}
