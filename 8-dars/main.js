let originalArray = [2, 4, 9, 10, 45, 67, 8, 90];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 === 0) {
    evenNumbers.push(originalArray[i]);
  } else {
    oddNumbers.push(originalArray[i]);
  }
}

console.log("Juft sonlar:", evenNumbers);
console.log("Toq sonlar:", oddNumbers);
