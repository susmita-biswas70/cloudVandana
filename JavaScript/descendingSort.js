function descendingBubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                // Swap the elements
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// Ask the user for input
const numbers = prompt("Enter comma-separated numbers:");

// Split the input string into an array
const numbersArray = numbers.split(",").map(Number);


// Sorting the array in descending order using bubble sort
const sortedArray = descendingBubbleSort(numbersArray);

console.log(sortedArray);


//OR
/*
// Sample array
const numbers = [5, 2, 9, 1, 5, 6];
// Split the input string into an array

// Sorting the array in descending order
numbers.sort(function(a, b) {
    // Compare b with a to sort in descending order
    return b - a;
});

console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]
*/