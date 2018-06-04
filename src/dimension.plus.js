var dimensionTree = ({rawData, dimensions}) => {
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
          node.set(dim, 0)
        }
        node.set(dim, node.get(dim) + 1)
      }
    }
  })
  return tree
}

var dfs = function (node, row, ans) {
  if (typeof node === 'number') {
    row.push(node)
    ans.push([...row])
    row.pop()
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
export {dimensionTree, tree2Matrix}
