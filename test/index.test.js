require('babel-register')
// import dimensionMixer from '../src/dimension.js'
import {dimensionStatistic, dimensionMixer} from '../src/dimension.js'
const assert = require('assert')
// import {rawData, dimenStatData, mixerData} from './data/rawData.js'
// import {data as rawData} from './data/evaluate.js'
// import testAns from './data/dimension-test.data.js'

import {dimensionTree, tree2Matrix, transTree, transTreeDFS} from './../src/dimension.plus.js'
import labelProcesser from './../src/label.js'
import {data} from './data/evaluate.js'

let rawData = data.slice(0, 100)

describe('dimension', () => {
  describe('[function]dimensionTree', () => {
    it('case1', () => {
      console.log('===test start===')
      let ans = dimensionTree({rawData, dimensions: ['TYPE3', 'TYPE4', 'TYPE5'], statFunc: 'average'})
      console.log('===test end===')
      // console.log(ans)
      assert.equal(ans.size > 0, true)
    })
    // 测试dimensionMixer
  })
  describe('[function]dimensionTree', () => {
    it('case2', () => {
      console.log('===test start===')
      let tree = dimensionTree({rawData, dimensions: ['TYPE3', 'TYPE4', 'TYPE5'], measures: ['LEVEL', 'MON']})
      console.log(tree.entries())
      let ans = tree2Matrix({tree})
      console.log('===test end===')
      // console.log(ans)
      assert.equal(ans.length > 0, true)
    })
    // 测试dimensionMixer
  })
  describe('[function]dimensionTree', () => {
    it('case3', () => {
      console.log('===test start===')
      let tree = dimensionTree({rawData, dimensions: ['TYPE3', 'TYPE4', 'TYPE5'], measures: ['LEVEL', 'MON']})
      let ans = transTree(tree)
      console.log('===test end===')
      // console.log(ans.children[0].children[0])
      assert.equal(ans.children.length > 0, true)
    })
    // 测试dimensionMixer
  })

  describe('[function]dimensionTree', () => {
    it('case4', () => {
      console.log('===test start===')
      let tree = dimensionTree({rawData, dimensions: ['TYPE3'], measures: ['LEVEL', 'MON'], statFunc: 'average'})
      let ans = transTreeDFS({bnode: ['root', tree], lnode: {label: 'root', children: []}, measures: ['LEVEL', 'MON'], level: 0})
      console.log('===test end===')
      console.dir(tree)
      assert.equal(ans.children.length > 0, true)
    })
    // 测试dimensionMixer
  })
  // describe('[function]dimensionMixer', () => {
  //   it('case1', () => {
  //     console.log('===test start===')
  //     let ans = dimensionMixer({rawData: data, dimensions: ['TYPE3', 'TYPE4', 'TYPE5']})
  //     console.log('===test end===')
  //     assert.equal(ans.result.length > 0, true)
  //   })
    // 测试dimensionMixer
  // })

})
