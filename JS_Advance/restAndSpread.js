//...rest
function sum(...nums)
{
    return nums.reduce((a, b) => a + b, 0)
}
console.log(sum(1,2,3,4,5));

function concat(separator, ...strings)
{
    return strings.join(separator);
}
console.log(concat('.', 'a', 'b', 'c'));

//...spread

const a = [1,2,3];
function sum(...numbers)
{
    return numbers.reduce((a, b) => a + b, 0)
}
console.log(sum(...a));