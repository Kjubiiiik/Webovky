let numbers = [];
let n;
for (let i = 0; i < 10; i++) {
  n = Math.floor(Math.random() * 10);
  numbers[i] = n;
}
console.log(numbers);


for (let i = 0; i < numbers; i++) {
    if (numbers[i] > numbers[i+1]); {
        console.log(numbers[i])
        let y = 0
        let z = 0
        y = numbers[i]
        z = numbers[i+1]
        console.log(y,z)
        numbers[i+1] = y
        numbers[i] = z   
    }
}

console.log(numbers)