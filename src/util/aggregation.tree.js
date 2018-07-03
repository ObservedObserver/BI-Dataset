const DT_SUM = ({ rawData, dimensions, measures }) => {
    let sliceTree = new Map();
    let node = sliceTree;
    rawData.forEach((item, index, arr) => {
        for (let i = 0, len = dimensions.length; i < len; i++) {
            let dim = item[dimensions[i]];
            if (i < dimensions.length - 1) {
                // 非叶子节点
                if (!node.has(dim)) {
                    node.set(dim, new Map());
                }
                node = node.get(dim);
            }
            else {
                // 叶子节点
                if (!node.has(dim)) {
                    node.set(dim, measures.map((val) => 0));
                }
                node.set(dim, node.get(dim).map((val, index) => val + parseInt(item[measures[index]])));
            }
        }
    });
    return sliceTree;
};
const DT_COUNT = ({ rawData, dimensions, measures }) => {
    let sliceTree = new Map();
    let node = sliceTree;
    rawData.forEach((item, index, arr) => {
        for (let i = 0, len = dimensions.length; i < len; i++) {
            let dim = item[dimensions[i]];
            if (i < dimensions.length - 1) {
                // 非叶子节点
                if (!node.has(dim)) {
                    node.set(dim, new Map());
                }
                node = node.get(dim);
            }
            else {
                // 叶子节点
                if (!node.has(dim)) {
                    node.set(dim, measures.map((val) => 0));
                }
                node.set(dim, node.get(dim).map((val, index) => val + 1));
            }
        }
    });
    return sliceTree;
};
const DT_AVG = ({ rawData, dimensions, measures }) => {
    let sliceTree = new Map();
    let node = sliceTree;
    rawData.forEach((item, index, arr) => {
        for (let i = 0, len = dimensions.length; i < len; i++) {
            let dim = item[dimensions[i]];
            if (i < dimensions.length - 1) {
                // 非叶子节点
                if (!node.has(dim)) {
                    node.set(dim, new Map());
                }
                node = node.get(dim);
            }
            else {
                // 叶子节点
                if (!node.has(dim)) {
                    node.set(dim, [0].concat(measures.map((val) => 0)));
                }
                node.set(dim, [node.get(dim)[0] + 1].concat(node.get(dim).slice(1).map((val, index) => val + parseFloat(item[measures[index]]))));
            }
        }
    });
    return sliceTree;
};
