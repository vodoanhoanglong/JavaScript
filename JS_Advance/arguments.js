function sum()
{
    // arguments là tham số nhận vào có sẵn trong scope
    return Array.from(arguments).reduce((a, b) =>  a + b, 0)
}

console.log(sum(1,2,3,4,5,10,20));