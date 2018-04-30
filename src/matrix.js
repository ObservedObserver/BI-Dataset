/**
 * @param {Array} rawData
 * @param {Array} mixDim
 * @return {Array} [dataset]
 */
var matrixProducer = ({rawData, mixDim, measures}) => {
  // let _length = mixDim[0].length
  let result = []
  for (let i = 1; i < mixDim.length; i++) {
    let pos = rawData.find((item) => {
      return mixDim[i].every((val, index) => {
        val === item[mixDim[0][index]]
      })
    })
    if (typeof pos !== 'undefined') {
      result.push([])
      measures.forEach((meas) => {
        result[result.length - 1].push(rawData[pos][meas])
      })
    }
  }
  result.unshift(...measures)
}
export default matrixProducer
