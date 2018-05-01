const rawData = [
  {
    name: 'Alice',
    city: 'Shanghai',
    value: 98
  },
  {
    name: 'Bob',
    city: 'Shanghai',
    value: 90
  },
  {
    name: 'Alice',
    city: 'Beijing',
    value: 47
  },
  {
    name: 'Bob',
    city: 'Beijing',
    value: 56
  },
  {
    name: 'Alice',
    city: 'Hangzhou',
    value: 20
  },
  {
    name: 'Bob',
    city: 'Hangzhou',
    value: 78
  },
  {
    name: 'Bob',
    city: 'Suzhou',
    value: 32
  },
  {
    name: 'Jack',
    city: 'Shanghai',
    value: 12
  },
  {
    name: 'Faker',
    city: 'Zhengzhou',
    value: 20
  }
]
const dimenStatData = [
  [ 'Alice', 'Bob', 'Jack', 'Faker' ],
  [ 'Shanghai', 'Beijing', 'Hangzhou', 'Suzhou', 'Zhengzhou' ]
]
const mixerData = [
  [ 'name', 'city' ],
  [ 'Alice', 'Shanghai' ],
  [ 'Alice', 'Beijing' ],
  [ 'Alice', 'Hangzhou' ],
  [ 'Alice', 'Suzhou' ],
  [ 'Alice', 'Zhengzhou' ],
  [ 'Bob', 'Shanghai' ],
  [ 'Bob', 'Beijing' ],
  [ 'Bob', 'Hangzhou' ],
  [ 'Bob', 'Suzhou' ],
  [ 'Bob', 'Zhengzhou' ],
  [ 'Jack', 'Shanghai' ],
  [ 'Jack', 'Beijing' ],
  [ 'Jack', 'Hangzhou' ],
  [ 'Jack', 'Suzhou' ],
  [ 'Jack', 'Zhengzhou' ],
  [ 'Faker', 'Shanghai' ],
  [ 'Faker', 'Beijing' ],
  [ 'Faker', 'Hangzhou' ],
  [ 'Faker', 'Suzhou' ],
  [ 'Faker', 'Zhengzhou' ]
]
const matrixData = [ [ 'name', 'city', 'value' ],
  [ 'Alice', 'Shanghai', 98 ],
  [ 'Alice', 'Beijing', 47 ],
  [ 'Alice', 'Hangzhou', 20 ],
  [ 'Alice', 'Suzhou', 0 ],
  [ 'Alice', 'Zhengzhou', 0 ],
  [ 'Bob', 'Shanghai', 90 ],
  [ 'Bob', 'Beijing', 56 ],
  [ 'Bob', 'Hangzhou', 78 ],
  [ 'Bob', 'Suzhou', 32 ],
  [ 'Bob', 'Zhengzhou', 0 ],
  [ 'Jack', 'Shanghai', 12 ],
  [ 'Jack', 'Beijing', 0 ],
  [ 'Jack', 'Hangzhou', 0 ],
  [ 'Jack', 'Suzhou', 0 ],
  [ 'Jack', 'Zhengzhou', 0 ],
  [ 'Faker', 'Shanghai', 0 ],
  [ 'Faker', 'Beijing', 0 ],
  [ 'Faker', 'Hangzhou', 0 ],
  [ 'Faker', 'Suzhou', 0 ],
  [ 'Faker', 'Zhengzhou', 20 ] ]
export {rawData, dimenStatData, mixerData, matrixData}
