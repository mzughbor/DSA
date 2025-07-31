console.log("\n--------------------------------------------------------");
// 1. Accessing Elements
let colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(colors[1]);
colors[2] = "orange";
console.log(colors);
console.log("--------------------------------------------------------\n");


console.log("\n----numbers in order -----------------------------------");
// 2. Traversing an Array
let numbers2 = [10, 20, 30, 40, 50];
numbers2.forEach((number) => {
    console.log(number);
});
console.log("\n----numbers in reverse order --------------------------");
numbers2.reverse().forEach((number) => {
    console.log(number);
});
console.log("--------------------------------------------------------\n");


console.log("\n-------3. Searching in an Array for 25 -----------------");
let numbers3 = [5, 10, 15, 20, 25];
let target = 25;
let found = [false, NaN];
for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] === target) {
        found = [true, i + 1];
        break;
    }
}
if (found[0]) {
    console.log(`Found at position ${found[1]}`);
} else {
    console.log("not found");
}
console.log("--------------------------------------------------------\n");


console.log("\n-------4. Sorting an Array part.a ----------------------");
let scores = [50, 20, 70, 10, 40];
scores.sort((a, b) => (a - b));
console.log(scores)
scores.sort((a, b) => (b - a));
console.log(scores)

console.log("\n-------4. Sorting an Array part.b --alphabetical order--");
let names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"];
names.sort();
console.log(names);
console.log("--------------------------------------------------------\n");


console.log("\n-------5. Inserting Elements ---------------------------");
let animals = ["dog", "cat", "rabbit"];
console.log(animals);
animals.push("elephant");
console.log(animals);
animals.unshift("lion");
console.log(animals);
animals.splice(2, 0, "tiger");
console.log(animals);
console.log("--------------------------------------------------------\n");


console.log("\n------- 6. Deleting Elements ---------------------------");
let fruits = ["apple", "banana", "cherry", "date"];
fruits.shift();
fruits.pop();
console.log(fruits);
bananaIndex = fruits.indexOf("banana");
fruits.splice(bananaIndex, 1);
console.log(fruits);
console.log("--------------------------------------------------------\n");


console.log("\n------- 7. Combining Arrays ----------------------------");
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
/*
for (let p = 0; p < array2.length; p++) {
    array1.push(array2[p]);
}
console.log(array1);
*/
let commpanedArray = array1.concat(array2);
console.log(commpanedArray);
console.log("--------------------------------------------------------\n");


console.log("\n--------   8. Splitting an Array------------------------");

let items = ["a", "b", "c", "d", "e"];
let firstSlice = items.splice(0, 3);
let seconedSlice = items.splice(0, items.length);
console.log(firstSlice);
console.log(seconedSlice);
console.log("--------------------------------------------------------\n");


console.log("\n--------   9. Filtering Elements------------------------");
let numbers = [1, 5, 10, 15, 20, 25, 30];
let newArrG15 = numbers.filter(number => number > 15)
console.log(newArrG15);
console.log("--------------------------------------------------------\n");


console.log("\n--------   10. Advanced Challenge part a ----------------");
let numbersA = [1, 2, 2, 1, 1, 2, 3, 4, 5, 5];
let noDeuplication = numbersA.filter((value, index, arr) => arr.indexOf(value) == index);
console.log(numbersA);
console.log(noDeuplication);

console.log("\n--------   10. Advanced Challenge part b ----------------");
let numbersB = [1, 2, 3, 4, 5, 6, 7];
let n = 2;
let rotate = numbersB.splice(0, n + 1);
numbersB.push(...rotate);
console.log(numbersB);
console.log("--------------------------------------------------------\n");


console.log("\n-----------// Bonus Challenge // -----------------------");
let input1 = [1, 3, 5];
let input2 = [2, 4, 6];
let output = [];
let x = 0, y = 0;
for (let p = 0; x < input1.length && y < input2.length; p++) {
    if (input1[x] < input2[y]) {
        output.push(input1[x]);
        x++;
    } else {
        output.push(input2[y]);
        y++;
    }
}

if (x < input1.length) {
    output.push(...input1.slice(x));
} else {
    output.push(...input2.slice(y));
}
console.log(output)
console.log("--------------------------------------------------------\n");
