var DT_SUM = ({rawData, dimensions, measures}) => {
  // console.log(dimensions)
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
        node.set(dim, node.get(dim).map((val, index) => val + parseFloat(item[measures[index]])))
        // node.set(dim, node.get(dim).map((val, index) => val + item[measures[index]]))
      }
    }
  })
  return tree
}

var DT_COUNT = ({rawData, dimensions, measures = []}) => {
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
          node.set(dim, measures.map(val => 0))
        }
        node.set(dim, node.get(dim).map((val) => val + 1))
      }
    }
  })
  return tree
}

var DT_AVG = ({rawData, dimensions, measures = []}) => {
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
          node.set(dim, [0].concat(measures.map(val => 0)))
        }
        // node.set(dim, node.get(dim) + 1)
        node.set(dim, [node.get(dim)[0] + 1].concat(node.get(dim).slice(1).map((val, index) => val + parseFloat(item[measures[index]]))))
      }
    }
  })
  let queue = []
  queue.push(['root', tree])
  while (queue.length !== 0) {
    node = queue.pop()
    let children = node[1].entries()
    for (let child of children) {
      // throw child[1]
      if (child[1] instanceof Map) {
        queue.push(child)
      } else {
        node[1].set(child[0], child[1].slice(1).map(val => val / child[1][0]))
      }
    }
  }
  return tree
}

export {DT_SUM, DT_COUNT, DT_AVG}
