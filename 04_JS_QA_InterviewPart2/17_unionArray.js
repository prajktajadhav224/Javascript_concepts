
// 17) Compute the union of two arrays

function unionArrays(arr1, arr2) {
    // Concatenate the two arrays
    const combinedArray = arr1.concat(arr2);

    // Create a Set from the combined array to remove duplicates
    const unionSet = new Set(combinedArray);

    // Convert the Set back to an array
    const unionArray = Array.from(unionSet);

    return unionArray;
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const unionResult = unionArrays(array1, array2);
console.log("Union of arrays:", unionResult);
