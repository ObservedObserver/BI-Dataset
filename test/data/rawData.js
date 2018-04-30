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
  [ 'Alice', 'Beijing', 98 ],
  [ 'Alice', 'Hangzhou', 98 ],
  [ 'Alice', 'Suzhou', 98 ],
  [ 'Alice', 'Zhengzhou', 98 ],
  [ 'Bob', 'Shanghai', 98 ],
  [ 'Bob', 'Beijing', 90 ],
  [ 'Bob', 'Hangzhou', 90 ],
  [ 'Bob', 'Suzhou', 90 ],
  [ 'Bob', 'Zhengzhou', 90 ],
  [ 'Jack', 'Shanghai', 98 ],
  [ 'Jack', 'Beijing', 47 ],
  [ 'Jack', 'Hangzhou', 20 ],
  [ 'Jack', 'Suzhou', 32 ],
  [ 'Jack', 'Zhengzhou', 12 ],
  [ 'Faker', 'Shanghai', 98 ],
  [ 'Faker', 'Beijing', 47 ],
  [ 'Faker', 'Hangzhou', 20 ],
  [ 'Faker', 'Suzhou', 32 ],
  [ 'Faker', 'Zhengzhou', 20 ] ]
export {rawData, dimenStatData, mixerData, matrixData}
