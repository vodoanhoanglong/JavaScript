var module = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // expected output: undefined

const boundGetX = module.getX.bind(module);
console.log(boundGetX());
// expected output: 42