export function HeapSort(array) {
  const arr = array.slice();
  const animations = [];
  //let n = arr.length;

  // Build heap (rearrange array) // make root largest

  HeapSortStart(arr, animations);
  /*
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
  }
*/
  return [animations, arr];
}

function HeapSortStart(arr, animations) {
  let n = arr.length;
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(arr, n, i, animations);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    let temp = arr[0];
    arr[0] = arr[i]; // move our last leaf -i to the start
    arr[i] = temp; // move our root to the end (we had a temp of it above)
    animations.push(0, i);
    // call max heapify on the reduced heap
    heapify(arr, i, 0, animations); // keep shifting through
  }
  return arr;
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, n, i, animations) {
  let largest = i; // Initialize largest as root
  let l = 2 * i + 1; // left = 2*i + 1
  let r = 2 * i + 2; // right = 2*i + 2

  //animations.push(l, r);

  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) {
    //animations.push(l, n);
    //animations.push(largest, l);
    //animations.push(l, largest);
    largest = l;
  } else {
    //animations.push(l, n);
    //animations.push(l, largest);
  }

  // If right child is larger than largest so far

  if (r < n && arr[r] > arr[largest]) {
    //animations.push(r, n);
    //animations.push(largest, r);
    largest = r;
    //animations.push(r, n);
    //animations.push(largest, r);
  } else {
    //animations.push(r, largest);
  }

  // If largest is not root
  if (largest !== i) {
    let swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    animations.push(largest, i);

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest, animations);
  }
}
