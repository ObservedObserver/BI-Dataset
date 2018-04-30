/**
 * @param {Array} rawData
 * @param {Array} mixDim
 * @return {Array} [dataset]
 */
var matrixProducer = ({rawData, mixDim, measures}) => {
  // let _length = mixDim[0].length
  let result = mixDim
  result[0].push(...measures)
  for (let i = 1; i < mixDim.length; i++) {
    let pos = rawData.findIndex((item) => {
      return mixDim[i].some((val, index) => {
        // console.log(val, item[mixDim[0][index]])
        return val === item[mixDim[0][index]]
      })
      // let flag = true
      // mixDim[i].forEach((val, index) => {
      //   if (val !== item[mixDim[0][index]]) {
      //     flag = false
      //   }
      // })
      // return flag
    })
    // pos = 2
    if (pos !== -1) {
      // result[i].push([])
      measures.forEach((meas) => {
        result[i].push(rawData[pos][meas])
      })
    }
  }
  return result
}
export default matrixProducer
