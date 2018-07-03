interface QuerySliceTree {
    rawData: Array<any>,
    dimensions: Array<string>,
    measures: Array<string>
}
declare const SliceTree:Map<string|number, any>

const DT_SUM: ({
    rawData,
    dimensions, 
    measures
}: QuerySliceTree) => typeof SliceTree = ({
    rawData,
    dimensions, 
    measures
}: QuerySliceTree): typeof SliceTree => {
    let sliceTree: typeof SliceTree = new Map()
    let node: typeof SliceTree = sliceTree
    rawData.forEach((item:any, index:number, arr:Array<any>):void => {
        for (let i:number = 0, len:number = dimensions.length; i < len; i++) {
            let dim:string|number = item[dimensions[i]]
            if (i < dimensions.length - 1) {
                // 非叶子节点
                if (!node.has(dim)) {
                    node.set(dim, new Map())
                }
                node = node.get(dim)
            } else {
                // 叶子节点
                if (!node.has(dim)) {
                    node.set(dim, measures.map((val:string):number => 0))
                }
                node.set(dim, node.get(dim).map((val:number, index:number):number => val + parseInt(item[measures[index]])))
            }
        }
    })
    return sliceTree
}

const DT_COUNT: ({
    rawData,
    dimensions, 
    measures
}: QuerySliceTree) => typeof SliceTree = ({
    rawData,
    dimensions, 
    measures
}: QuerySliceTree): typeof SliceTree => {
    let sliceTree: typeof SliceTree = new Map()
    let node: typeof SliceTree = sliceTree
    rawData.forEach((item:any, index:number, arr:Array<any>):void => {
        for (let i:number = 0, len:number = dimensions.length; i < len; i++) {
            let dim:string|number = item[dimensions[i]]
            if (i < dimensions.length - 1) {
                // 非叶子节点
                if (!node.has(dim)) {
                    node.set(dim, new Map())
                }
                node = node.get(dim)
            } else {
                // 叶子节点
                if (!node.has(dim)) {
                    node.set(dim, measures.map((val:string):number => 0))
                }
                node.set(dim, node.get(dim).map((val:number, index:number):number => val + 1))
            }
        }
    })
    return sliceTree
}

const DT_AVG: ({
    rawData,
    dimensions, 
    measures
}: QuerySliceTree) => typeof SliceTree = ({
    rawData,
    dimensions, 
    measures
}: QuerySliceTree): typeof SliceTree => {
    let sliceTree: typeof SliceTree = new Map()
    let node: typeof SliceTree = sliceTree
    rawData.forEach((item:any, index:number, arr:Array<any>):void => {
        for (let i:number = 0, len:number = dimensions.length; i < len; i++) {
            let dim:string|number = item[dimensions[i]]
            if (i < dimensions.length - 1) {
                // 非叶子节点
                if (!node.has(dim)) {
                    node.set(dim, new Map())
                }
                node = node.get(dim)
            } else {
                // 叶子节点
                if (!node.has(dim)) {
                    node.set(dim, [0].concat(measures.map((val:string):number => 0)))
                }
                node.set(dim, [node.get(dim)[0] + 1].concat(node.get(dim).slice(1).map((val:number, index:number):number => val + parseFloat(item[measures[index]]))))
            }
        }
    })
    return sliceTree
}