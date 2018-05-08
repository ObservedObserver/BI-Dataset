var filterData = ({rawData, filters}) => {
  return rawData.filter((item) => {
    return filters.every((filter) => {
      if (filter.type === 'equal') {
        return filter.value.some((num) => {
          return item[filter.column] === num
        })
      } else {
        // if (filter.type === 'range')  or filter.type === undefined
        return item[filter.column] >= filter.value[0] && item[filter.column] <= filter.value[1]
      }
    })
  })
}

export default filterData
