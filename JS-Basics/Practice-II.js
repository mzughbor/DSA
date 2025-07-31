let num = -10;
if (num >= 0) {
    console.log("Your number is positive.");
} else {
    console.log("Your number is negative.");
}


let time = 15;
if (time < 12) {
    console.log("Good morning");
} else {
    console.log("Good afternoon");
}

/*
90 and above: A
80–89: B
70–79: C
Below 70: F
*/
let grade = 69;
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else {
    console.log("F");
}


let day = "Sunday";
if (day == "Saturday" | day == "Sunday") {
    console.log("Weekend");
} else {
    console.log("Weekday");
}