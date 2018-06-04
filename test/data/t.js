import {dimensionTree} from '../../src/dimension.plus.js'
import labelProcesser from '../../src/label.js'
import {data} from './evaluate.js'

console.log('test start')
let ans = dimensionTree({rawData: data, dimensions: ['TYPE3', 'TYPE4', 'TYPE5']})
console.log('test end')
console.log(ans.size())
