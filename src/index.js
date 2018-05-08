import labelProcesser from './label.js'
import dimensionMixer from './dimension.js'
import matrixProducer from './matrix.js'
import filterData from './filter.js'
class Core {
  constructor ({rawData, xlabels, ylabels}) {
    this.rawData = rawData
    this.viewData = rawData
    this.xlabels = xlabels
    this.ylabels = ylabels
  }
  filterData ({filters}) {
    this.viewData = filterData({rawData: this.rawData, filters})
  }
  transLabel () {
    let {dimensions, measures} = labelProcesser({xlabels: this.xlabels, ylabels: this.ylabels})
    this.dimensions = dimensions
    this.measures = measures
  }
  transDimension () {
    // 默认度量维度均存在
    if (typeof this.dimensions !== 'undefined' && typeof this.measures !=='undefined') {
      let {result, stat, lowerresult} = dimensionMixer({rawData: this.viewData, dimensions: this.dimensions, measures: this.measures})
      console.log('transDimension', {result, stat, lowerresult})
      this.mixDim = result
      this.lowerMixDim = lowerresult
      this.stat = stat
    } else {
      throw 'dimensions or measures not defined, you must use transLabel()to get it'
    }
  }
  transData ({statFunc}) {
    if (typeof this.mixDim !== 'undefined') {
      this.data = matrixProducer({rawData: this.viewData, mixDim: this.mixDim, measures: this.measures, statFunc})
    } else {
      throw 'mixDim not defined, you must use transDimension to get it.'
    }
  }
}

export default Core
