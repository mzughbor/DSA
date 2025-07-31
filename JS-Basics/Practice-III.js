function welcome() {
    console.log("Welcome to coding!");
}

welcome();
welcome();
console.log("\n\n--------------------------------------------------------");


function square(number) {
    number = number ** 2;
    return number;
}

console.log(square(3));
console.log(square(5));
console.log(square(4));
console.log("\n\n--------------------------------------------------------");


function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(convertToCelsius(70));
console.log("\n\n--------------------------------------------------------");


function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(4));
console.log(isEven(0));
