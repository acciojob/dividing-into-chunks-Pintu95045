const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result = [];
  let current = [];
  let current_sum = 0;

  for (let num of arr) {
    if (current_sum + num > n) {
      // Finalize the current subarray
      result.push(current);
      // Start a new subarray with the current element
      current = [num];
      current_sum = num;
    } else {
      // Add the element to the current subarray
      current.push(num);
      current_sum += num;
    }
  }

  // Don't forget to add the last subarray
  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
