// Create an array of random numbers 

const generateRandomArray = (length) => {
    const randomArray = [];
    for (let i = 0; i < 100; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        randomArray.push(randomNumber);
    }
    return randomArray;
};

console.log("Generated Random Array:", generateRandomArray(10));