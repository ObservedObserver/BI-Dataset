import labelProcesser from './label.js'
import dimensionMixer from './dimension.js'
import matrixProducer from './matrix.js'
class Core {
  constructor ({rawData, xlabels, ylabels}) {
    this.rawData = rawData
    this.xlabels = xlabels
    this.ylabels = ylabels
  }
  transLabel () {
    let {dimensions, measures} = labelProcesser({xlabels, ylabels})
    this.dimensions = dimensions
    this.measures = measures
  }
  transDimension () {
    // 默认度量维度均存在
    if (typeof this.dimensions !== 'undefined' && typeof this.measures !=='undefined') {
      this.mixDim = dimensionMixer({rawData, dimensions: this.dimensions, measures: this.measures})
    } else {
      throw 'dimensions or measures not defined, you must use transLabel()to get it'
    }
  }
  transData () {
    if (typeof this.matrixProducer !== 'undefined') {
      this.data = matrixProducer({rawData, mixDim: this.mixDim})
    } else {
      throw 'mixDim not defined, you must use transDimension to get it.'
    }
  }
}

export default Core
