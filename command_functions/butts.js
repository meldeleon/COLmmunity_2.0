//let origin = [{ test: 1 }, { test: 2 }]
let test = []

test = origin.map((x) => {
  return { ...x }
})

console.log(test)
