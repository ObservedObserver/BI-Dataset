var dimensionTree = ({rawData, dimensions, measures = []}) => {
  console.log(dimensions)
  let tree = new Map()
  let node = tree
  rawData.forEach((item, index, arr) => {
    node = tree
    for (let i = 0; i < dimensions.length; i++) {
      let dim = item[dimensions[i]]
      if (i !== dimensions.length - 1) {
        if (!node.has(dim)) {
          node.set(dim, new Map())
        }
        node = node.get(dim)
      } else {
        if (!node.has(dim)) {
          // node.set(dim, 0)
          node.set(dim, measures.map(val => 0))
        }
        // node.set(dim, node.get(dim) + 1)
        node.set(dim, node.get(dim).map((val, index) => val + item[measures[index]]))
      }
    }
  })
  return tree
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
var transTreeDFS = function (bnode, lnode, measures) {
  lnode.label = bnode[0]
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
      lnode.children.push(transTreeDFS(bchild, lchild, measures))
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
