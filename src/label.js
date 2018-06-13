/**
 * @param {Array} xlabels [array contains label object of x axis]
 * @param {Array} ylabels [array contains label object of y axis]
 * @return {Object} [dimensions and measures]
 */
var labelProcesser = ({xlabels = [], ylabels = []}) => {
  let dimensions = []
  let measures = []

  let labels = xlabels.concat(ylabels)

  labels.forEach((label) => {
    switch (label.type) {
      case 'string':
        dimensions.push(label.name)
        break
      case 'number':
        measures.push(label.name)
        break
      case 'time':
        dimensions.push('year', 'month')
    }
  })

  return {dimensions, measures}
}

export default labelProcesser
