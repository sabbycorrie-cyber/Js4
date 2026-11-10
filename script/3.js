// Calculate the sum of even numbers in the array  

const sumEvenNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
};

const randomArray = generateRandomArray(10);
console.log("Array:", randomArray);
console.log("Sum of Even Numbers:", sumEvenNumbers(randomArray));