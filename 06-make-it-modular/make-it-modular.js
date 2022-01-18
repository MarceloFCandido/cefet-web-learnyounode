const mymodule = require('./mymodule')

const dir = process.argv[2]
const extension = process.argv[3]

function callback(err, list = []) {
  if (err) {
    throw new Error(err)
  }

  list.forEach((element) => console.log(element));
}

mymodule(dir, extension, callback)