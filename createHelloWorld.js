/** Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 */

//SOLUTION
/**
 * @return {Function}
 */

const createHelloWorld = function() {
    return function (...args) {
    return "Hello World";
}
}

const a = createHelloWorld();

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */