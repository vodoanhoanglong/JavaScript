function greeting()
{
    console.log(`Hi ${this.name}. I'm ${this.age}`);
};
const cat = {
    name: 'Tom',
    age: '20'
};
// call: func.call(this, param1, param2, ...)
greeting.call(cat);

function greeting2(name, age)
{
    console.log(`Hi ${name}. I'm ${age}`);
};

greeting2.call(null, 'Dog', '30');