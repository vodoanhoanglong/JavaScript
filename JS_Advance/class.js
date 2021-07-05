// cách 1 dùng prototype
// function Mouse(name)
// {
//     this.name = name;
// }
// Mouse.prototype.run = function()
// {
//     console.log(`${this.name}`);
// }


// cách 2 dùng class
class Mouse {
    constructor(name)
    {
        this.name = name;
    }
    run()
    {
        console.log(`${this.name}`);
    }
}


const mouse = new Mouse('Long');
mouse.run();