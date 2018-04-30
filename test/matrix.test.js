require('babel-register')
import matrixProducer from '../src/matrix.js'
const assert = require('assert')
import {rawData, dimenStatData, mixerData, matrixData} from './data/rawData.js'
// import testAns from './data/dimension-test.data.js'
describe('matrix.js', () => {
  describe('[function]matrixProducer', () => {
    it('case1', () => {
      assert.deepEqual(matrixProducer({
        rawData,
        mixDim: mixerData,
        measures: ['value']
      }), matrixData)
    })
  })
})
