let numbers = process.argv.slice(2).map((number) => parseFloat(number))
let result = numbers.reduce((prev, curr) => prev + curr)

console.log(result)