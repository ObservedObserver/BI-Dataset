import {DT_SUM, DT_COUNT, DT_AVG} from './util/dimension.util.js'
var dimensionTree = ({rawData, dimensions, measures = [], statFunc = 'sum'}) => {

  switch (statFunc) {
    case 'sum':
      return DT_SUM({rawData, dimensions, measures})
    case 'count':
      return DT_COUNT({rawData, dimensions, measures})
    case 'average':
      return DT_AVG({rawData, dimensions, measures})
  }
}

var dfs = function (node, row, ans) {
  if (Array.isArray(node)) {
    row.push(...node)
    ans.push([...row])
    row.length -= node.length
  } else {
    let _keys = [...node.keys()]
    _keys.forEach((_key) => {
      row.push(_key)
      dfs(node.get(_key), row, ans)
      row.pop()
    })
  }
}

var tree2Matrix = ({tree}) => {
  let ans = []
  dfs(tree, [], ans)
  return ans
}

var transTree = function (btree) {
  let ltree = {
    label: 'root',
    children: []
  }
  let lqueue = []
  let bqueue = []
  lqueue.push(ltree)
  // bqueue.push(btree)
  bqueue.push(['root', btree])
  while (lqueue.length !== 0) {
    let bnode = bqueue.shift()
    // console.log('bnode', bnode)
    let lnode = lqueue.shift()
    lnode.label = bnode[0]
    // throw bnode[1].entries()
    if (bnode[1] instanceof Map) {
      lnode.children = []
      let bchildren = bnode[1].entries()
      for (let bchild of bchildren) {
        let lchild = {}
        lqueue.push(lchild)
        bqueue.push(bchild)
        lnode.children.push(lchild)
      }
    }
  }
  return ltree
}
var transTreeDFS = function ({bnode, lnode, measures = [], level}) {
  // lnode.label = bnode[0]
  try {
    lnode.label = bnode[0]
  } catch (e) {
    throw [bnode, lnode, level, measures]
  } finally {
  }
  lnode.level = level
  if (bnode[1] instanceof Array) {
    lnode.value = bnode[1]
    return lnode
  }
  if (bnode[1] instanceof Map) {
    lnode.children = []
    lnode.value = []
    let bchildren = bnode[1].entries()
    for (let bchild of bchildren) {
      let lchild = {}
      lnode.children.push(transTreeDFS({
        bnode: bchild,
        lnode: lchild,
        measures,
        level: level + 1
      }))
    }
    lnode.value = measures.map(val => 0)

    for (let i = 0; i < lnode.children.length; i++) {
      for (let j = 0; j < measures.length; j++) {
        lnode.value[j] += lnode.children[i].value[j]
      }
    }
    return lnode
  }
}
export {dimensionTree, tree2Matrix, transTree, transTreeDFS}
