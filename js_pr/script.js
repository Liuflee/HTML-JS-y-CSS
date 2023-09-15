console.log("Hello World!");

let num1 = prompt("Enter a number: ");
let num2 = prompt("Enter another number: ");

if (num1 == num2) {
    console.log(num1 + " is greater than " + num2);
}
else if (num1 < num2) {
    console.log(num2 + " is greater than " + num1);
}
else {
    console.log(num1 + " is equal to " + num2);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}


for (let i = 0; i <= 10; i += 5) {
    console.log(i);
    if (i == 5) {
        console.log("Five");
    }
}

