class Animal {
    constructor(name) {
        this.name = name;
    }
    eat()
    {
        console.log('Eating');
    }
}

class Bird extends Animal
{
    fly()
    {
        console.log('Flying');
    }
}

const bird = new Bird('Long');
bird.eat();