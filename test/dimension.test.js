require('babel-register')
import dimensionMixer from '../src/dimension.js'
import {dimensionStatistic} from '../src/dimension.js'
const assert = require('assert')
import {rawData, dimenStatData, mixerData} from './data/rawData.js'
// import testAns from './data/dimension-test.data.js'
describe('dimension.js', () => {
  describe('[function]dimensionStatistic', () => {
    it('case1', () => {
      assert.deepEqual(dimensionStatistic(
        rawData,
        ['name', 'city']
      ), dimenStatData)
    })
    // 测试dimensionMixer
  })
  describe('[function]dimensionMixer', () => {
    // 测试dimensionMixer
    it('case1', () => {
      assert.deepEqual(dimensionMixer({
        rawData,
        dimensions: ['name', 'city'],
        measures: ['value']
      }), mixerData)
    })
  })
})
