const name = 'Long';
const dog = {
    name, // name: name
    run()
    {
        console.log(`${this.name} is running`);
    }
};
dog.run();