// apply: func.apply(this, [param1, param2, ...])
function sum()
{
    return Array.from(arguments).reduce((a, b) => a + b, 0);
}

function average()
{
    return sum.apply(null, arguments)/arguments.length;
}

console.log(average(1, 2, 3, 6));