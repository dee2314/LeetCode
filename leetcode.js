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

/**Given an integer n, return a counter function. 
 * This counter function initially returns n and then returns 
 * 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). */

//SOLUTIONS

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};
 
//Other Option using Class
/*class Counter {
    constructor(n){
        this.n =n;
    }

    increment(){
        return this.n++;
    }
}

const counter =  Counter(10)
counter.incrment() //11

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
 