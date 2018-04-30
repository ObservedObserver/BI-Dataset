require('babel-register');
// const labelProcesser = require('../src/label.js')
import labelProcesser from '../src/label.js'
console.log(labelProcesser)
const assert = require('assert')

describe('label.js', () => {
  describe('[function]labelProcesser', () => {
    it('case1', () => {
      assert.deepEqual(labelProcesser({
        xlabels: [{name: 'city', type: 'String'}, {name: 'score', type: 'Number'}],
        ylabels: [{name: 'name', type: 'String'}]
      }),
      {
        dimensions: ['city', 'name'],
        measures: ['score']
      })
    })
    it('case2', () => {
      assert.deepEqual(labelProcesser({
        xlabels: [{name: 'city', type: 'String'}, {name: 'score', type: 'Number'}],
        ylabels: [{name: 'name', type: 'String'}, {name: 'value', type: 'Number'}]
      }),
      {
        dimensions: ['city', 'name'],
        measures: ['score', 'value']
      })
    })
    it('case3', () => {
      assert.deepEqual(labelProcesser({
        xlabels: [{name: 'city', type: 'String'}],
        ylabels: [{name: 'name', type: 'String'}]
      }),
      {
        dimensions: ['city', 'name'],
        measures: []
      })
    })

    it('case4', () => {
      assert.deepEqual(labelProcesser({
        xlabels: [{name: 'score', type: 'Number'}],
        ylabels: [{name: 'value', type: 'Number'}]
      }),
      {
        dimensions: [],
        measures: ['score', 'value']
      })
    })

    it('case5', () => {
      assert.deepEqual(labelProcesser({
        xlabels: [],
        ylabels: []
      }),
      {
        dimensions: [],
        measures: []
      })
    })

  })
})
