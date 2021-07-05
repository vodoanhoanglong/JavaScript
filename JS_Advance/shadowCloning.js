const obj1 = {
    a: 1,
    b:2,
    c: 3,
    d: { e: 10 }
}

// use ...spread
let obj2 = {
    ...obj1,
    z: 1000
}

console.log(obj2);