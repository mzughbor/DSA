
console.log("\n\n-------------------// Print Numbers 1 to 10 //----------");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("--------------------------------------------------------");


console.log("\n\n-----------------// Print Reverse Numbers //------------");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("--------------------------------------------------------");


console.log("\n\n--------------// Print Even Numbers //------------------");
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("--------------------------------------------------------");


console.log("\n\n---------------// Print Odd Numbers // -----------------");
for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
console.log("--------------------------------------------------------");


console.log("\n\n--------// Print Sum of numbers from 1 to 10 //---------");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(sum);
}
console.log("--------------------------------------------------------");


console.log("\n\n-----// Print FizzBuzz for numbers from 1 to 30 //------");
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("--------------------------------------------------------");

