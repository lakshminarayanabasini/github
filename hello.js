


let fristNumber = parseInt(prompt("Enter fristnumber")); 
let lastnumber =parseInt(prompt("enter lastnumber"));

console.log(`The prime numbers between {fristNumber} and {lastNumber} are:`);


for (let i = fristNumber; i <= lastnumber; i++) {
    let h = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            h = 1;
            break;
        }
    }
    if (i > 1 && h == 0) {
        console.log(i);
    }
}