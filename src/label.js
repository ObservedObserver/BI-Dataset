/**
 * @param {Array} xlabels [array contains label object of x axis]
 * @param {Array} ylabels [array contains label object of y axis]
 * @return {Object} [dimensions and measures]
 */
var labelProcessers = ({xlabels, ylabels}) => {
  let dimensions = []
  let measures = []

  xlabels.forEach((val) => {
    val.type === 'String' ? dimension.push(val) : measures.push(val)
  })

  ylabels.forEach((val) => {
    val.type === 'String' ? dimension.push(val) : measures.push(val)
  })

  return {dimensions, measures}
}

export default labelProcesser
