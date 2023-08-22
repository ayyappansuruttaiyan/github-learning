const arr = [40, 100, 1, 5, 25, 10];
const sorted = [];
let small = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (small > arr[i]) {
    small = arr[i];
    sorted.push(small);
  }
}

console.log(sorted);
