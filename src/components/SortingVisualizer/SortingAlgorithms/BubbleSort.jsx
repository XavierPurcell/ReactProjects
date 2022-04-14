export function BubbleSort(array) {
  const arr = array.slice();
  const animations = [];
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap temp and arr[i]

        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        animations.push(j, j + 1); //swaps
      } else {
        animations.push(j, j + 1); // comparions
      }
    }
  }

  /*
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
  }*/

  return [animations, arr];
}
