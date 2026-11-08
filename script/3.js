// Calculate the sum of even numbers in the array  

const generateRandomArray = (length) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        randomArray.push(randomNumber);
    }
    return randomArray;
};

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

const result = sumEvenNumbers(randomArray);
console.log("Sum of Even Numbers:", result);