// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4 )--> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (arr, size) => {
  const chunked = [];

  arr.forEach((element, i) => {
    const currentChunk = Math.floor(i / size);
    i % size === 0 ? chunked.push([element]) : chunked[currentChunk].push(element);
  });

  return chunked;
}

const chunk2 = (arr, size) => {
  const chunked = [];

  for (let element of arr) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

// Using .slice()
const chunk3 = (arr, size) => {
  const chunked = [];
  for (i = 0; i < arr.length; i = i + size) {
    chunked.push(arr.slice(i, i + size));
  }

  return chunked;
}

console.log(chunk3([1, 2, 3, 4], 2));
console.log(chunk3([1, 2, 3, 4, 5], 2));
console.log(chunk3([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk3([1, 2, 3, 4, 5], 4));
console.log(chunk3([1, 2, 3, 4, 5], 10));