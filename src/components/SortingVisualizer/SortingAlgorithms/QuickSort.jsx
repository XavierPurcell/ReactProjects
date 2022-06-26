export function QuickSort(array) {
  const arr = array.slice();

  const animations = [];
  let n = arr.length;

  if (n <= 1) {
    return array;
  }

  array = quickSort(array, 0, array.length - 1, animations);
  //console.log(array);
  return [animations, array];
}

function swap(items, leftIndex, rightIndex, animations) {
  animations.push(leftIndex, rightIndex);

  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right, animations) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer

  //let pivotA = Math.floor((right + left) / 2);
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j, animations); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right, animations) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right, animations); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1, animations);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right, animations);
    }
  }
  return items;
}
