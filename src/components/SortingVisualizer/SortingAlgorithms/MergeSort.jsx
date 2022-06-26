export function MergeSort(array) {
  // array = [45, 233, 22, 11, 5, 73, 42, 99, 45, 233, 22, 11, 5, 73, 42, 99];
  const arr = array.slice();

  const animations = [];

  //let p = mergeSort(array, animations);
  if (array.length <= 1) {
    return array;
  }

  let mainArray = array;

  array = mergeMethod(arr, animations, 0, array.length - 1, mainArray);

  for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
  }
  return [animations, array];
}

function mergeMethod(array, animations, startIndex, halfPoint, mainArray) {
  // recursion base case
  // it checks if the array length is less than or equal to 1.
  // if that's the case return the arr else keep splicing.

  if (array.length <= 1) return array;
  // remember that we said merge sort uses divide and conquer
  // algorithm pattern

  // it firsts know the half point of the array.
  halfPoint = Math.floor(array.length / 2);

  // but for the fact that merge sort needs the array to be of one element, it will keep splicing that half till it fulfills the condition of having one element array.

  let arrayFirstHalf = array.slice(0, halfPoint);

  let firstHalf = mergeMethod(
    arrayFirstHalf,
    animations,
    startIndex,
    halfPoint + startIndex,
    mainArray
  );

  let arraySecondHalf = array.slice(halfPoint, array.length);
  // second array from the half point up to the end of the array.

  //halfPoint = startIndex;
  let secondHalf = mergeMethod(
    arraySecondHalf,
    animations,
    halfPoint + startIndex, // this is where the error occurs we get 2 instead of 6 duede to 8/2 = 4 4/2 = 2 we need 6
    startIndex + array.length,
    mainArray
  );

  // merge the array back and return the result.
  // note that we are using the helper function we created above.

  return merge(
    firstHalf,
    secondHalf,
    animations,
    startIndex,
    halfPoint,
    mainArray
  );
}

function merge(arr1, arr2, animations, startIndex, middleIndex, mainArray) {
  let result = []; // the array to hold results.
  let i = 0;
  let j = 0;
  let holder = [];
  while (i < arr1.length && j < arr2.length) {
    // compare the elements one at a time.
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      holder.push(j + middleIndex + startIndex);
      j++;
    } else {
      result.push(arr1[i]);
      holder.push(i + startIndex);
      i++;
    }
  }

  // these other while loops checks if there's some item left
  // in the arrays so that we can push their elements in the result array.
  while (i < arr1.length) {
    result.push(arr1[i]);
    holder.push(i + startIndex);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    holder.push(j + middleIndex + startIndex);
    j++;
  }

  for (let k = 0; k < result.length; k++) {
    if (result[k] !== mainArray[startIndex + k]) {
      animations.push(k + startIndex, holder[k], result[k]);
      mainArray[startIndex + k] = result[k];
    }
  }

  // mainArray[K+ startIndex] = result[k]

  return result;
}
